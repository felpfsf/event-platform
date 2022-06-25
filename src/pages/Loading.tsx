import reactLogo from '../assets/react-logo.svg'
import { Footer } from '../components/Footer'

export function Loading() {
  return (
    <div className='flex-1'>
      <div className='md:bg-bgBlur sm:bg-bgBlurMob sm:wbg-cover bg-no-repeat h-1/2 mx-8 my-8 py-16 flex flex-col items-center gap-6'>
        <img src={reactLogo} className='w-40 animate-spin-slow'></img>
        <div className='p-4 flex flex-col items-center justify-center gap-4'>
          <h1 className='sm:text-2xl md:text-[40px] leading-tight sm:text-center md:text-left text-orange-500'>
            Welcome to Ignit'n Minds
          </h1>
          <p className='sm:text-base md:text-base leading-relaxed text-gray-100 sm:text-center md:text-left'>
            We're going to develop a full application on React JS
          </p>
          <p className='sm:text-base md:text-base leading-relaxed text-blue-500 sm:text-center md:text-left animate-pulse'>
            {' '}
            Choose a lesson to start{' '}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

{
  /* <div className='flex flex-col items-center justify-center mx-8 my-8 py-64 border border-gray-200'>
<span className='absolute left-10 top-0'>
  <ReactIcon />
</span>
<span className='mb-8'>
  <Play size={48} />
</span>
<h1 className='text-6xl'>Loading Content</h1>
<span className='my-8'>...</span>
<span>
  <HourglassLow size={48} className='animate-spin-slow' />
</span>
</div> */
}
