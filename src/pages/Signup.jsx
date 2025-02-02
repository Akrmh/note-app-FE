
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  
  return (
    <main className='min-h-screen p-6 md:p-10 bg-[#151b23] flex items-center justify-center'>
      <div className='w-full max-w-2xl'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Create Account</h1>

        <form
          className='bg-[#202830] p-6 rounded-2xl border border-[#4d5662] transition-all hover:shadow-md'
        >
          <div className='flex gap-4 mb-4'>
            <input
              type='text'
              placeholder='First Name'
              required
              className='flex-1 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
            />

            <input
              type='text'
              placeholder='Last Name'
              required
              className='flex-1 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
            />

            <input
              type='number'
              placeholder='Age'
              required
              min='1'
              max='150'
              className='w-24 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
            />
          </div>

          <div className='flex gap-4 mb-4'>
            <input
              type='email'
              placeholder='Email'
              required
              className='flex-1 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
            />

            <input
              type='password'
              placeholder='Password'
              required
              className='flex-1 bg-transparent border border-tertiary py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-[#151b23] py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
          >
            Create Account 
          </button>

          <div className='mt-6 text-center'>
            <Link to='/' className='text-white/60 hover:text-white transition-colors inline-flex items-center gap-2'>
              Already have an account? Login
              <ArrowRight size={16} />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
