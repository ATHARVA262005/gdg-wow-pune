import React from 'react'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'

function SponsorsWall() {
  const sponsors = [
    { name: "Google", logo: "https://placehold.co/400" },
    { name: "GDG Cloud", logo: "https://placehold.co/400" },
    { name: "GitHub", logo: "https://placehold.co/400" },
    { name: "Firebase", logo: "https://placehold.co/400" },
    { name: "Android", logo: "https://placehold.co/400" },
    { name: "Chrome", logo: "https://placehold.co/400" },
    { name: "Flutter", logo: "https://placehold.co/400" },
    { name: "Google Cloud", logo: "https://placehold.co/400" },
    { name: "TensorFlow", logo: "https://placehold.co/400" },
    { name: "Angular", logo: "https://placehold.co/400" },
    { name: "Firebase", logo: "https://placehold.co/400" },
    { name: "Google Maps", logo: "https://placehold.co/400" },
    { name: "Firebase", logo: "https://placehold.co/400" },
    { name: "Android", logo: "https://placehold.co/400" },
    { name: "Chrome", logo: "https://placehold.co/400" },
    { name: "Flutter", logo: "https://placehold.co/400" },
    { name: "Google Cloud", logo: "https://placehold.co/400" },
    { name: "TensorFlow", logo: "https://placehold.co/400" },
    
  ]

  return (
    <div className="py-16 flex flex-col">
      <ShinyText text="Our Sponsors" disabled={false} speed={3} className='custom-class' />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all aspect-square flex items-center justify-center"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="w-[150px] h-[150px] object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SponsorsWall
