import React from 'react'
import TiltedScroll from '../../blocks/Components/TiltedScroll/TiltedScroll'

function Themes() {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column - Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold mb-6">Themes</h2>
          <p className="text-gray-300 mb-4">
            Explore diverse technology tracks at GDGoC WOW, featuring cutting-edge topics and hands-on learning experiences.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">Modern frameworks, responsive design, and progressive web apps.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
              <p className="text-gray-400">Scalable solutions, serverless architecture, and cloud services.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-400">AI applications, neural networks, and data science.</p>
            </div>
          </div>
        </div>

        {/* Right Column - TiltedScroll */}
        <div className="flex-1">
          <TiltedScroll />
        </div>
      </div>
    </div>
  )
}

export default Themes
