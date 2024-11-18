import React from 'react';
import Image from 'next/image';
import image2 from '/public/img-2.png';
import image4 from '/public/img-4.png';
import image6 from '/public/img-6.png';
import image8 from '/public/img-8.png';
import image from '/public/view all.png';
// card images
import Image1 from '/public/image-1.png';
import Image2 from '/public/image-2.png';
import Image3 from '/public/image-3.png';
import Image4 from '/public/image-4.png';
import cardimg1 from '/public/card-img1.png';
import cardimg2 from '/public/card-img2.png';

const Card1 = () => {
  return (
    <div className="font-extrabold text-3xl md:text-5xl flex flex-col items-center mt-12 md:mt-24 px-4">
      {/* Heading */}
      <h1 className="mb-6 md:mb-10 text-center">NEW ARRIVALS</h1>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-2">
          <Image src={image2} alt="img-2" />
          <p className="text-[#000000] text-base md:text-xl text-center">T-SHIRT WITH TAPE DETAILS</p>
          <Image src={Image1} alt="image-1" />
          <h5 className="text-[#000000] text-lg md:text-2xl font-bold tracking-[-0.1em] leading-tight">$120</h5>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-2">
          <Image src={image4} alt="img-4" />
          <p className="text-[#000000] text-base md:text-xl text-center">SKINNY FIT JEANS</p>
          <Image src={Image2} alt="image-2" />
          <Image src={cardimg1} alt="card-img1" />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-2">
          <Image src={image6} alt="img-6" />
          <p className="text-[#000000] text-base md:text-xl text-center">CHECKERED SHIRT</p>
          <Image src={Image3} alt="image-3" />
          <h5 className="text-[#000000] text-lg md:text-2xl font-bold leading-[1] tracking-[-0.1em]">$180</h5>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-2">
          <Image src={image8} alt="img-8" />
          <p className="text-[#000000] text-base md:text-xl text-center">Add your text here</p>
          <Image src={Image4} alt="image-4" />
          <Image src={cardimg2} alt="card-img2" />
        </div>
      </div>

      {/* View All Section */}
      <div className="mt-8 md:mt-16 flex items-center justify-center">
        <Image src={image} alt="view all" />
      </div>
    </div>
  );
};

export default Card1;