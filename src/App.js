import './App.css'
import List from './components/List'

// CONDITIONAL RENDERING

function App() {
  const arrayOfMovies = [{ name: 'Godzilla' }, { name: 'King Kong' }, { name: 'First Blood' }]

  return (
    <div className="App">
      <header className="App-header">
        <List movies={arrayOfMovies} />
      </header>
    </div>
  )
}

export default App
