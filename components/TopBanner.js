"use client";

import React, { useState, useEffect } from 'react';
import ButtonLead from "./ButtonLead";
import { IoClose } from 'react-icons/io5';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkBannerVisibility = () => {
      const lastClosedTime = localStorage.getItem('topBannerClosedTime');
      const currentTime = new Date().getTime();
      if (!lastClosedTime || currentTime - parseInt(lastClosedTime) > 24 * 60 * 60 * 1000) {
        setIsVisible(true);
      }
    };

    checkBannerVisibility();
    // Check visibility every minute in case 24 hours have passed while the page is open
    const intervalId = setInterval(checkBannerVisibility, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('topBannerClosedTime', new Date().getTime().toString());
  };

  if (!isVisible) return null;

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-base-content py-2 px-4 relative">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm sm:text-base font-medium text-white">
            Get 1 unique baby travel deal per week:
          </p>
          <div className="flex w-full sm:w-auto gap-2 pr-8">
            <ButtonLead variant="row" />
          </div>
        </div>
        <button 
          onClick={handleClose} 
          className="absolute top-5 right-3 text-white hover:text-gray-200"
          aria-label="Close banner"
        >
          <IoClose size={20} />
        </button>
      </div>
    </header>
  );
}