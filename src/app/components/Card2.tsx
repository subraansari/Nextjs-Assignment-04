import React from 'react';
import Image from 'next/image';
import image1 from '/public/img-1.png';
import image3 from '/public/img-3.png';
import image5 from '/public/img-5.png';
import image7 from '/public/img-7.png';
import image from '/public/view all.png';
// card images
import img1 from '/public/1.png';
import img2 from '/public/2.png';
import img3 from '/public/3.png';
import img4 from '/public/4.png';
import cardimg2 from '/public/card-img2.png';

const Card2 = () => {
  return (
    <div className='font-extrabold text-3xl sm:text-5xl flex flex-col items-center mt-12 sm:mt-24'>
      {/* Heading */}
      <h1 className='mb-6 sm:mb-10'>TOP SELLING</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-2 w-[150px] sm:w-auto">
          <Image src={image1} alt="img-1" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">VERTICAL STRIPED SHIRT</p>
          <Image src={img1} alt='img1' />
          <Image src={cardimg2} alt='card-img2' />
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-2 w-[150px] sm:w-auto">
          <Image src={image3} alt='image-3' />
          <p className="text-[#000000] text-sm sm:text-xl text-center">COURAGE GRAPHIC T-SHIRT</p>
          <Image src={img2} alt='img2' />
          <h5 className='text-[#000000] text-lg sm:text-2xl font-bold'>$145</h5>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-2 w-[150px] sm:w-auto">
          <Image src={image5} alt="img-5" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">LOOSE FIT BERMUDA SHORTS</p>
          <Image src={img3} alt='img3' />
          <h5 className='text-[#000000] text-lg sm:text-2xl font-bold'>$80</h5>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-2 w-[150px] sm:w-auto">
          <Image src={image7} alt="img-7" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">FADED SKINNY JEANS</p>
          <Image src={img4} alt='img4' />
          <h5 className='text-[#000000] text-lg sm:text-2xl font-bold'>$210</h5>
        </div>
      </div>

      {/* View All Button */}
      <div className='mt-12 sm:mt-16 flex justify-center'>
        <Image src={image} alt='view all' />
      </div>
    </div>
  );
};

export default Card2;