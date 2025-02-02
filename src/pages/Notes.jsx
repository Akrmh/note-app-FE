import { Plus,Box} from 'lucide-react';



const Notes = () => {

      return (
    
        <main className='min-h-screen p-6 md:p-10 bg-[#151b23]'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center'>My Notes</h1>
        <form
          className='mb-10 bg-[#202830] p-6 rounded-2xl border border-[#4d5662] transition-all hover:shadow-md'
        >
          <input
            placeholder='Note Title'
            type='text'
            required
            className='w-full mb-4 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
          />
          <textarea
            placeholder='Start typing your note...'
            required
            rows={3}
            className='w-full mb-4 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium'
          />
          <button
            type='submit'
            className='w-full bg-[#151b23] py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
          >
            <Plus size={20} className='stroke-[3]' />
            Add Note
          </button>
        </form>
        <div className='flex flex-col items-center justify-center bg-[#202830] p-8 rounded-2xl shadow-sm border border-[#4d5662] text-center'>
          <Box className='text-[#4d5662] mb-4' size={56} strokeWidth={1.5} />
          <p className='text-white/60 text-lg font-medium mb-2'>Your note space is empty</p>
          <p className='text-sm text-white/40'>Click the &quot;Add Note&quot; button above to create your first note</p>
        </div>
      </div>
    </main>
        
      );
}

export default Notes;
