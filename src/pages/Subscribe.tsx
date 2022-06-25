// import { gql, useMutation } from '@apollo/client'
import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import codeMockup from '../assets/code-mockup.png'
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
            Build a <strong className='text-blue-500'>full application</strong>,
            from zero, with <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='sm:text-sm md:text-base leading-relaxed text-gray-200 sm:text-center md:text-left'>
            In just one week you will master in pratice one of the most used
            technology and with high demand to access the best oportunites.
          </p>
        </div>

        <div className='sm:w-full md:w-auto p-8 bg-gray-700 border border-gray-500 md:rounded'>
          <strong className='sm:text-lg md:text-2xl mb-6 block'>
            Free Subscribe
          </strong>

          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Your full name'
              onChange={e => setName(e.target.value)}
            />

            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Your best e-mail'
              onChange={e => setEmail(e.target.value)}
            />

            <button
              className='mt-4 py-4 bg-green-500 rounded uppercase font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50'
              type='submit'>
              Subscribe now!
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockup} className='mt-10' alt='' />
      <Footer />
    </div>
  )
}
