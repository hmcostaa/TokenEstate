import React from 'react'
import Carousel from '~~/components/Carousel'
import RequestForm from '~~/components/RequestForm'


const PropertyPage = () => {

  return (
    <div className='flex items-center flex-col flex-grow pt-10 bg-white'>
        <div className='w-2/4'>
          <Carousel 
              property="Lisbon"
          />
        </div>
        <div className='flex flex-row justify-between my-6 gap-6 w-2/4'>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-300 w-1/4">
            <h2 className="text-gray-400 text-sm font-bold">Name</h2>
            <p className="text-black font-bold text-lg mt-2">Historic Gem</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-300 w-1/4">
            <h2 className="text-gray-400 text-sm font-bold">Value</h2>
            <p className="text-black font-bold text-lg mt-2">$10,000</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-300 w-1/4">
            <h2 className="text-gray-400 text-sm font-bold">Construction finish in</h2>
            <p className="text-black font-bold text-lg mt-2">44 days</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-300 flex-grow">
            <h2 className="text-gray-400 text-sm font-bold">ROI</h2>
            <p className="text-black font-bold text-lg mt-2">8%</p>
          </div>
        </div>
        <div className='w-2/4'>
          <progress className="progress progress-primary w-full h-4" value={40} max="100"></progress>
        </div>
        <div className='w-2/4'>
          <RequestForm />
        </div>
    </div>
  )
}

export default PropertyPage