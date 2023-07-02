import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "NEW_NOTIF":
      console.log(action.payload)
      console.log(state)
      return action.payload
    case "RESET_NOTIF":
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, '')

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
  const notifcationAndDispatch = useContext(NotificationContext)
  return notifcationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notifcationAndDispatch = useContext(NotificationContext)
  return notifcationAndDispatch[1]
}

export default NotificationContext