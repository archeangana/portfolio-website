import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight} from 'react-feather';


function Carousel( {
  children: slides,
  autoSlides = false,
  slideInterval = 2000
} ) {

  const [slideNumber, setSlideNumber] = useState(0);

  const prev = () => {
    setSlideNumber((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1 );
  }

  const next = () => {
    setSlideNumber((prevSlide) => prevSlide === slides.length - 1 ? 0 : prevSlide + 1 );
  }

  useEffect(() => {
    if(!autoSlides) return;
    const interval = setInterval(next, slideInterval)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='w-96 overflow-x-hidden relative'>
        <div className='flex transition-transform duration-300' style={ {transform: `translateX(-${slideNumber * 100}%)`} }>
          {slides}
        </div>
        <div className='absolute inset-0 flex justify-between items-center px-4'>
          <button onClick={prev} className='bg-slate-300 rounded-full hover:bg-slate-50'>
            <ChevronLeft size={30}/>
          </button>
          <button onClick={next} className='bg-slate-300 rounded-full hover:bg-slate-50'>
            <ChevronRight size={30}/>
          </button>
        </div>

        <div className='absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2'>
          {
            slides.map((_, index) => (
              <div
                className={`
                  w-2 h-2 bg-white rounded-full transition-all duration-300
                  ${slideNumber === index ? 'p-1.5' : 'bg-opacity-60'}`}/>
            ))
          }
        </div>
      </div>
        
      
    </>
  )
}

export default Carousel