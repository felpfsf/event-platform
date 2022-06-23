import {HourglassLow, Play} from 'phosphor-react'

export function VideoLayer() {
  return (
    <div className='flex-1'>
      <div className="flex flex-col items-center justify-center mx-8 my-8 py-64 border border-gray-200">
        <span className='mb-8'>
          <Play size={48}/>
        </span>
        <h1 className="text-6xl">Loading Content</h1>
        <span className='my-8'>...</span>
        <span>
          <HourglassLow size={48} />
        </span>
      </div>
    </div>
  )
}
