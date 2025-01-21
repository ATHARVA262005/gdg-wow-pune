import React from 'react'
import RollingGallery from '../../blocks/Components/RollingGallery/RollingGallery'

function GallerySection() {
  return (
    <div className='my-20'>
      <div className="container flex flex-col mx-auto px-4 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-3 sm:mb-4">Previous Events</h2>
        <p className="text-base sm:text-lg text-gray-400 text-center">Glimpses of our amazing community gatherings</p>
      </div>
      <div >
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  )
}

export default GallerySection
