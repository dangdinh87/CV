'use client'

import { useCallback, useEffect, useRef } from 'react'

const morphTime = 1.5
const cooldownTime = 0.5

function useMorphingText(texts: string[]) {
  const textIndexRef = useRef(0)
  const morphRef = useRef(0)
  const cooldownRef = useRef(0)
  const timeRef = useRef(new Date())
  const text1Ref = useRef<HTMLSpanElement>(null)
  const text2Ref = useRef<HTMLSpanElement>(null)

  const setStyles = useCallback(
    (fraction: number) => {
      const [el1, el2] = [text1Ref.current, text2Ref.current]
      if (!el1 || !el2) return

      el2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const inv = 1 - fraction
      el1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`
      el1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`

      el1.textContent = texts[textIndexRef.current % texts.length]
      el2.textContent = texts[(textIndexRef.current + 1) % texts.length]
    },
    [texts],
  )

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current
    cooldownRef.current = 0
    let fraction = morphRef.current / morphTime
    if (fraction > 1) {
      cooldownRef.current = cooldownTime
      fraction = 1
    }
    setStyles(fraction)
    if (fraction === 1) textIndexRef.current++
  }, [setStyles])

  const doCooldown = useCallback(() => {
    morphRef.current = 0
    const [el1, el2] = [text1Ref.current, text2Ref.current]
    if (el1 && el2) {
      el2.style.filter = 'none'
      el2.style.opacity = '100%'
      el1.style.filter = 'none'
      el1.style.opacity = '0%'
    }
  }, [])

  useEffect(() => {
    let id: number
    const animate = () => {
      id = requestAnimationFrame(animate)
      const now = new Date()
      const dt = (now.getTime() - timeRef.current.getTime()) / 1000
      timeRef.current = now
      cooldownRef.current -= dt
      if (cooldownRef.current <= 0) doMorph()
      else doCooldown()
    }
    animate()
    return () => cancelAnimationFrame(id)
  }, [doMorph, doCooldown])

  return { text1Ref, text2Ref }
}

interface MorphingTextProps {
  texts: string[]
  className?: string
}

export function MorphingText({ texts, className }: MorphingTextProps) {
  const { text1Ref, text2Ref } = useMorphingText(texts)
  return (
    <div className={`morphing-text-wrap ${className || ''}`}>
      <span className="morphing-text-span" ref={text1Ref} />
      <span className="morphing-text-span" ref={text2Ref} />
      {/* SVG filter: adjusted threshold for white text on dark bg */}
      <svg style={{ position: 'fixed', height: 0, width: 0 }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -100"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
