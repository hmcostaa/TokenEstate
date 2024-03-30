import React from 'react'
import Carousel from '~~/components/Carousel'


const PropertyPage = () => {
  return (
    <div className='flex items-center flex-col flex-grow pt-10 bg-white'>
        <div className='w-2/4'>
            <Carousel 
                property="Lisbon"
            />
        </div>
    </div>
  )
}

export default PropertyPage