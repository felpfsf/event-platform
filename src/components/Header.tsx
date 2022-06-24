import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className='w-full py-5 flex items-center lg:justify-center bg-gray-700 border-b border-gray-600 sm:justify-between sm:p-6'>
      <Logo />
      <span className='flex items-center gap-2 lg:hidden'>
        <span className='text-sm'>Lessons</span>
        {!isOpen ? (
          <List
            size={32}
            className='text-blue-500 cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <>
            <X
              size={32}
              className='text-blue-500 cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            />
            <Sidebar />
          </>
        )}
      </span>
    </header>
  )
}
