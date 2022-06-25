import { CheckCircle, Lock } from 'phosphor-react'
// npm i date-fns
import { isPast, format } from 'date-fns'
// import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
// CSS
// npm i classnames
import classNames from 'classnames'

interface LessonProp {
  title: string
  slug: string
  avaliableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProp) {
  const { slug } = useParams<{ slug: string }>()
  // lib date-fns: isPast() verifica se a data já passou da data corrente, deixando o conteúdo mais dinâmico
  const isLessonAvaliable = isPast(props.avaliableAt)
  // const avaliableDateFormatted = format(
  //   props.avaliableAt,
  //   "EEEE' • ' d 'de 'MMMM' • 'k'h'mm",
  //   {
  //     locale: ptBR
  //   }
  // )

  const isActiveLesson = slug === props.slug

  // Optei por deixar os valores no padrão Mês, Dia e Ano
  const avaliableDateFormatted = format(
    props.avaliableAt,
    "EEEE' • ' MMMM d' • 'k'h'"
  )
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className='text-gray-300'>{avaliableDateFormatted}</span>

      {/* <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500
        ${isActiveLesson ? 'bg-green-500' : ''}`}></div> */}

      {/* Método com classnames */}
      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500 linkActive': isActiveLesson
          },
        )}>
        <header className='flex items-center justify-between mb-4'>
          {isLessonAvaliable ? (
            <span
              className={classNames(
                'text-sm text-blue-500 font-medium flex items-center gap-2',
                {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson
                }
              )}>
              <CheckCircle size={20} />
              Avaliable Content
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Soon
            </span>
          )}
          <span
            className={classNames(
              'text-xs font-bold rounded py-[0.125rem] px-2 text-white border',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson
              }
            )}>
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>
        <strong
          className={classNames('block mt-5', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
