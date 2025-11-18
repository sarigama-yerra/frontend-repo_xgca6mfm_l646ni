import Typewriter from './Typewriter'
import Particles from './Particles'

export default function Screen3Intro() {
  const lines = [
    { content: 'Perfume is confession.', speed: 80, pause: 1500, className: 'font-cinzel text-[40px] sm:text-[56px] text-[var(--text-soft)]' },
    { content: 'Every fragrance reveals what you hide.', speed: 70, pause: 1500, className: 'font-cormorant text-[28px] sm:text-[40px] text-[var(--text-soft)]/90 mt-16' },
    { content: 'Seven scents based on the seven deadly sins—', speed: 70, pause: 1000, className: 'font-cormorant text-[22px] sm:text-[32px] text-[#C9A961] mt-20' },
    { content: "each one a guilty pleasure you're finally allowed to claim.", speed: 70, pause: 2000, className: 'font-cormorant italic text-[22px] sm:text-[32px] text-[#C9A961]' },
  ]

  const lastLine = { content: 'Hand-blended. Limited batches. Unapologetically honest.', speed: 60, pause: 800, className: 'font-josefin text-[16px] sm:text-[24px] text-[#E8E6E3]/80 mt-16' }

  const marbleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><filter id="m"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2"/></filter><rect width="800" height="600" filter="url(#m)"/></svg>`
  const marbleUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(marbleSvg)}")`

  return (
    <section className="relative min-h-[120vh] overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-burgundy) 100%)'
      }} />
      {/* Marble and columns as subtle overlays */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: marbleUrl }} />
      <div className="absolute left-0 top-0 bottom-0 w-24 opacity-30" style={{background:"linear-gradient(90deg, rgba(184,160,120,0.08), transparent)"}}/>
      <div className="absolute right-0 top-0 bottom-0 w-24 opacity-30" style={{background:"linear-gradient(270deg, rgba(184,160,120,0.08), transparent)"}}/>
      <Particles color="rgba(212,175,55,0.6)" max={18} speed={0.12} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-32 text-center">
        <Typewriter lines={[...lines, lastLine]} />
        <div className="hr-gold mx-auto mt-16 w-2/3" />
      </div>
    </section>
  )
}
