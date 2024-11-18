import React from 'react';
import { Mail } from 'lucide-react';

const Border = () => {
  return (
    <div className="bg-[#000000] w-300  h-[300px] mt-16 rounded-xl mx-auto p-8 flex items-center flex-col md:flex-row">
      {/* Heading */}
      <div className="flex-1">
        <h1 className="text-3xl sm:text-2xl md:text-5xl ml-0 md:ml-20 font-bold text-white leading-snug text-center md:text-left">
          STAY UP TO DATE ABOUT<br /> OUR LATEST OFFERS
        </h1>
      </div>

      {/* Form */}
      <form className="flex-1 flex flex-col items-center md:items-end space-y-4 mt-4 md:mt-0">
        <div className="relative w-full max-w-[400px]">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full p-4 pl-12 rounded-full bg-[#FFFFFF] text-black"
          />
        </div>
        <input
          type="submit"
          value="Subscribe to Newsletter"
          className="w-full max-w-[400px] p-4 rounded-full bg-[#FFFFFF] text-black cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Border;