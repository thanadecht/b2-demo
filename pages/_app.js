import React, { useEffect } from 'react'
import { CHAT_TOKEN } from '../constants'
import ChatComponent from '../components/chat'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (baaniachat) {
      baaniachat.createChatUser({
        baania_access_token: CHAT_TOKEN
      })
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <ChatComponent />
    </>
  )
}

export default MyApp
