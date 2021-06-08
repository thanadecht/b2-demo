import React, { useEffect } from 'react'
import { CHAT_AGENT_TOKEN } from '../../constants'
import Link from 'next/link'

const index = (props) => {
  useEffect(() => {
    baaniachat.createChatAgent({
      baania_access_token: CHAT_AGENT_TOKEN
    })
  }, [])

  return (
    <div>
      <Link href='/' as='/'>
        <a href='/'>back to home page</a>
      </Link>
      <div>seller page</div>
      <div style={{ height: 500 }}>
        <div className='baania-chat-box-agent' />
      </div>
    </div>
  )
}

export default index
