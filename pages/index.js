import Head from 'next/head'
import react, { useState, useEffect } from 'react'
import { LISTINGS } from '../constants'
import Link from 'next/link'
import { CHAT_TOKEN } from '../constants'

export default function Home() {
  useEffect(() => {
    baaniachat.createChatUser({
      baania_access_token: CHAT_TOKEN
    })
  }, [])
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Home page</h1>
      <Link href='/seller' as='/seller'>
        <a href='/seller'>go to seller page</a>
      </Link>
      <ul>
        {LISTINGS.map(({ keyId }) => {
          return (
            <Link href='/listing/[id]' as={`/listing/${keyId}`}>
              <li style={{ cursor: 'pointer', margin: '0.75rem 0rem' }}>{keyId}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
