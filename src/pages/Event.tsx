import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoLayer } from '../components/VideoLayer'
import { Loading } from './Loading'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    // min-h-screen = min-height: 100vh
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? <VideoLayer lessonSlug={slug} /> : <Loading />}
        <Sidebar />
      </main>
    </div>
  )
}
