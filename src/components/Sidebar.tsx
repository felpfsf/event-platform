// import { gql, useQuery } from '@apollo/client'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLessonsQuery } from '../generated'
import { Lesson } from './Lesson'

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//       id
//       lessonType
//       availableAt
//       title
//       slug
//     }
//   }
// `

// interface GetLessonsQueryResponse {
//   lessons: {
//     id: string
//     lessonType: 'live' | 'class'
//     availableAt: string
//     title: string
//     slug: string
//   }[]
// }

export function Sidebar() {
  // const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  const { data } = useGetLessonsQuery()
  const [isOpen, setIsOpen] = useState(false)
  const { slug } = useParams<{ slug: string }>()

  function toggleSidebar() {
    setIsOpen(!isOpen)
    // console.log('click')
  }

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [slug])
  return (
    <>
      <button
        onClick={toggleSidebar}
        className='absolute top-6 right-8 z-[49] flex items-center gap-2 lg:hidden'>
        <span>Lessons</span>
        <List size={32} />
      </button>
      <aside
        className={`${
          isOpen
            ? 'fixed right-0 top-0 lg:static lg:flex'
            : 'fixed -right-full top-0 lg:static lg:flex'
        } z-50 mt-[1px] max-h-full w-screen min-w-[21.75rem] animate-slideFromRight flex-col overflow-y-scroll border-l bg-gray-700 border-gray-600 p-6 transition-all scrollbar-thin lg:w-[21.75rem]`}>
        <div className='pb-6 mb-6 border-b border-gray-500 flex items-center justify-between'>
          <span className='font-bold text-2xl block'>Lessons</span>
          <button onClick={toggleSidebar} className='lg:hidden'>
            <X size={32} />
          </button>
        </div>

        <div className='flex flex-col gap-8'>
          {data?.lessons.map(lesson => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                avaliableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })}
        </div>
      </aside>
    </>
  )
}

{
  /* <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600 sm:hidden md:hidden lg:block'></aside> */
  // <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>Lessons</span>
}
