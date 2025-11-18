import { useMemo } from 'react'
import { motion } from 'framer-motion'

const sins = [
  { key: 'wrath', name: 'WRATH', color: '#a30b0b', desc: 'Vengeance incarnate, leather creaking as fists clench. Blood orange bleeds across altars of smoldering retribution.' },
  { key: 'envy', name: 'ENVY', color: '#0a8f3d', desc: 'Covetous desire rooted in poison—serpentine vetiver, bitter absinthe. What they have, you will take.' },
  { key: 'lust', name: 'LUST', color: '#b0004f', desc: 'Raw seduction without apology—primal musk, bleeding roses, dark sin. This is hunger made manifest.' },
  { key: 'greed', name: 'GREED', color: '#b8860b', desc: 'Insatiable acquisition—amber hoarded, sandalwood stolen, oud clutched tight. Twelve-hour longevity.' },
  { key: 'gluttony', name: 'GLUTTONY', color: '#cf8f3a', desc: 'Indulgence without end—dulce de leche, bourbon, honeyed excess. One spray is never enough.' },
  { key: 'sloth', name: 'SLOTH', color: '#6b7280', desc: 'Surrender to stillness—lavender haze, opium dreams, weightless oblivion. Let the world burn.' },
  { key: 'pride', name: 'PRIDE', color: '#d4af37', desc: 'Regal, untouchable, draped in florals and gold. Wear this and know: you are better.' },
]

const positions = [
  [0, -140], [120, -80], [140, 40], [60, 140], [-60, 140], [-140, 40], [-120, -80]
]

export default function Screen6Constellation() {
  const nodes = useMemo(() => sins.map((s, i) => ({ ...s, pos: positions[i] })), [])
  return (
    <section className="relative min-h-screen py-32">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(1000px 700px at 50% 20%, rgba(212,175,55,0.08), transparent 40%), linear-gradient(180deg,#0A0A0A, #1A0B0F)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="relative h-[640px] hidden md:block mx-auto">
          {/* connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 640">
            <g stroke="rgba(200,200,200,0.25)" strokeWidth="1">
              {nodes.map((n, i) => {
                const [x, y] = [400 + n.pos[0], 320 + n.pos[1]]
                const [nx, ny] = [400 + nodes[(i + 1) % nodes.length].pos[0], 320 + nodes[(i + 1) % nodes.length].pos[1]]
                return <line key={i} x1={x} y1={y} x2={nx} y2={ny} />
              })}
            </g>
          </svg>

          {nodes.map((n, i) => (
            <motion.div
              key={n.key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.3 }}
              className="absolute flex flex-col items-center text-center"
              style={{ left: `calc(50% + ${n.pos[0]}px)`, top: `calc(50% + ${n.pos[1]}px)` }}
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2" style={{ borderColor: n.color, boxShadow: `0 0 30px ${n.color}55` }} />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: `inset 0 0 20px ${n.color}55` }} />
              </div>
              <div className="font-cinzel mt-3 tracking-[0.2em] text-sm" style={{ color: n.color }}>{n.name}</div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mt-2 w-64 text-xs font-cormorant text-[var(--text-soft)]/80 hidden lg:block">
                {n.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {nodes.map((n, i) => (
            <motion.div key={n.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 border rounded-xl border-[var(--dusty-gold)]/60">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2" style={{ borderColor: n.color, boxShadow: `0 0 20px ${n.color}55` }} />
                <div>
                  <div className="font-cinzel tracking-[0.2em] text-sm" style={{ color: n.color }}>{n.name}</div>
                  <div className="text-xs font-cormorant text-[var(--text-soft)]/80">{n.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
