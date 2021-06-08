import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Listing = (props) => {
  const router = useRouter()
  return (
    <div>
      <div>
        <Link href='/' as='/'>
          back to home page
        </Link>
      </div>
      <div>listing page slug : {router.query.id}</div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  // mock fetch api
  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  const sleep = async () => {
    await timeout(1000)
  }
  await sleep()
  return {
    props: {}
  }
}

export default Listing
