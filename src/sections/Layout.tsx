'use client';

import {useEffect} from 'react'

import useAuth from '@/utils/hooks/useAuth';
import AuthenticatedLayout from '@/sections/AuthenticatedLayout'
import SignIn from '@/components/SignIn';

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  const { user, loading, getMe } = useAuth();

  useEffect(()=> {
    getMe();
  },[])

  if(loading) {
    return <p>Loading....</p>
  }

  const Markup = user ?
  <AuthenticatedLayout>
    {children}
  </AuthenticatedLayout> : <SignIn />;
  return Markup;
}

export default Layout
