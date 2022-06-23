import { HourglassLow, Play } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoLayer } from '../components/VideoLayer'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    // min-h-screen = min-height: 100vh
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? (
          <VideoLayer lessonSlug={slug} />
        ) : (
          <div className='flex-1'>
            <div className='flex flex-col items-center justify-center mx-8 my-8 py-64 border border-gray-200'>
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
        )}
        <Sidebar />
      </main>
    </div>
  )
}
