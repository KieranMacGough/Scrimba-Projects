import './App.css';
import Nav from './components/Nav.js';
import Event from './components/Event.js';
import events from './data.js';

function App() {
  console.log("Log");
  console.log(events);
  const panels = events.map(event => {
    return (
      <div>
      <Event 
        key={event.id}
        event={event}
      />
      <hr />
      </div>

    )
  });
  console.log(panels);
  return (
    <div className="App">
      <Nav />
      <div className="panels">
       {panels}
      </div>
    </div>
  );
}

export default App;
