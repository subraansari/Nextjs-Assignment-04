import React from 'react'
import Image from 'next/image'
import image1 from '/public/start-img1.png'
import image2 from '/public/start-img 2.png'
import image3 from '/public/start-img 3.png'

const Starts = () => {
  return (
    <div className='mt-20 ml-64 px-4'>
      <h1 className='text-5xl font-bold items-start text-center md:text-left'>
        OUR HAPPY CUSTOMERS
      </h1>
      <div className='mt-8 flex flex-wrap justify-center md:justify-start gap-5'>
        <div className='w-full sm:w-1/3 md:w-1/4 lg:w-1/4'>
          <Image src={image1} alt='img1' className='w-full' />
        </div>
        <div className='w-full sm:w-1/3 md:w-1/4 lg:w-1/4'>
          <Image src={image2} alt='img2' className='w-full' />
        </div>
        <div className='w-full sm:w-1/3 md:w-1/4 lg:w-1/4'>
          <Image src={image3} alt='img3' className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Starts