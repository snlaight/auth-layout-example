import {useContext} from 'react'
import { getCookie, deleteCookie } from 'cookies-next'

import { AuthContext } from '@/context/AuthContext'
import { post$1, get$1 } from '@/utils/api/lib';

interface Auth {
  email: string;
}

const useAuth = () => {
  const { data: user, setAuthState, loading} = useContext(AuthContext);

  const login = async( {email }: Auth) => {
    setAuthState({
      loading: true,
      error: null,
      data: null,
    });

    try {
      const { data, error } = await post$1('/api/login', { email });

      if (error) {
        setAuthState({
          loading: false,
          error,
          data: null,
        });

        return {error}
      }
      if(data.user) {
        setAuthState({
          loading: false,
          error: null,
          data: data.user,
        });
      }

      return {data, error}

    } catch (err: any) {
      setAuthState({
        loading: false,
        error: err.message,
        data: null,
      });
    }
  }



  const getMe = async() => {
    setAuthState({
      loading: true,
      error: null,
      data: null,
    });
    try {
      const jwt = getCookie('jwt');


      if(!jwt) {
        setAuthState({
          loading: false,
          error: 'No JWT found',
          data: null,
        });
        return;
      }

      const {data, error} = await get$1('/api/me');

      if(data.user) {
        setAuthState({
          loading: false,
          error: null,
          data: data.user,
        })
      }

      return {data, error}
    } catch (err: any) {
      setAuthState({
        loading: false,
        error: err.message,
        data: null,
      });
    }
  }

  const logout = () => {
    deleteCookie('jwt');
    setAuthState({
      loading: false,
      error: null,
      data: null,
    });
  }

  return {
    user,
    loading,
    login,
    logout,
    getMe,
  }
}

export default useAuth;
