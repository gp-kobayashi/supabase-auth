import React from 'react'
import "./globals.css"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Database } from '../../lib/database.types'


const home = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div className='text-center text-xl'>
      {session ? <div>ログイン済み</div> : <div>未ログイン</div> }
    </div>
  )
}

export default home

