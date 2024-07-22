import React from 'react'
import Carousel from '../../../components/Carousel.jsx'
import Carousel2 from '../../../components/Carousel2.jsx'

import data from '../../../data/image.json'


function Projects() {
  return (
    <>
      <div className='w-full'>
          {
            <Carousel>
              {
                data.map((img, index) => (
                  <img className='object-fit' key={index} src={img} />
                ))
              }
            </Carousel>
          }
      </div>
      {/* <div>
      <Carousel2 />
      </div> */}
    </>
  )
}

export default Projects