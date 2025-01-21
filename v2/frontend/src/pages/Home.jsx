import React from 'react'
import Hero from '../components/Hero/Hero'
import GallerySection from '../components/GallerySection/GallerySection'
import Stats from '../components/Stats/Stats'
import WhatIsWow from '../components/WhatIsWow/WhatIsWow'
import Themes from '../components/Themes/Themes'
import SponsorsWall from '../components/SponsorsWall/SponsorsWall'
import PopupNotification from '../components/PopupNotification/PopupNotification'

function Home() {
  return (
    <div className=" mx-20 min-h-screen">
      <Hero />
      <Stats />
      <WhatIsWow />
      <Themes />
      <GallerySection />
      <SponsorsWall />
      <PopupNotification />
    </div>
  )
}

export default Home
