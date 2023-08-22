import {useState} from 'react'

import useAuth from '@/utils/hooks/useAuth';

type Props = {}

const SignIn = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(null);

  const {login} = useAuth();

  const handleSignIn = async ({email}: {email: string}) => {
    setIsSubmitting(true);

    const response = await login({email});
    if(response?.error) {
      setIsSubmitting(false);
      setErrors(response.error);
    }
    setIsSubmitting(false);
    return response;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email} = e.currentTarget;


    await handleSignIn({email: email.value});
  }
  return (
    <div className='flex flex-col gap-y-4'>
      SignIn Page
      <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className='text-black px-2 py-1 rounded' />
        <button className='bg-slate-500 rounded hover:bg-slate-600 disabled:bg-slate-500/50' disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}

export default SignIn
