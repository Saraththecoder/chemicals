import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function useCounter() {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]')
    if (!counters.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = parseInt(el.dataset.count, 10)
        const suffix = el.dataset.suffix || ''
        let start = 0
        const step = Math.ceil(target / (1800 / 16))
        const tick = () => {
          start = Math.min(start + step, target)
          el.textContent = start + suffix
          if (start < target) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      })
    }, { threshold: 0.5 })
    counters.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])
}
