import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../generated'

// const CREATE_SUBSCRIBER_MUTATION = gql`
//   mutation CreateSubscriber($name: String!, $email: String!) {
//     createSubscriber(data: { name: $name, email: $email }) {
//       id
//     }
//   }
// `

export function Subscribe() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // const [createSubscriber, { loading }] = useMutation(
  //   CREATE_SUBSCRIBER_MUTATION
  // )

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: {
        name,
        email
      }
    })
    navigate('/event')
  }

  return (
    <div className='min-h-screen md:bg-bgBlur sm:bg-bgBlurMob bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full sm:max-w-[450px] md:max-w-[1100px] mx-auto mt-20 flex items-center sm:flex-col md:flex-row sm:justify-center md:justify-between'>
        <div className='sm:p-6 md:max-w-[640px] flex sm:flex-col sm:items-center md:items-start sm:mt-10 sm:gap-6'>
          <Logo />
          <h1 className='sm:text-3xl md:text-[40px] leading-tight sm:text-center md:text-left'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='sm:text-sm md:text-base leading-relaxed text-gray-200 sm:text-center md:text-left'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className='sm:w-full md:w-auto p-8 bg-gray-700 border border-gray-500 md:rounded'>
          <strong className='sm:text-lg md:text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Seu nome completo'
              onChange={e => setName(e.target.value)}
            />

            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Seu melhor e-mail'
              onChange={e => setEmail(e.target.value)}
            />

            <button
              className='mt-4 py-4 bg-green-500 rounded uppercase font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
              type='submit'>
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src='/src/assets/code-mockup.png' className='mt-10' alt='' />
      <Footer/>
    </div>
    
  )
}
