import reactLogo from '../assets/react-logo.svg'
import { Footer } from './Footer'

export function LoadingStatus() {
  return (
    <div className='flex-1'>
      <div className='md:bg-bgBlur sm:bg-bgBlurMob sm:wbg-cover bg-no-repeat h-1/2 mx-8 my-8 py-16 flex flex-col items-center gap-6'>
        <img src={reactLogo} className='w-40 animate-spin-slow'></img>
        <div className='p-4 flex flex-col items-center justify-center gap-4'>
          <h1 className='sm:text-2xl md:text-[40px] leading-tight sm:text-center md:text-left text-orange-500'>
            Welcome to Ignit'n Minds
          </h1>
          <p className='sm:text-base md:text-base leading-relaxed text-gray-100 sm:text-center md:text-left animate-bounce'>
            We're loading your lesson
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
