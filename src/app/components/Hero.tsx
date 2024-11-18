import React from 'react'
import Image from 'next/image'
import image from '/public/girl-boy-img.png'

const Hero = () => {
  return (
    <div className="mt-16 py-10 px-6 md:px-28 bg-[#F2F0F1] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left side: Text content */}
      <div className="w-full md:w-[600px] text-center md:text-left">
        <h2 className="text-[#000000] text-[32px] md:text-[48px] font-bold leading-[1] tracking-[-0.02em]">
          FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE
        </h2>
        <p className="mt-3 text-sm md:text-base">
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </p>
        <div className="mt-4">
          <button className="bg-[#000000] text-white rounded-full p-2 md:p-4 py-2 px-8 md:px-10">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-7 items-center md:items-start">
          <div>
            <p className="text-xl md:text-2xl font-bold text-[#000000]">200+</p>
            <p className="text-[#00000099] text-sm md:text-base">International Brands</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-[#000000]">2,000+</p>
            <p className="text-[#00000099] text-sm md:text-base">High-Quality Products</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-bold text-[#000000]">30,000+</p>
            <p className="text-[#00000099] text-sm md:text-base">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-[50%] mb-8 md:mb-0">
        <Image src={image} alt="boy-girl" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Hero