import React from 'react'

type Props = {
  children: React.ReactNode
}

const AuthenticatedLayout = ({children}: Props) => {
  return (
    <div className='flex items-center flex-col'>Authenticated Layout {children}</div>
  )
}

export default AuthenticatedLayout
