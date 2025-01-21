import React from 'react'
import Hyperspeed from '../../blocks/Backgrounds/Hyperspeed/Hyperspeed'
import GradientText from '../../blocks/TextAnimations/GradientText/GradientText'
import TrueFocus from '../../blocks/TextAnimations/TrueFocus/TrueFocus'

function Hero() {
  return (
    <section className="relative bg-neutral-950 h-[90vh] flex items-center justify-center overflow-hidden font-display">
      <Hyperspeed />
      <div className="relative z-20 text-center text-white">
        <div className="mb-8">
          <GradientText 
            colors={["#4285f4", "#34a853", "#fbbc05", "#ea4335"]}
            className="text-4xl mb-1 font-sans"
            animationSpeed={6}
            showBorder={false}
          >
            Google Developers Groups On Campus Pune
          </GradientText>
          <TrueFocus
            sentence="WOW PUNE 2K25"
            blurAmount={8}
            borderColor="#4285f4"
            glowColor="rgba(66, 133, 244, 0.6)"
            animationDuration={0.8}
            pauseBetweenAnimations={1.5}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
