// 'use client'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
// import { useEffect, useState } from 'react'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: countries } = await supabase.from('countries').select()
  // const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     const supabase = createClient()
  //     const { data: countries } = await supabase.from('countries').select()
  //     setCountries(countries as any)
  //   }
  //   fetchCountries()
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </main>
  )
}
