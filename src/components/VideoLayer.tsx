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

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    videoId: string
    title: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function VideoLayer(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data) {
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

  console.log(data)

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

      <div className='p-8 max-w-[1100px] mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>{data.lesson.title}</h1>
            <p className='mt-4 text-base text-gray-200 leading-relaxed'>
              {data.lesson.description}
            </p>
            <div className='mt-6 flex items-center gap-4'>
              <img
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src={data.lesson.teacher.avatarURL}
                alt=''
              />
              <div className='leading-relaxed'>
                <strong className='text-2xl font-bold block'>
                  {data.lesson.teacher.name}
                </strong>
                <span className='text-sm text-gray-200 block'>
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <a
              href='#'
              className='text-sm font-bold uppercase p-4 bg-green-500 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition-colors'>
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

        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a
            className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
            href='#'>
            <div className='bg-green-700 py-12 px-6 '>
              <FileArrowDown size={40} />
            </div>
            <div className='leading-relaxed py-6'>
              <strong className='text-2xl'>Material Complementar</strong>
              <p className='text-sm text-gray-200 mt-2'>
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
            <div className='leading-relaxed py-6'>
              <strong className='text-2xl'>Exclusive Wallpapers</strong>
              <p className='text-sm text-gray-200 mt-2'>
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
