import { CheckCircle, Lock } from 'phosphor-react'
// npm i date-fns
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProp {
  title: string
  slug: string
  avaliableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProp) {
  // lib date-fns: isPast() verifica se a data já passou da data corrente, deixando o conteúdo mais dinâmico
  const isLessonAvaliable = isPast(props.avaliableAt)
  // const avaliableDateFormatted = format(
  //   props.avaliableAt,
  //   "EEEE' • ' d 'de 'MMMM' • 'k'h'mm",
  //   {
  //     locale: ptBR
  //   }
  // )
  const avaliableDateFormatted = format(props.avaliableAt,"EEEE' • ' d MMMM' • 'k'h'")
  return (
    <a href='#'>
      <span className='text-gray-300'>{avaliableDateFormatted}</span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between mb-4'>
          {isLessonAvaliable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Cleared Content
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Soon
            </span>
          )}
          <span className='text-xs font-bold rounded py-[0.125rem] px-2 text-white border border-green-300'>
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>
        <strong className='text-gray-200 block mt-5'>{props.title}</strong>
      </div>
    </a>
  )
}
