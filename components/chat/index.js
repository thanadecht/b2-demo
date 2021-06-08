import React, { useState } from 'react'
import { useRouter } from 'next/router'

const exceptPath = ['/seller']

const Chat = (props) => {
  const router = useRouter()
  const { route, query } = router
  if (exceptPath.includes(route)) {
    return <></>
  }

  const getSlug = () => {
    if (query.id && route === '/listing/[id]') {
      return query.id
    }
    return ''
  }

  return (
    <div>
      chat component slug : {getSlug()} <div id={getSlug()} className='baania-chat-box' key_id={getSlug()} />
    </div>
  )
}

Chat.propTypes = {}

export default Chat
