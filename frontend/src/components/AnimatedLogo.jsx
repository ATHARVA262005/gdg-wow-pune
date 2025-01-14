import React, { useRef, useEffect, useState } from 'react';

function AnimatedLogo() {
  const containerRef = useRef(null);
  

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4 h-full">
      <span className="font-game text-white/80 text-center text-xs md:text-lg lg:2xl uppercase tracking-widest leading-relaxed">
        Google Developer Groups on Campus
      </span>
      
      <div className="flex items-center justify-center flex-1">
        <img 
          src="/assets/W.svg" 
          alt="W"
          className="h-24 md:h-full lg:h-full transition-all duration-300 "
        />
        <div className="relative mx-1">
          <img 
            src="/assets/circle.svg" 
            alt="O"
            className="h-20 md:h-40 lg:h-40 animate-spin-slow transition-all duration-300"
          />
        </div>
        <img 
          src="/assets/W.svg" 
          alt="W"
          className="h-24 md:h-full lg:h-full transition-all duration-300"
        />
      </div>

      <span className="font-game text-yellow-300 text-center mt-2 text-3xl md:text-5xl lg:5xl tracking-[0.2em] glitch">
        PUNE 2k25
      </span>
    </div>
  );
}

export default AnimatedLogo;
