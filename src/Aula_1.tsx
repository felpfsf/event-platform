import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { client } from './lib/apollo'

// lib do graphQL que permite escrever queries e mutations do graphQL com sintaxe highlight
// Assim melhora a visualização
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        avatarURL
        bio
      }
    }
  }
`

interface Lesson {
  id: string
  title: string
  teacher: {
    name: string
    avatarURL: string
    bio: string
  }
}

function App() {
  // useEffect para buscar os dados da API
  // useEffect(() => {
  //   client
  //     .query({
  //       query: GET_LESSONS_QUERY
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //     })
  // }, [])

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)
  // Com o hook useQuery tem o mesmo efeito porem com apenas uma linha de código
  // tipando o <{lessons: Lesson[]}>
  console.log(data)

  return (
    <>
      <h1 className='title'>Hello</h1>
      <ul>
        {/* Adição do '?' faz com que busque as lessons caso o data não tenha conteúdo vazio */}
        {data?.lessons.map(lesson => {
          return (
            <li key={lesson.id}>
              {lesson.title} - by {lesson.teacher.name}{' '}
              <img
                src={lesson.teacher.avatarURL}
                className='rounded-full w-24'
                alt=''
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
