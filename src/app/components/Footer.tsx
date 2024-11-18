import React from 'react';
import Image from 'next/image';
import logo from '/public/logo img-1.png'
import Social from '/public/Social.png'

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-[#00000099] py-12 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Column 1 */}
        <div className="sm:col-span-2 md:col-span-1">
          <Image src={logo} alt='logo img-1' />
          <p className="text-sm leading-relaxed mt-5">
            We have clothes that suit your style and<br /> which you &apos; re proud to wear. From <br />women to men.
          </p>
          <div className="mt-16">
            <Image src={Social} alt='Social.png' />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg mb-4 text-[#000000]">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg text-[#000000] mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center sm:text-start text-xs text-[#00000099]">
        <hr />
        © 2024 SHOP.CO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;