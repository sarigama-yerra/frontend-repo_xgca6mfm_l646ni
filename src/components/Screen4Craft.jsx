import { motion } from 'framer-motion'

const items = [
  {
    title: 'Hand-blended micro-batches',
    subtitle: '20% perfume oil concentration',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--gold)]">
        <path d="M7 10l5-5 5 5v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-7z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    title: 'Limited production',
    subtitle: 'Each batch numbered',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--gold)]">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    title: "Collector's packaging",
    subtitle: 'Luxury without compromise',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--gold)]">
        <rect x="5" y="7" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7l5-4 5 4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
]

export default function Screen4Craft() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"url('data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 800 600\\\"><filter id=\\"m\\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.4\\" numOctaves=\\"2\\"/></filter><rect width=\\"800\\" height=\\"600\\" filter=\\"url(%23m)\\"/></svg>')"}} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="p-8 border rounded-xl border-[var(--dusty-gold)]/60 bg-black/20 backdrop-blur-sm key-border"
            >
              <div className="mb-4">{it.icon}</div>
              <div className="font-josefin text-[18px] mb-2 tracking-wide text-[var(--text-soft)]">{it.title}</div>
              <div className="font-josefin text-[14px] text-[var(--text-soft)]/80">{it.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
