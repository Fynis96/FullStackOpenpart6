import AnecdoteList from './components/AnecdoteList'
import AncedoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AncedoteForm />
    </div>
  )
}

export default App