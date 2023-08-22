'use client'

import AuthProvider from '@/context/AuthContext';

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const RenderProviders = ({ children }: {children: React.ReactNode}) => (
  <Providers>
    {children}
  </Providers>
);

export default RenderProviders;
