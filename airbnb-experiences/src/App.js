import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiences from "./data"

function App() {
  const cards = experiences.map(experience => {
    return (<Card 
      key={experience.id}
      experience={experience}
    />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App;