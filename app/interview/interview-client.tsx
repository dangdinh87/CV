'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { QA_DATA } from './interview-data'
import { useInterviewStore } from './use-interview-store'
import { QACard } from './qa-card'
import { ContributeForm } from './contribute-form'
import { useTheme } from '../context/theme-context'
import { CATEGORY_GROUPS } from './category-groups'
import { MorphingText } from './components/morphing-text'
import { NumberTicker } from './components/number-ticker'
import './interview.css'

const ITEMS_PER_PAGE = 50
const FONT_KEY = 'iv_font_size'

const FONT_DEFAULT = 16

function loadFontSize(): number {
  if (typeof window === 'undefined') return FONT_DEFAULT
  return parseInt(localStorage.getItem(FONT_KEY) || String(FONT_DEFAULT), 10)
}


export function InterviewClient() {
  const { theme, toggleTheme } = useTheme()
  const store = useInterviewStore(QA_DATA)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [contributeOpen, setContributeOpen] = useState(false)
  const [fontSize, setFontSize] = useState(loadFontSize)

  // Persist font size
  useEffect(() => { localStorage.setItem(FONT_KEY, String(fontSize)) }, [fontSize])

  // Reset visible count on filter change
  useEffect(() => { setVisibleCount(ITEMS_PER_PAGE) }, [store.activeCategory, store.activeLevel, store.search])

  // Keyboard shortcut: / to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        document.getElementById('searchInput')?.focus()
      }
      if (e.key === 'Escape') {
        ;(document.getElementById('searchInput') as HTMLInputElement)?.blur()
        setSidebarOpen(false)
        setSettingsOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const loadMore = useCallback(() => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }, [])

  const visibleData = store.filteredData.slice(0, visibleCount)
  const hasMore = visibleCount < store.filteredData.length

  // Infinite scroll: auto-load when sentinel enters viewport
  const sentinelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!hasMore) return
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMore() },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasMore, loadMore])

  return (
    <>
      {/* Hero */}
      <div className="iv-hero">
        <div className="iv-hero-actions">
          <button className="iv-hero-action-btn" onClick={() => setContributeOpen(true)} title="Đóng góp câu hỏi">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            Đóng góp
          </button>
          <button className="iv-hero-action-btn" onClick={() => setSettingsOpen(!settingsOpen)} title="Cài đặt">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
        </div>
        <MorphingText
          className="iv-morphing-title"
          texts={[
            `${QA_DATA.length}+ Câu Hỏi Phỏng Vấn IT`,
            'Luyện Phỏng Vấn Online',
            'Frontend · Backend · DevOps',
          ]}
        />
        <p className="iv-hero-sub">HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Golang, Database, DevOps, Testing, Security, Career & more</p>
        <div className="iv-hero-stats">
          <div className="iv-hero-stat">
            <div className="iv-hero-stat-num"><NumberTicker value={store.progress.total} /></div>
            <div className="iv-hero-stat-label">Câu Hỏi</div>
          </div>
          <div className="iv-hero-stat">
            <div className="iv-hero-stat-num"><NumberTicker value={store.progress.done} /></div>
            <div className="iv-hero-stat-label">Đã Học</div>
          </div>
          <div className="iv-hero-stat">
            <div className="iv-hero-stat-num"><NumberTicker value={store.bookmarks.size} /></div>
            <div className="iv-hero-stat-label">Đã Lưu</div>
          </div>
          <div className="iv-hero-stat">
            <div className="iv-hero-stat-num"><NumberTicker value={CATEGORY_GROUPS.filter(g => (store.groupCounts[g.label] || 0) > 0).length} /></div>
            <div className="iv-hero-stat-label">Chủ Đề</div>
          </div>
        </div>
      </div>

      {/* Topbar */}
      <div className="iv-topbar">
        <button className="iv-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
        <div className="iv-search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            id="searchInput"
            type="text"
            placeholder="Tìm kiếm câu hỏi... (nhấn / để focus)"
            value={store.search}
            onChange={(e) => store.setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Settings dialog */}
      {settingsOpen && (
        <>
          <div className="iv-settings-overlay" onClick={() => setSettingsOpen(false)} />
          <div className="iv-settings-popup">
            <div className="iv-settings-header">
              <div className="iv-settings-title">Cài Đặt</div>
              <button className="iv-settings-close" onClick={() => setSettingsOpen(false)} aria-label="Đóng">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

                {/* Dark mode */}
                <div className="iv-settings-row">
                  <span>Giao diện</span>
                  <button className="iv-settings-toggle" data-active={theme === 'dark'} onClick={toggleTheme}>
                    <span className="iv-settings-toggle-thumb" />
                  </button>
                </div>

                {/* Show all answers */}
                <div className="iv-settings-row">
                  <span>Hiện đáp án</span>
                  <button className="iv-settings-toggle" data-active={store.showAll} onClick={() => store.toggleAllAnswers(!store.showAll)}>
                    <span className="iv-settings-toggle-thumb" />
                  </button>
                </div>

                {/* Show filter */}
                <div className="iv-settings-section">
                  <span className="iv-settings-label">Câu hỏi</span>
                  <div className="iv-settings-chips">
                    {(['all', 'not-learned', 'learned-only'] as const).map(opt => (
                      <button
                        key={opt}
                        className={`iv-settings-chip ${store.showFilter === opt ? 'active' : ''}`}
                        onClick={() => store.setShowFilter(opt)}
                      >
                        {opt === 'all' ? 'Tất cả' : opt === 'not-learned' ? 'Chưa học' : 'Đã học'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order */}
                <div className="iv-settings-section">
                  <span className="iv-settings-label">Thứ tự</span>
                  <div className="iv-settings-chips">
                    <button
                      className={`iv-settings-chip ${!store.shuffled ? 'active' : ''}`}
                      onClick={() => { if (store.shuffled) store.toggleShuffle() }}
                    >
                      Theo thứ tự
                    </button>
                    <button
                      className={`iv-settings-chip ${store.shuffled ? 'active' : ''}`}
                      onClick={() => { if (!store.shuffled) store.toggleShuffle() }}
                    >
                      Xáo trộn
                    </button>
                  </div>
                </div>

                {/* Font size */}
                <div className="iv-settings-section">
                  <span className="iv-settings-label">Cỡ chữ</span>
                  <div className="iv-settings-chips">
                    {[14, 15, 16, 18, 20].map(size => (
                      <button
                        key={size}
                        className={`iv-settings-chip iv-font-chip ${fontSize === size ? 'active' : ''}`}
                        onClick={() => setFontSize(size)}
                      >
                        <span style={{ fontSize: `${size - 2}px` }}>A</span>
                        {size === FONT_DEFAULT && <span className="iv-font-chip-dot" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                <div className="iv-settings-section">
                  <span className="iv-settings-label">Đặt lại</span>
                  <div className="iv-settings-chips" style={{ marginTop: 10 }}>
                    <button className="iv-settings-chip" onClick={() => {
                      setFontSize(FONT_DEFAULT)
                      if (store.shuffled) store.toggleShuffle()
                      store.setShowFilter('all')
                      if (store.showAll) store.toggleAllAnswers(false)
                    }}>
                      Cài đặt
                    </button>
                    <button className="iv-settings-chip iv-chip-danger" onClick={() => {
                      if (confirm('Xóa toàn bộ tiến độ học tập?')) store.resetProgress()
                    }}>
                      Tiến độ
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

      {/* Sidebar overlay */}
      {sidebarOpen && <div className="iv-sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Layout */}
      <div className="iv-layout">
        {/* Sidebar */}
        <aside className={`iv-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="iv-sidebar-progress">
            <div className="iv-sidebar-progress-label">Tiến Độ Học Tập</div>
            <div className="iv-progress-bar">
              <div className="iv-progress-fill" style={{ width: `${store.progress.pct}%` }} />
            </div>
            <div className="iv-progress-text">
              {store.progress.done} / {store.progress.total} đã học ({store.progress.pct}%)
            </div>
          </div>
          <div
            className={`iv-sidebar-item ${store.activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => { store.setActiveCategory('all'); setSidebarOpen(false) }}
          >
            <span>Tất Cả</span>
            <span className="iv-sidebar-count">{QA_DATA.length}</span>
          </div>
          <div className="iv-sidebar-list">
            {CATEGORY_GROUPS.map(group => {
              const count = store.groupCounts[group.label] || 0
              if (count === 0) return null
              const isGroupActive = store.activeCategory === group.label
              const subs = store.subCategoryCounts[group.label] || {}
              const subEntries = Object.entries(subs).sort((a, b) => b[1] - a[1])
              const hasMultipleSubs = subEntries.length > 1
              // Check if a sub-category within this group is active
              const isSubActive = subEntries.some(([cat]) => store.activeCategory === cat)

              return (
                <div key={group.label}>
                  <div
                    className={`iv-sidebar-item iv-sidebar-group ${isGroupActive || isSubActive ? 'active' : ''}`}
                    onClick={() => { store.setActiveCategory(group.label); setSidebarOpen(false) }}
                  >
                    <span><img className="iv-sidebar-icon" src={group.icon} alt="" width={18} height={18} /> {group.label}</span>
                    <span className="iv-sidebar-count">{count}</span>
                  </div>
                  {/* Show sub-categories when group or sub is active */}
                  {hasMultipleSubs && (isGroupActive || isSubActive) && (
                    <div className="iv-sidebar-subs">
                      {subEntries.map(([cat, subCount]) => (
                        <div
                          key={cat}
                          className={`iv-sidebar-item iv-sidebar-sub ${store.activeCategory === cat ? 'active' : ''}`}
                          onClick={() => { store.setActiveCategory(cat); setSidebarOpen(false) }}
                        >
                          <span>{cat}</span>
                          <span className="iv-sidebar-count">{subCount}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </aside>

        {/* Content */}
        <main className="iv-content" style={{ '--iv-fs': `${fontSize}px` } as React.CSSProperties}>
          <div className="iv-content-header">
            <div>
              <div className="iv-content-title">
                {store.activeCategory === 'all' ? 'Tất Cả Câu Hỏi' : store.activeCategory}
              </div>
              {/* Show group label for number of groups */}
              <div className="iv-content-count-groups">{CATEGORY_GROUPS.filter(g => (store.groupCounts[g.label] || 0) > 0).length} nhóm</div>
              <div className="iv-content-count">{store.filteredData.length} câu hỏi</div>
            </div>
          </div>

          {visibleData.length === 0 ? (
            <div className="iv-empty">
              <p>Không tìm thấy câu hỏi nào.</p>
            </div>
          ) : (
            <>
              {visibleData.map(item => (
                <QACard
                  key={item.id}
                  item={item}
                  isBookmarked={store.bookmarks.has(item.id)}
                  isLearned={store.learned.has(item.id)}
                  isOpen={store.openAnswers.has(item.id)}
                  onToggleAnswer={store.toggleAnswer}
                  onToggleBookmark={store.toggleBookmark}
                  onToggleLearned={store.toggleLearned}
                />
              ))}
              {hasMore && (
                <div ref={sentinelRef} className="iv-load-more" style={{ textAlign: 'center', padding: '1rem', opacity: 0.5 }}>
                  Đang tải thêm...
                </div>
              )}
            </>
          )}
        </main>
      </div>
      {contributeOpen && <ContributeForm onClose={() => setContributeOpen(false)} />}
    </>
  )
}
