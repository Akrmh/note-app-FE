import { ArrowLeft, Save } from "lucide-react";


const EditNote = () => {

  return (
    <main className='min-h-screen p-6 md:p-10 bg-[#151b23]'>
      <div className='max-w-3xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <button
            className='text-white/60 hover:text-white transition-colors inline-flex items-center gap-2'
          >
            <ArrowLeft size={20} />
            Back to Notes
          </button>
          <h1 className='text-4xl font-bold'>Edit Note</h1>
        </div>

        <form
          className='bg-[#202830] p-6 rounded-2xl border border-[#4d5662] transition-all hover:shadow-md'
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
            rows={8}
            className='w-full mb-4 bg-transparent border border-[#4d5662] py-3 px-4 rounded-xl outline-none focus:border-white transition-all duration-700 font-medium resize-none'
          />

          <button
            type='submit'
            className='w-full bg-[#151b23] py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed'
          >
             <Save size={20} className='stroke-[3]' />
             Save Changes
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditNote;
