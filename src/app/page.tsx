'use client'

import useAuth from '@/utils/hooks/useAuth'

const Home = () => {
  const { logout } = useAuth()

  return (
    <main className="flex flex-col items-center justify-between p-24">
        Now I am logged in !
        <button className='bg-slate-500 px-4 rounded py-2' onClick={()=> logout()}>
          Logout
        </button>
    </main>
  )
}

export default Home
