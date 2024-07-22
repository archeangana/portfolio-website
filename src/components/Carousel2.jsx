import React, { useState } from 'react'
import { ChevronLeft, ChevronRight} from 'react-feather';


// Static Data
const images = [
      "https://images.unsplash.com/photo-1685808155214-d968eb3a8493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8NDAweDQwMCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1679758629450-30d2263efca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fDQwMHg0MDAlMjBpbWd8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1560011316-90b2677df5d9?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
]

function Carousel2(
      { autoSlide = false,
        slideInterval = 3000
      }
) {
      const [curr, setcurr] = useState(0)
      const prev = () => {
            setcurr(prev => prev === 0 ? images.length - 1 : prev - 1);
      };
      const next = () => {
            setcurr(prev => prev === images.length - 1 ? 0 : prev + 1);
      }
  return (
    <>
    <section className="container w-full">
      <div className='relative overflow-x-hidden w-96'>
            <div className='flex' style={{transform: `translateX(-${curr * 100}%)`}}>
                  {
                        images.map((image, index) => (
                              <img className="w-92" key={index} src={image} alt="" />
                        ))
                  }
            </div>
            <div className="absolute inset-0 flex justify-between items-center">
                  <button onClick={prev}>
                        <ChevronLeft size={30}/>
                  </button>
                  <button onClick={next}>
                        <ChevronRight size={30}/>
                  </button>
            </div>

            <div className='absolute bottom-12 right-0 left-0 flex justify-center items-center gap-2'>
                  {
                        images.map((_,i) => (
                              <div 
                                    key={i}
                                    className={
                                          `w-2 h-2 bg-white rounded-full 
                                          ${curr === i ? "p-2" : 'bg-opacity-60'}`
                                    }/>
                        ))
                  }
            </div>

      </div>
    </section>
      
    </>
  )
}

export default Carousel2