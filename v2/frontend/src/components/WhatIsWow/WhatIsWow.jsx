import React from 'react'

function WhatIsWow() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3x text-white font-bold mb-4">About The Event</h2>
          <p className="text-gray-600">
            About GDGoC WOW A collaborative event between GDGoCs from India called Wonder Of Wonders, 
            aims to unite communities, students, and developers under one roof. 
            This occasion will serve as a platform for learning and collaborative 
            project work with professionals in real time.
          </p>
        </div>
        <div className="flex-1">
          <img src="https://gdgwowpune.vercel.app/assets/map.svg" alt="WOW Map" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default WhatIsWow