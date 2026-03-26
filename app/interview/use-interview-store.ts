'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import type { QAItem } from './interview-data'
import { CATEGORY_GROUPS, getGroupLabel } from './category-groups'

const STORAGE_KEYS = {
  bookmarks: 'iv_bookmarks',
  learned: 'iv_learned',
} as const

function loadSet(key: string): Set<number> {
  if (typeof window === 'undefined') return new Set()
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || '[]'))
  } catch {
    return new Set()
  }
}

function saveSet(key: string, set: Set<number>) {
  localStorage.setItem(key, JSON.stringify([...set]))
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useInterviewStore(allData: QAItem[]) {
  const [bookmarks, setBookmarks] = useState<Set<number>>(() => loadSet(STORAGE_KEYS.bookmarks))
  const [learned, setLearned] = useState<Set<number>>(() => loadSet(STORAGE_KEYS.learned))
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeLevel, setActiveLevel] = useState<string>('all')
  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set())
  const [showAll, setShowAll] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [shuffleSeed, setShuffleSeed] = useState(0)
  const [showFilter, setShowFilter] = useState<'all' | 'not-learned' | 'learned-only'>('all')

  // Persist to localStorage
  useEffect(() => { saveSet(STORAGE_KEYS.bookmarks, bookmarks) }, [bookmarks])
  useEffect(() => { saveSet(STORAGE_KEYS.learned, learned) }, [learned])

  // Group counts (how many items per group)
  const groupCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of allData) {
      const group = getGroupLabel(item.category)
      counts[group] = (counts[group] || 0) + 1
    }
    return counts
  }, [allData])

  // Sub-category counts within each group
  const subCategoryCounts = useMemo(() => {
    const counts: Record<string, Record<string, number>> = {}
    for (const item of allData) {
      const group = getGroupLabel(item.category)
      if (!counts[group]) counts[group] = {}
      counts[group][item.category] = (counts[group][item.category] || 0) + 1
    }
    return counts
  }, [allData])

  // Learned counts per group
  const learnedGroupCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of allData) {
      if (learned.has(item.id)) {
        const group = getGroupLabel(item.category)
        counts[group] = (counts[group] || 0) + 1
      }
    }
    return counts
  }, [allData, learned])

  // Keep backward-compat: raw category counts (used by sidebar sub-items)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of allData) {
      counts[item.category] = (counts[item.category] || 0) + 1
    }
    return counts
  }, [allData])

  const learnedCategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const item of allData) {
      if (learned.has(item.id)) {
        counts[item.category] = (counts[item.category] || 0) + 1
      }
    }
    return counts
  }, [allData, learned])

  // Build a set of categories for the active group/category filter
  const activeCategorySet = useMemo(() => {
    if (activeCategory === 'all') return null
    // Check if it's a group label
    const group = CATEGORY_GROUPS.find(g => g.label === activeCategory)
    if (group) return new Set(group.members)
    // Otherwise it's a raw sub-category
    return new Set([activeCategory])
  }, [activeCategory])

  // Filtered data
  const filteredData = useMemo(() => {
    let result = allData.filter(item => {
      if (activeCategorySet && !activeCategorySet.has(item.category)) return false
      if (activeLevel === 'bookmarked') return bookmarks.has(item.id)
      if (activeLevel !== 'all' && item.level !== activeLevel) return false
      if (showFilter === 'not-learned' && learned.has(item.id)) return false
      if (showFilter === 'learned-only' && !learned.has(item.id)) return false
      if (search) {
        const q = search.toLowerCase()
        return item.q.toLowerCase().includes(q)
          || item.a?.toLowerCase().includes(q)
          || item.category.toLowerCase().includes(q)
          || item.subcategory.toLowerCase().includes(q)
      }
      return true
    })
    if (shuffled) result = shuffleArray(result)
    return result
    // shuffleSeed triggers re-shuffle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData, activeCategorySet, activeLevel, search, bookmarks, learned, shuffled, shuffleSeed, showFilter])

  const toggleBookmark = useCallback((id: number) => {
    setBookmarks(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const toggleLearned = useCallback((id: number) => {
    setLearned(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const toggleAnswer = useCallback((id: number) => {
    setOpenAnswers(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const toggleAllAnswers = useCallback((show: boolean) => {
    setShowAll(show)
    if (show) {
      setOpenAnswers(new Set(filteredData.map(d => d.id)))
    } else {
      setOpenAnswers(new Set())
    }
  }, [filteredData])

  const toggleShuffle = useCallback(() => {
    setShuffled(prev => {
      if (!prev) setShuffleSeed(s => s + 1) // new shuffle on enable
      return !prev
    })
  }, [])

  const resetProgress = useCallback(() => {
    setLearned(new Set())
    setBookmarks(new Set())
    setOpenAnswers(new Set())
    setShowAll(false)
  }, [])

  // Progress
  const progress = useMemo(() => {
    const total = allData.length
    const done = learned.size
    const pct = total > 0 ? Math.round(done / total * 100) : 0
    return { total, done, pct }
  }, [allData, learned])

  return {
    bookmarks, learned, search, activeCategory, activeLevel,
    openAnswers, showAll, shuffled, showFilter, filteredData,
    categoryCounts, learnedCategoryCounts,
    groupCounts, subCategoryCounts, learnedGroupCounts,
    progress,
    setSearch, setActiveCategory, setActiveLevel, setShowFilter,
    toggleBookmark, toggleLearned, toggleAnswer, toggleAllAnswers,
    toggleShuffle, resetProgress,
  }
}
