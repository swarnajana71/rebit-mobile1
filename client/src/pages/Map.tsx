import React from 'react';
import { Link } from 'wouter';
import { FooterSection } from './sections/FooterSection';

export const Map = (): JSX.Element => {
  const statusBarItems = [
    {
      type: "text",
      content: "9:41",
      className:
        "w-fit [font-family:'SF_Pro-Semibold',Helvetica] font-semibold text-black text-[17px] text-center tracking-[-0.4px] leading-[22px] whitespace-nowrap",
    },
    {
      type: "cellular",
      className: "w-[17px] h-[11px]",
    },
    {
      type: "wifi",
      className: "w-[15px] h-[11px]",
    },
    {
      type: "battery",
      className: "w-[24px] h-[11px]",
    },
  ];

  return (
    <div className="bg-[#e6f8f6] w-full min-h-screen">
      <div className="bg-[#e6f8f6] w-full relative">
        {/* Status Bar */}
        <header className="flex flex-col w-full items-start pt-4 pb-0 px-0 sticky top-0 left-0 bg-white z-10">
          <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-[120px] items-center justify-center pl-6 pr-4 py-0 relative">
              <div className={statusBarItems[0].className}>
                {statusBarItems[0].content}
              </div>
            </div>

            <div className="flex w-[120px] items-center justify-end gap-1 pl-4 pr-6 py-0 relative">
              {/* Cellular Signal */}
              <div className={statusBarItems[1].className}>
                <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                  <rect x="0" y="8" width="2" height="3" rx="1" fill="black"/>
                  <rect x="3" y="6" width="2" height="5" rx="1" fill="black"/>
                  <rect x="6" y="4" width="2" height="7" rx="1" fill="black"/>
                  <rect x="9" y="2" width="2" height="9" rx="1" fill="black"/>
                </svg>
              </div>

              {/* WiFi Signal */}
              <div className={statusBarItems[2].className}>
                <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                  <path d="M7.5 2C10.54 2 13.02 3.02 13.02 3.02L12.25 4.14C12.25 4.14 10.29 3.29 7.5 3.29C4.71 3.29 2.75 4.14 2.75 4.14L1.98 3.02C1.98 3.02 4.46 2 7.5 2Z" fill="black"/>
                  <path d="M7.5 5C9.36 5 10.95 5.75 10.95 5.75L10.18 6.86C10.18 6.86 8.95 6.29 7.5 6.29C6.05 6.29 4.82 6.86 4.82 6.86L4.05 5.75C4.05 5.75 5.64 5 7.5 5Z" fill="black"/>
                  <path d="M7.5 8C8.18 8 8.77 8.25 8.77 8.25L8 9.36C8 9.36 7.68 9.29 7.5 9.29C7.32 9.29 7 9.36 7 9.36L6.23 8.25C6.23 8.25 6.82 8 7.5 8Z" fill="black"/>
                </svg>
              </div>

              {/* Battery */}
              <div className={statusBarItems[3].className}>
                <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                  <rect x="0" y="2" width="20" height="7" rx="2" stroke="black" strokeWidth="1" fill="none"/>
                  <rect x="1.5" y="3.5" width="17" height="4" rx="0.5" fill="black"/>
                  <rect x="21" y="4.5" width="2" height="2" rx="1" fill="black"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Header with Logo */}
          <div className="bg-white w-full flex justify-center items-center h-[44px] px-4 relative">
            {/* Centered Logo */}
            <div className="w-[42px] h-7 bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />
          </div>
        </header>

        {/* Search Section */}
        <div className="flex items-center gap-4 w-full px-4 py-4">
          <div className="flex items-center gap-2 flex-1 h-12 px-4 border border-[#808080] rounded-lg bg-white">
            <div className="flex items-center justify-center w-6 h-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#b3b3b3"/>
              </svg>
            </div>
            <span className="flex-1 text-[14px] font-['Noto_Sans_JP'] font-medium text-[#b3b3b3] leading-[160%]">
              店名, エリア名から検索
            </span>
          </div>
          <button className="flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"/>
              <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="url(#paint0_linear_40000004_3796)"/>
              <g clipPath="url(#clip0_40000004_3796)">
                <path d="M15 31C14.7167 31 14.4792 30.9042 14.2875 30.7125C14.0958 30.5208 14 30.2833 14 30C14 29.7167 14.0958 29.4792 14.2875 29.2875C14.4792 29.0958 14.7167 29 15 29H23C23.2833 29 23.5208 29.0958 23.7125 29.2875C23.9042 29.4792 24 29.7167 24 30C24 30.2833 23.9042 30.5208 23.7125 30.7125C23.5208 30.9042 23.2833 31 23 31H15ZM15 26C14.7167 26 14.4792 25.9042 14.2875 25.7125C14.0958 25.5208 14 25.2833 14 25C14 24.7167 14.0958 24.4792 14.2875 24.2875C14.4792 24.0958 14.7167 24 15 24H18C18.2833 24 18.5208 24.0958 18.7125 24.2875C18.9042 24.4792 19 24.7167 19 25C19 25.2833 18.9042 25.5208 18.7125 25.7125C18.5208 25.9042 18.2833 26 18 26H15ZM15 21C14.7167 21 14.4792 20.9042 14.2875 20.7125C14.0958 20.5208 14 20.2833 14 20C14 19.7167 14.0958 19.4792 14.2875 19.2875C14.4792 19.0958 14.7167 19 15 19H21C21.2833 19 21.5208 19.0958 21.7125 19.2875C21.9042 19.4792 22 19.7167 22 20C22 20.2833 21.9042 20.5208 21.7125 20.7125C21.5208 20.9042 21.2833 21 21 21H15ZM25 26V20C25 19.7167 25.0958 19.4792 25.2875 19.2875C25.4792 19.0958 25.7167 19 26 19C26.2833 19 26.5208 19.0958 26.7125 19.2875C26.9042 19.4792 27 19.7167 27 20V21.35L29.65 18.7C29.8333 18.5167 30.0667 18.425 30.35 18.425C30.6333 18.425 30.8667 18.5167 31.05 18.7C31.2333 18.8833 31.325 19.1167 31.325 19.4C31.325 19.6833 31.2333 19.9167 31.05 20.1L28.4 22.75H29.95C30.2333 22.75 30.4708 22.8458 30.6625 23.0375C30.8542 23.2292 30.95 23.4667 30.95 23.75C30.95 24.0333 30.8542 24.2708 30.6625 24.4625C30.4708 24.6542 30.2333 24.75 29.95 24.75H28.4L31.05 27.4C31.2333 27.5833 31.325 27.8167 31.325 28.1C31.325 28.3833 31.2333 28.6167 31.05 28.8C30.8667 28.9833 30.6333 29.075 30.35 29.075C30.0667 29.075 29.8333 28.9833 29.65 28.8L27 26.15V29C27 29.2833 26.9042 29.5208 26.7125 29.7125C26.5208 29.9042 26.2833 30 26 30C25.7167 30 25.4792 29.9042 25.2875 29.7125C25.0958 29.5208 25 29.2833 25 29V26Z" fill="#2B988D"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_40000004_3796" x1="-4.76067e-09" y1="24.192" x2="47.9995" y2="24.3543" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2B988D"/>
                  <stop offset="1" stopColor="#A4E0D9"/>
                </linearGradient>
                <clipPath id="clip0_40000004_3796">
                  <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start pb-32 min-h-[calc(100vh-200px)]">
          {/* Map Container */}
          <div className="w-full h-[764px] bg-[#d3d3d3] relative overflow-hidden">
            {/* Map Background with Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#999" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mapGrid)"/>
              </svg>
            </div>

            {/* Location Pins */}
            <div className="absolute top-20 left-16">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#00C896"/>
                <circle cx="28" cy="28" r="20" fill="white"/>
                <circle cx="28" cy="28" r="12" fill="#00C896"/>
                <path d="M28 32C30.2091 32 32 30.2091 32 28C32 25.7909 30.2091 24 28 24C25.7909 24 24 25.7909 24 28C24 30.2091 25.7909 32 28 32Z" fill="white"/>
              </svg>
            </div>

            <div className="absolute top-40 right-20">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#00C896"/>
                <circle cx="28" cy="28" r="20" fill="white"/>
                <circle cx="28" cy="28" r="12" fill="#00C896"/>
                <path d="M28 32C30.2091 32 32 30.2091 32 28C32 25.7909 30.2091 24 28 24C25.7909 24 24 25.7909 24 28C24 30.2091 25.7909 32 28 32Z" fill="white"/>
              </svg>
            </div>

            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#00C896"/>
                <circle cx="28" cy="28" r="20" fill="white"/>
                <circle cx="28" cy="28" r="12" fill="#00C896"/>
                <path d="M28 32C30.2091 32 32 30.2091 32 28C32 25.7909 30.2091 24 28 24C25.7909 24 24 25.7909 24 28C24 30.2091 25.7909 32 28 32Z" fill="white"/>
              </svg>
            </div>

            {/* Map overlay with subtle roads/paths */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" className="w-full h-full">
                <path d="M0 200 Q200 180 400 200 T800 200" stroke="#999" strokeWidth="3" fill="none" opacity="0.3"/>
                <path d="M100 0 Q120 200 100 400 T100 800" stroke="#999" strokeWidth="3" fill="none" opacity="0.3"/>
                <path d="M200 100 Q400 120 600 100 T1000 100" stroke="#999" strokeWidth="2" fill="none" opacity="0.2"/>
                <path d="M300 0 Q320 300 300 600 T300 1000" stroke="#999" strokeWidth="2" fill="none" opacity="0.2"/>
              </svg>
            </div>

            {/* Location Labels */}
            <div className="absolute top-28 left-20 bg-white px-2 py-1 rounded shadow-sm">
              <span className="font-['Noto_Sans_JP'] text-[10px] text-[#162a39] font-medium">渋谷駅前</span>
            </div>
            
            <div className="absolute top-48 right-24 bg-white px-2 py-1 rounded shadow-sm">
              <span className="font-['Noto_Sans_JP'] text-[10px] text-[#162a39] font-medium">新宿南口</span>
            </div>
            
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm">
              <span className="font-['Noto_Sans_JP'] text-[10px] text-[#162a39] font-medium">品川駅</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};