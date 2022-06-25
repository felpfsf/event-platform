import { DefaultUi, Player, Youtube } from '@vime/react'
import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  CaretRight,
  Image,
  HourglassLow,
  Play
} from 'phosphor-react'

import '@vime/core/themes/default.css'
import { gql, useQuery } from '@apollo/client'
import { useGetLessonBySlugQuery } from '../generated'

// const GET_LESSON_BY_SLUG_QUERY = gql`
//   query GetLessonBySlug($slug: String) {
//     lesson(where: { slug: $slug }) {
//       videoId
//       title
//       description
//       teacher {
//         bio
//         avatarURL
//         name
//       }
//     }
//   }
// `

// interface GetLessonBySlugResponse {
//   lesson: {
//     videoId: string
//     title: string
//     description: string
//     teacher: {
//       bio: string
//       avatarURL: string
//       name: string
//     }
//   }
// }

interface VideoProps {
  lessonSlug: string
}

export function VideoLayer(props: VideoProps) {
  // const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
  //   variables: {
  //     slug: props.lessonSlug
  //   }
  // })

  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className='flex-1'>
        <div className='flex flex-col items-center justify-center mx-8 my-8 py-64'>
          <span className='mb-8'>
            <Play size={48} />
          </span>
          <h1 className='text-6xl'>Loading Content</h1>
          <span className='my-8'>...</span>
          <span>
            <HourglassLow size={48} />
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='md:p-8 max-w-[1100px] mx-auto sm:p-6'>
        <div className='flex md:items-start md:gap-16 md:flex-row sm:flex-col sm:gap-6'>
          <div className='flex-1'>
            <h1 className='md:text-2xl font-bold sm:text-lg'>
              {data.lesson.title}
            </h1>
            <p className='mt-4 text-base text-gray-200 leading-relaxed sm:text-sm'>
              {data.lesson.description}
            </p>
            
            {data.lesson.teacher && (
              <div className='mt-6 flex md:items-center gap-4 sm:items-start'>
                <img
                  className='h-16 w-16 rounded-full border-2 border-blue-500'
                  src={data.lesson.teacher.avatarURL}
                  alt=''
                />
                <div className='leading-relaxed'>
                  <strong className='md:text-2xl font-bold block sm:text-lg'>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className='text-sm text-gray-200 block'>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-col gap-4'>
            <a
              href='#'
              className='text-sm font-bold uppercase p-4 bg-green-500 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition-colors sm:px-12'>
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a
              href='#'
              className='text-sm font-bold text-blue-500 uppercase p-4 border border-blue-500 rounded flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors'>
              <Lightning size={24} />
              Acesso o desafio
            </a>
          </div>
        </div>

        <div className='md:gap-8 md:mt-20 md:grid md:grid-cols-2 sm:flex sm:flex-col sm:mt-16 sm:gap-4'>
          <a
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors sm:gap-4'
            href='#'>
            <div className='bg-green-700 py-12 px-6'>
              <FileArrowDown size={40} />
            </div>
            <div className='md:leading-relaxed py-6 sm:py-4 sm:leading-7'>
              <strong className='md:text-2xl sm:text-lg'>
                Material Complementar
              </strong>
              <p className='md:text-sm text-gray-200 md:mt-2 sm:text-xs sm:mt-1 sm:leading-5'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className='text-2xl text-blue-500 h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
          <a
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
            href='#'>
            <div className='bg-green-700 py-12 px-6 '>
              <Image size={40} />
            </div>
            <div className='md:leading-relaxed py-6 sm:py-4 sm:leading-7'>
              <strong className='text-2xl sm:text-lg'>
                Exclusive Wallpapers
              </strong>
              <p className='md:text-sm text-gray-200 md:mt-2 sm:text-xs sm:mt-1 sm:leading-5'>
                Download our exclusive wallpapers and customize your desktop
              </p>
            </div>
            <div className='text-2xl text-blue-500 h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
