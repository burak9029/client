import React from 'react'

const Notification = ({message, type}) => {
    const backgroundColor = type === 'success' ? 'bg-green500': 'bg-red-500';

  return (
    <div className={`fixed top-0 left-0 w-full p-4 ${backgroundColor} text-white` }>{message}
    </div>
  )
}

export default Notification