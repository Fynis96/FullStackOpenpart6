import { useDispatch, useSelector } from 'react-redux'
import { incrementVote } from "../reducers/anecdoteReducer"
import { setNotificationAndTimer } from '../reducers/notificationReducer'
const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter}) => {
  if (filter === ''){
    console.log(anecdotes)
    return anecdotes
  }
  const regex = new RegExp( filter, 'i')
  return anecdotes.filter(anecdote => anecdote.content.match(regex))
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(incrementVote(id))
    dispatch(setNotificationAndTimer(`You voted ${anecdotes.find(n => n.id === id).content} `, 5))
  }

  const anecdotesToSort = [...anecdotes]
  

  return (
    <div>
      {anecdotesToSort.sort((a, b) => b.votes - a.votes).map(anecdote =>
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