export function Footer() {
  return (
    <footer className='flex items-center justify-center'>
      <div className='sm:pb-4 md:pb-2 sm:px-14 md:px-56 border-t border-gray-200 flex sm:flex-col md:flex-row items-center sm:justify-center md:gap-8'>
        <img
          src='/src/assets/fire-ball-pana-logo.png'
          alt=''
          className='w-32'
        />

        <p className='text-sm text-gray-200'>
          Ignit'n Minds - All rights reserved
        </p>
      </div>
    </footer>
  )
}
