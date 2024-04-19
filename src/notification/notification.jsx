import { useState, createContext, useContext } from "react";

const NotificationContext = createContext()

const Notification = ({ message, severity }) => {

    const notificationStyles = {
      position: 'fixed',
      top: 80,
      right: 1,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'error' ? 'red' : '#186300',
      padding: '10px 20px 10px 20px',
      color: 'white',
      borderRadius: 5,
      margin: 50,
      zIndex: 40,
      transition: 500
    }

    if(message === '') {
        return
    }

    return (
      <div style={notificationStyles}>
        { message }
      </div>
    )
  }



export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}