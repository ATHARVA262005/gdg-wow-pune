import React from 'react'
import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard'

function Stats() {
  const stats = [
    {
      title: "Attendees",
      value: "500+",
      description: "Active participants"
    },
    {
      title: "Speakers",
      value: "20+",
      description: "Industry experts"
    },
    {
      title: "Sponsors",
      value: "15+",
      description: "Supporting partners"
    },
    {
      title: "Sessions",
      value: "25+",
      description: "Technical talks"
    }
  ]

  return (
    <div className="container flex flex-col mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Previous WooooooooooooooooW Stats 🚀</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <SpotlightCard key={index} className="h-full w-full flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-xl text-gray-400 font-medium mb-1">{stat.title}</p>
            <p className="text-sm text-gray-500 text-center">{stat.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  )
}

export default Stats