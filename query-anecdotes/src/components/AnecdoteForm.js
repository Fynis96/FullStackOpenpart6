import { useMutation } from 'react-query'
import { createAnecdote } from "../requests"
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = ({queryClient}) => {
  const dispatch = useNotificationDispatch()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
      dispatch({type: 'NEW_NOTIF', payload: 'A new anecdote has been created'})
      setTimeout(() => {dispatch({type: 'RESET_NOTIF'})}, 5000)
    },
    onError: () => {
      dispatch({type: 'NEW_NOTIF', payload: 'too short anecdote, must have length 5 or more'})
      setTimeout(() => {dispatch({type: 'RESET_NOTIF'})}, 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({ content, votes: 0})
    
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
