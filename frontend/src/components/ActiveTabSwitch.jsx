import React from 'react'
import {useChatStore} from "../store/useChatStore"
function ActiveTabSwitch() {
  const {activeTab,setActiveTab} = useChatStore()
  return (
    <div className='tabs tabs-boxed bg-transparent p-2 m-2'>
      <button onClick={()=> setActiveTab("chats")}
      className={`tab ${
        activeTab ==="chats"? "bg-cyan-500/20
      }`}
    </div>
  )
}

export default ActiveTabSwitch