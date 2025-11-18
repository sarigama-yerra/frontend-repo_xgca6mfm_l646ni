import { useEffect, useState } from 'react'

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 200)
      const h = document.body.scrollHeight - window.innerHeight
      setProgress((y / h) * 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${solid ? 'backdrop-blur bg-black/70' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-cinzel text-2xl tracking-[0.25em] text-[var(--text-soft)]">ELANOR</div>
        <div className="hidden sm:flex gap-8 font-josefin text-sm text-[var(--text-soft)]/90">
          <button className="hover:text-[var(--gold)] transition-colors">Shop</button>
          <button className="hover:text-[var(--gold)] transition-colors">About</button>
          <button className="hover:text-[var(--gold)] transition-colors">Quiz</button>
          <button className="hover:text-[var(--gold)] transition-colors">Cart</button>
          <button className="hover:text-[var(--gold)] transition-colors">Search</button>
        </div>
      </div>
      <div className="h-1 w-full" style={{background: 'linear-gradient(90deg,#7b0000,#006400,#c9a961,#6b21a8,#0ea5e9,#d97706,#dc2626)', width: `${progress}%`}} />
    </div>
  )
}
