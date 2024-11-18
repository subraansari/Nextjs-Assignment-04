import React from 'react';
import Image from 'next/image';
import image1 from '/public/group 1.png';
import image2 from '/public/group 2.png';
import image3 from '/public/group 3.png';
import image4 from '/public/group 4.png';
import image5 from '/public/group 5 .png';

const Header = () => {
  return (
    <div className="bg-[#000000] px-4 py-4 flex flex-wrap gap-4 text-white items-center justify-center md:justify-around">
      {/* Images */}
      <Image src={image2} alt="group2" width={166} height={33} className="sm:w-[120px] sm:h-[24px]" />
      <Image src={image5} alt="group5" width={91} height={37} className="sm:w-[80px] sm:h-[30px]" />
      <Image src={image3} alt="group3" width={156} height={36} className="sm:w-[110px] sm:h-[26px]" />
      <Image src={image4} alt="group4" width={194} height={32} className="sm:w-[140px] sm:h-[24px]" />
      <Image src={image1} alt="group1" width={206} height={33} className="sm:w-[150px] sm:h-[25px] sm:mr-0" />
    </div>
  );
};

export default Header;