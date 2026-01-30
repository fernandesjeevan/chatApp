import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function ChatPage() {
  const {logout,isLoggingOut} = useAuthStore();
  return (
    <div className="z-10  ">
      <h1> chatpage</h1>
      <button onClick={logout}> logout</button>
    </div>
  )
}

export default ChatPage
