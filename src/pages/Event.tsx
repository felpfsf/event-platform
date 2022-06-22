import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoLayer } from '../components/VideoLayer'

export function Event() {
  return (
    // min-h-screen = min-height: 100vh
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <VideoLayer />
        <Sidebar />
      </main>
    </div>
  )
}
