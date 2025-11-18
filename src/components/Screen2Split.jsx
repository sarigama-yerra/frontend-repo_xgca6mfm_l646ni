import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Implements the exact sequence timing 0-6s
export default function Screen2Split() {
  const lineRef = useRef(null)

  // timings
  // 0-1.5s: fade in ELANOR, hold to 2.0s
  // 2.0-2.5s: thin red line appears at top
  // 2.5-3.5s: line rotates and drops slicing through
  // 3.5-4.5s: word splits ELA / NOR apart
  // 4.5-5.0s: line rotates to horizontal divider
  // 5.0-6.0s: quote fades in

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
      {/* wordmark */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1], y: [10, 0, 0] }}
          transition={{ times: [0, 1, 1.33], duration: 1.5 }}
          className="font-cinzel text-[18vw] sm:text-[160px] leading-none text-[var(--text-soft)] tracking-[0.2em] relative"
        >
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [-200, -200] }}
            transition={{ delay: 3.5, duration: 1 }}
            className="inline-block"
          >ELA</motion.span>
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [200, 200] }}
            transition={{ delay: 3.5, duration: 1 }}
            className="inline-block"
          >NOR</motion.span>
        </motion.div>

        {/* red line sequence */}
        <motion.div
          ref={lineRef}
          initial={{ opacity: 0, rotate: 0, top: 0, left: '50%', x: '-50%' }}
          animate={{
            opacity: [0, 1, 1, 1, 1],
            rotate: [0, 0, 90, 90, 0],
            top: ['0%', '0%', '0%', '100%', '50%'],
            left: ['50%', '50%', '50%', '50%', '50%'],
            x: ['-50%', '-50%', '-50%', '-50%', '-50%'],
            width: ['2px', '2px', '2px', '2px', '100%'],
          }}
          transition={{ duration: 5, times: [0, 0.2, 0.5, 0.7, 0.9], delay: 2 }}
          className="absolute h-[2px] bg-[var(--crimson)]"
          style={{ width: 2 }}
        />

        {/* quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
          className="mt-10 text-center"
        >
          <div className="italic font-cormorant text-[24px] sm:text-[34px] text-[var(--text-soft)]/95">
            "Seven scents. Seven temptations. Unapologetically yours."
          </div>
        </motion.div>
      </div>
    </section>
  )
}
