import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const apiUrl = import.meta.env.VITE_API_BASE_URL


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password
    }
    try {
      const response = await fetch (`${apiUrl}/v1/auth/login`,{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
      })
      const data = await response.json()
      
      if(data.ok){
        localStorage.setItem('note-app-token')
        navigate('/notes')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='min-h-screen p-6 md:p-10 bg-[#151b23] flex items-center justify-center'>
      <div className='w-full max-w-md'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Login</h1>

        <form onSubmit={handleSubmit}  className='bg-[#202830] p-6 rounded-2xl border border-[#4d5662] transition-all'>

          <input
            value={email}
            onChange={ e => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            required
            className='w-full mb-4 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
          />

          <input
            value={password}
            onChange={ e => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            required
            className='w-full mb-4 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
          />

          <button
            type='submit'
            className='w-full bg-[#151b23] py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed'
          >
            Login
          </button>

          <div className='mt-6 text-center'>
            <Link
              to='/signup'
              type='button'
              className=' text-white/60 hover:text-white transition-colors inline-flex items-center gap-2'
            >
              Don&apos;t have an account? Sign up
              <ArrowRight size={16} />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
