import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from './Particles'

export default function Screen1Void() {
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPrompt(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[var(--bg-dark)] overflow-hidden cursor-gothic">
      <div className="absolute inset-0" style={{background:"radial-gradient(40% 60% at 50% 50%, rgba(0,0,0,0.2), transparent 70%)"}}/>
      <Particles color="rgba(212,175,55,0.8)" max={8} speed={0.08} />
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-cinzel text-[56px] sm:text-[72px] text-[var(--text-soft)] drop-shadow glow-crimson"
          >
            Ready to indulge in sin?
          </motion.h1>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showPrompt && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <div className="font-josefin text-sm tracking-widest text-[var(--text-soft)]/80">Descend into temptation</div>
            <div className="mx-auto mt-2 w-0.5 h-10 bg-[var(--crimson)]/80" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
