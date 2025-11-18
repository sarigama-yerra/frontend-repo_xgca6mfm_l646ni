import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Screen5Transition() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Particles color="rgba(212,175,55,0.7)" max={30} speed={0.18} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-4">
          <div className="font-cinzel text-[40px] sm:text-[48px]">Which sin will you claim?</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="font-cormorant text-[22px] sm:text-[32px] text-[var(--text-soft)]/90">Scroll to choose...</motion.div>
      </div>
      {/* Ink bleed reveal */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '50%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute top-0 left-0 right-0 bg-black"
      />
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '50%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-black"
      />
    </section>
  )
}
