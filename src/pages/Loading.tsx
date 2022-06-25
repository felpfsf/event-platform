import { ReactIcon } from '../components/ReactIcon'

export function Loading() {
  return (
    <div className='flex-1'>
      <div className='md:bg-bgBlur sm:bg-bgBlurMob sm:wbg-cover bg-no-repeat h-1/2 mx-8 my-8 py-16'>
        <span className='absolute left-10 top-[120px] overflow-clip'>
          <ReactIcon />
        </span>
        <div className='flex flex-col items-center justify-center'>
          <h1>Welcome to Ignit'n Minds</h1>
          <p>We're going to develop a full application on React JS</p>
        </div>
      </div>
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
