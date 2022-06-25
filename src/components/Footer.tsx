import igMindsLogo from '../assets/fire-ball-pana-logo.png'

export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-between border-t border-gray-200 px-8 py-4 text-xs md:flex-row'>
      <div className='flex flex-col items-center lg:flex-row'>
        <img
          src={igMindsLogo}
          alt=''
          className='w-32'
        />

        <p className='ml-6 text-gray-200 leading-relaxed'>
          Ignit'n Minds - All rights reserved
        </p>
      </div>
    </footer>
  )
}
