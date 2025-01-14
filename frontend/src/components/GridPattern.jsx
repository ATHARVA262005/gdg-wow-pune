import React, { useState } from 'react';

function GridPattern() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-0.5 opacity-20">
          {Array.from({ length: 192 }).map((_, index) => {
            const row = Math.floor(index / 16);
            const col = index % 16;
            const distance = Math.sqrt(
              Math.pow((mousePosition.x / 40) - col, 2) + 
              Math.pow((mousePosition.y / 40) - row, 2)
            );
            
            return (
              <div
                key={index}
                className="aspect-square relative"
                style={{
                  transition: `all ${0.2 + distance * 0.05}s ease-out`,
                }}
              >
                <div className="absolute inset-0 bg-[#4285F4]/20 hover:bg-[#4285F4]/40 transition-colors duration-300"/>
                <div className="absolute inset-0 border border-[#4285F4]/10" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GridPattern;
