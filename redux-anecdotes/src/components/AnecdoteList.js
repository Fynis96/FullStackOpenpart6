import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from "../reducers/anecdoteReducer"
const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter}) => {
  if (filter === ''){
    return anecdotes
  }
  const regex = new RegExp( filter, 'i')
  return anecdotes.filter(anecdote => anecdote.content.match(regex))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(incrementVote(id))
  }

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList