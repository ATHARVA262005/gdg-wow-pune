import React from 'react';
import Countdown from 'react-countdown';

function CountdownTimer({ targetDate }) {
  return (
    <Countdown 
    date={new Date(targetDate)}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="max-w-2xl mx-auto my-5">
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center">
              <div className="
                relative 
                w-16 md:w-24 
                h-16 md:h-24 
                bg-neutral-800/50 
                rounded-lg
                border-2 border-[#4285F4] text-[#4285F4]
                backdrop-blur-md
                shadow-lg
                overflow-hidden
                group
              ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-game text-xl md:text-3xl">
                    {days}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="mt-1 text-[8px] md:text-xs font-game text-neutral-400 uppercase tracking-wider">
                Days
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="
                relative 
                w-16 md:w-24 
                h-16 md:h-24 
                bg-neutral-800/50 
                rounded-lg
                border-2 border-[#DB4437] text-[#DB4437]
                backdrop-blur-md
                shadow-lg
                overflow-hidden
                group
              ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-game text-xl md:text-3xl">
                    {hours}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="mt-1 text-[8px] md:text-xs font-game text-neutral-400 uppercase tracking-wider">
                Hours
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="
                relative 
                w-16 md:w-24 
                h-16 md:h-24 
                bg-neutral-800/50 
                rounded-lg
                border-2 border-[#F4B400] text-[#F4B400]
                backdrop-blur-md
                shadow-lg
                overflow-hidden
                group
              ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-game text-xl md:text-3xl">
                    {minutes}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="mt-1 text-[8px] md:text-xs font-game text-neutral-400 uppercase tracking-wider">
                Minutes
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="
                relative 
                w-16 md:w-24 
                h-16 md:h-24 
                bg-neutral-800/50 
                rounded-lg
                border-2 border-[#0F9D58] text-[#0F9D58]
                backdrop-blur-md
                shadow-lg
                overflow-hidden
                group
              ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-game text-xl md:text-3xl">
                    {seconds}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="mt-1 text-[8px] md:text-xs font-game text-neutral-400 uppercase tracking-wider">
                Seconds
              </span>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default CountdownTimer;
