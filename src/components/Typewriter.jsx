import { useEffect, useState } from 'react'

export default function Typewriter({ lines }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [blinking, setBlinking] = useState(true)

  useEffect(() => {
    if (!lines || index >= lines.length) return
    const { content, speed = 70, pause = 1000 } = lines[index]
    let i = 0
    setText('')
    setBlinking(true)

    const interval = setInterval(() => {
      setText(prev => prev + content[i])
      i++
      if (i >= content.length) {
        clearInterval(interval)
        setTimeout(() => {
          setBlinking(false)
          setIndex(idx => idx + 1)
        }, pause)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [index, lines])

  return (
    <div className="w-full flex flex-col items-center font-cormorant">
      {lines.slice(0, index + 1).map((l, i) => (
        <div key={i} className="relative">
          <p className={`text-center ${l.className}`}>{i === index ? text : i < index ? l.content : ''}</p>
          {i === index && blinking && (
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-8 bg-[rgba(201,169,97,0.95)] animate-pulse rounded-sm" />
          )}
        </div>
      ))}
    </div>
  )
}
