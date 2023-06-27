import AnecdoteList from './components/AnecdoteList'
import AncedoteForm from './components/AnecdoteForm'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AncedoteForm />
    </div>
  )
}

export default App