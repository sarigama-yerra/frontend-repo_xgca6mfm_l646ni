import Nav from './components/Nav'
import Screen1Void from './components/Screen1Void'
import Screen2Split from './components/Screen2Split'
import Screen3Intro from './components/Screen3Intro'
import Screen4Craft from './components/Screen4Craft'
import Screen5Transition from './components/Screen5Transition'
import Screen6Constellation from './components/Screen6Constellation'

function App() {
  return (
    <div className="min-h-screen text-[var(--text-soft)]">
      <Nav />
      <main className="overflow-x-hidden">
        <Screen1Void />
        <Screen2Split />
        <Screen3Intro />
        <Screen4Craft />
        <Screen5Transition />
        <Screen6Constellation />
      </main>
    </div>
  )
}

export default App
