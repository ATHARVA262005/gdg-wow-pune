import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import GridPattern from '../components/GridPattern';
import GradientButton from '../components/GradientButton';
import AnimatedLogo from '../components/AnimatedLogo';
import agenda from '../data/agenda';
import faqs from '../data/faqs';
import collaborators from '../data/collaborators';


function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <section className="h-screen relative overflow-hidden bg-neutral-900">
        <GridPattern />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
            <img 
              src="./assets/shaniwarwada.svg" 
              alt="Shaniwarwada Fort"
              className="w-auto h-auto opacity-20 mix-blend-screen grayscale"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <div className="h-[35vh] mb-12"> {/* Adjusted height */}
            <AnimatedLogo />
          </div>
          <div className=" space-y-12">
            <CountdownTimer targetDate="2025-02-26T12:00:00+05:30" />
            <div className="flex flex-wrap gap-6 justify-center">
              <GradientButton color="blue">
                Register Now
              </GradientButton>
              <GradientButton color="red">
                Submit Talk
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Venue</h2>
          <div className="bg-neutral-800/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Map Section */}
              <div className="h-[500px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254744!2d73.87676147501424!3d18.45940058263367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;s%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1705361236330!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Venue Details */}
              <div className="p-8 ">
                <div>
                  <h3 className="text-2xl font-bold text-[#4285F4] mb-2">Pune District Education Association's College of Engineering</h3>
                  <p className="text-white/80">Manjari Budruk Hadapsar Road, Road, Manjri, Wagholi, Maharashtra 412307</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#DB4437] my-5">How to Reach</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#DB4437]/10 text-[#DB4437]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-[#F4B400]">By Bus</h5>
                        <p className="text-white/60">PMPML bus routes: H9, 185</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4B400]/10 text-[#F4B400]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-[#0F9D58]">Landmarks</h5>
                        <p className="text-white/60">Near Serum Institute</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <GradientButton color="blue">
                    Get Directions
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="md:flex gap-8 items-center justify-center">
            <div className="md:w-1/2 space-y-4 text-center md:text-center">
              <h2 className="text-4xl font-bold text-white">About The Event</h2>
              <p className="text-gray-300">
                About GDGoC WOW A collaborative event between GDGoCs from India called
                Wonder Of Wonders, aims to unite communities, students, and developers
                under one roof. This occasion will serve as a platform for learning
                and collaborative project work with professionals in real time.
              </p>
              <div className="mt-4">
                <GradientButton color="green">
                  Learn More
                </GradientButton>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/assets/map.svg"
                alt="About GDGoC WOW"
                className="rounded-md "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What’s in Store for You</h2>
          <div className="grid md:grid-cols-4 gap-6 text-white text-center">
            <div className="p-4 bg-[#4285F4]/10 rounded relative shadow-inner">
              <h3 className="font-bold mb-2 text-[#4285F4]">Keynote Sessions</h3>
              <p className="text-sm text-[#4285F4]">Hear industry leaders share insights.</p>
              <div className="absolute inset-0 border border-[#4285F4]/50 shadow-[inset_0px_1px_8px_1px_#4285F4,0px_2px_0px_0px_#4285F4,0px_-2px_0px_0px_#4285F4,-2px_-2px_0px_0px_#4285F4,2px_-2px_0px_0px_#4285F4,0px_0px_0px_6px_#4285F4,0px_-2px_0px_7px_#4285F4,0px_4px_0px_7px_#4285F4]" />
              <div className="flex flex-col gap-1 mt-2">
                <div className="h-1 w-16 bg-[#4285F4] rounded-full" />
                <div className="h-1 w-12 bg-[#4285F4] rounded-full" />
              </div>
            </div>
            <div className="p-4 bg-[#DB4437]/10 rounded relative shadow-inner">
              <h3 className="font-bold mb-2 text-[#DB4437]">Hands-on Sessions</h3>
              <p className="text-sm text-[#DB4437]">Participate in interactive workshops.</p>
              <div className="absolute inset-0 border border-[#DB4437]/50 shadow-[inset_0px_1px_8px_1px_#DB4437,0px_2px_0px_0px_#DB4437,0px_-2px_0px_0px_#DB4437,-2px_-2px_0px_0px_#DB4437,2px_-2px_0px_0px_#DB4437,0px_0px_0px_6px_#DB4437,0px_-2px_0px_7px_#DB4437,0px_4px_0px_7px_#DB4437]" />
              <div className="flex flex-col gap-1 mt-2">
                <div className="h-1 w-16 bg-[#DB4437] rounded-full" />
                <div className="h-1 w-12 bg-[#DB4437] rounded-full" />
              </div>
            </div>
            <div className="p-4 bg-[#F4B400]/10 rounded relative shadow-inner">
              <h3 className="font-bold mb-2 text-[#F4B400]">Swags</h3>
              <p className="text-sm text-[#F4B400]">Grab exclusive event goodies.</p>
              <div className="absolute inset-0 border border-[#F4B400]/50 shadow-[inset_0px_1px_8px_1px_#F4B400,0px_2px_0px_0px_#F4B400,0px_-2px_0px_0px_#F4B400,-2px_-2px_0px_0px_#F4B400,2px_-2px_0px_0px_#F4B400,0px_0px_0px_6px_#F4B400,0px_-2px_0px_7px_#F4B400,0px_4px_0px_7px_#F4B400]" />
              <div className="flex flex-col gap-1 mt-2">
                <div className="h-1 w-16 bg-[#F4B400] rounded-full" />
                <div className="h-1 w-12 bg-[#F4B400] rounded-full" />
              </div>
            </div>
            <div className="p-4 bg-[#0F9D58]/10 rounded relative shadow-inner">
              <h3 className="font-bold mb-2 text-[#0F9D58]">Networking</h3>
              <p className="text-sm text-[#0F9D58]">Connect with like-minded peers.</p>
              <div className="absolute inset-0 border border-[#0F9D58]/50 shadow-[inset_0px_1px_8px_1px_#0F9D58,0px_2px_0px_0px_#0F9D58,0px_-2px_0px_0px_#0F9D58,-2px_-2px_0px_0px_#0F9D58,2px_-2px_0px_0px_#0F9D58,0px_0px_0px_6px_#0F9D58,0px_-2px_0px_7px_#0F9D58,0px_4px_0px_7px_#0F9D58]" />
              <div className="flex flex-col gap-1 mt-2">
                <div className="h-1 w-16 bg-[#0F9D58] rounded-full" />
                <div className="h-1 w-12 bg-[#0F9D58] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Event Agenda</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {agenda.map((item, index) => (
              <div key={index} className="w-full p-6 rounded-lg shadow-md relative overflow-hidden border-2 border-white bg-transparent group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
                <span className="text-2xl font-bold text-white uppercase mb-2.5 block relative z-10">
                  {item.title}
                </span>
                <p className="text-base leading-relaxed text-neutral-300 relative z-10">
                  {item.time}
                </p>
                <div className="absolute inset-0 border border-white/10" />
                <div className="absolute inset-0 rounded-lg border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_5px_white] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Speakers</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl bg-neutral-800/50 backdrop-blur-sm w-48"
              >
                <div className="aspect-[3/4] relative">
                  <img 
                    src="https://placehold.co/400" 
                    alt={`Speaker ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4285F4] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base font-bold text-white mb-2">Speaker Name</h3>
                    <p className="text-sm text-white/80">Google Developer Expert</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-900 px-4 relative overflow-hidden"> {/* reduced py-20 to py-12 */}
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8"> {/* reduced mb-12 to mb-8 */}
            <div className="flex gap-2">
              <span className="px-3 py-0.5 rounded-full text-sm font-bold bg-[#4285F4]/20 text-[#4285F4] border border-[#4285F4]/50">Platinum</span>
              <span className="px-3 py-0.5 rounded-full text-sm font-bold bg-[#F4B400]/20 text-[#F4B400] border border-[#F4B400]/50">Gold</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Our Sponsors</h2>
            <div className="flex gap-2">
              <span className="px-3 py-0.5 rounded-full text-sm font-bold bg-[#DB4437]/20 text-[#DB4437] border border-[#DB4437]/50">Silver</span>
              <span className="px-3 py-0.5 rounded-full text-sm font-bold bg-[#0F9D58]/20 text-[#0F9D58] border border-[#0F9D58]/50">Community</span>
            </div>
          </div>
          
          {/* All sponsor categories in one compact layout */}
          <div className="space-y-4"> {/* reduced space-y-8 to space-y-4 */}
            {/* Platinum Sponsors */}
            <div className="flex-1 grid grid-cols-3 gap-3"> {/* reduced gap-4 to gap-3 */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="aspect-[16/9] bg-neutral-800/50 rounded-lg border-2 border-[#4285F4] p-3 flex items-center justify-center group hover:bg-[#4285F4]/10 transition-colors duration-300">
                  <div className="relative w-full h-full">
                    <img 
                      src="https://placehold.co/400x200" 
                      alt="Sponsor"
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 shadow-[inset_0px_0px_15px_rgba(66,133,244,0.3)] group-hover:shadow-[inset_0px_0px_30px_rgba(66,133,244,0.5)] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Gold Sponsors */}
            <div className="flex-1 grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="aspect-video bg-neutral-800/50 rounded-lg border-2 border-[#F4B400] p-3 flex items-center justify-center group hover:bg-[#F4B400]/10 transition-colors duration-300">
                  <div className="relative w-full h-full">
                    <img 
                      src="https://placehold.co/300x150" 
                      alt="Sponsor"
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 shadow-[inset_0px_0px_15px_rgba(244,180,0,0.3)] group-hover:shadow-[inset_0px_0px_30px_rgba(244,180,0,0.5)] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Silver Sponsors */}
            <div className="flex-1 grid grid-cols-5 gap-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="aspect-video bg-neutral-800/50 rounded-lg border-2 border-[#DB4437] p-2 flex items-center justify-center group hover:bg-[#DB4437]/10 transition-colors duration-300">
                  <div className="relative w-full h-full">
                    <img 
                      src="https://placehold.co/200x100" 
                      alt="Sponsor"
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 shadow-[inset_0px_0px_15px_rgba(219,68,55,0.3)] group-hover:shadow-[inset_0px_0px_30px_rgba(219,68,55,0.5)] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Community Partners */}
            <div className="flex-1 grid grid-cols-6 gap-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-video bg-neutral-800/50 rounded-lg border-2 border-[#0F9D58] p-2 flex items-center justify-center group hover:bg-[#0F9D58]/10 transition-colors duration-300">
                  <div className="relative w-full h-full">
                    <img 
                      src="https://placehold.co/150x75" 
                      alt="Sponsor"
                      className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 shadow-[inset_0px_0px_15px_rgba(15,157,88,0.3)] group-hover:shadow-[inset_0px_0px_30px_rgba(15,157,88,0.5)] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-neutral-800/50 rounded-lg overflow-hidden border border-white/10 backdrop-blur-sm"
              >
                <summary 
                  className="flex items-center justify-between p-4 cursor-pointer text-white hover:text-[#4285F4] transition-colors duration-300"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <svg 
                    className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 pt-0 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900/80 px-4 relative overflow-hidden">
        <GridPattern />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Participating GDGoCs</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              {collaborators.slice(0, 9).map((name, index) => (
                <div 
                  key={index}
                  className="group relative bg-neutral-800/50 rounded-lg border border-white/10 p-4 
                           hover:border-[#4285F4]/50 transition-all duration-300
                           backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/0 to-[#0F9D58]/0 
                                group-hover:from-[#4285F4]/10 group-hover:to-[#0F9D58]/10 
                                transition-colors duration-500"/>
                  <p className="relative text-base font-medium text-white/60 group-hover:text-white/90 
                             transition-colors duration-300 text-center">
                    GDGoC {name}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              {collaborators.slice(9, 17).map((name, index) => (
                <div 
                  key={index + 9}
                  className="group relative bg-neutral-800/50 rounded-lg border border-white/10 p-4 
                           hover:border-[#4285F4]/50 transition-all duration-300
                           backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/0 to-[#0F9D58]/0 
                                group-hover:from-[#4285F4]/10 group-hover:to-[#0F9D58]/10 
                                transition-colors duration-500"/>
                  <p className="relative text-base font-medium text-white/60 group-hover:text-white/90 
                             transition-colors duration-300 text-center">
                    GDGoC {name}
                  </p>
                </div>
              ))}
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              {collaborators.slice(17).map((name, index) => (
                <div 
                  key={index + 17}
                  className="group relative bg-neutral-800/50 rounded-lg border border-white/10 p-4 
                           hover:border-[#4285F4]/50 transition-all duration-300
                           backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/0 to-[#0F9D58]/0 
                                group-hover:from-[#4285F4]/10 group-hover:to-[#0F9D58]/10 
                                transition-colors duration-500"/>
                  <p className="relative text-base font-medium text-white/60 group-hover:text-white/90 
                             transition-colors duration-300 text-center">
                    GDGoC {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-neutral-900/80 text-center text-white">
      <GridPattern />
        <p>
          Made by <a href="https://www.linkedin.com/in/atharvaralegankar/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Atharva Raleganakr</a> &copy; 2025
        </p>
      </footer>
    </div>
  );
}

export default Home;