import React from 'react';
import { Link } from 'wouter';
import { FooterSection } from './sections/FooterSection';

export const QRCode = (): JSX.Element => {
  const statusBarItems = [
    {
      type: "text",
      content: "9:41",
      className:
        "w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap",
    },
    {
      type: "image",
      src: "/figmaAssets/cellular-connection.svg",
      alt: "Cellular connection",
      className: "w-[19.2px] h-[12.23px]",
    },
    {
      type: "image",
      src: "/figmaAssets/wifi.svg",
      alt: "Wifi",
      className: "w-[17.14px] h-[12.33px]",
    },
    {
      type: "battery",
      className: "w-[27.33px] h-[13px]",
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

            <div className="flex w-[120px] items-center justify-center gap-2 pl-4 pr-6 py-0 relative">
              {statusBarItems.slice(1, 3).map((item, index) => (
                <img
                  key={`status-icon-${index}`}
                  className={item.className}
                  alt={item.alt}
                  src={item.src}
                />
              ))}

              <div className={statusBarItems[3].className}>
                <div className="absolute w-[25px] h-[13px] top-0 left-0 rounded-[4.3px] border border-solid border-[#00000059]">
                  <div className="relative w-[21px] h-[9px] top-px left-px bg-black rounded-[2.5px]" />
                </div>

                <img
                  className="absolute w-px h-1 top-[5px] left-[26px]"
                  alt="Cap"
                  src="/figmaAssets/cap.svg"
                />
              </div>
            </div>
          </div>

          {/* Header with Logo and Back Button */}
          <div className="bg-white w-full flex justify-center items-center h-[44px] px-4 relative">
            {/* Back Button */}
            <Link href="/" className="absolute left-4 p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#162a39"/>
              </svg>
            </Link>
            
            {/* Centered Logo */}
            <div className="flex items-center justify-center">
              <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* "ReBit" */}
                <text x="0" y="12" fill="#2C4A5A" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">ReBit</text>
                
                {/* Yellow dot */}
                <circle cx="33" cy="4" r="2.5" fill="#F1C40F"/>
                
                {/* "box" with yellow "o" */}
                <text x="0" y="24" fill="#2C4A5A" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">b</text>
                <text x="8" y="24" fill="#F1C40F" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">o</text>
                <text x="16" y="24" fill="#2C4A5A" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">x</text>
              </svg>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 pb-32">
          <div className="flex flex-col items-center gap-6 w-full max-w-[358px]">
            <h1 className="text-[#162a39] text-center font-['Noto_Sans_JP'] text-[18px] font-bold leading-[160%]">
              QRコードを ReBit BOX に読み込んでください
            </h1>
            <div className="bg-white rounded-lg flex flex-col items-center gap-6 w-full h-[298px] p-6 overflow-hidden">
              <div className="w-[180px] h-[180px] relative">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="180" height="180" fill="#f5f5f5" />
                  <rect x="20" y="20" width="20" height="20" fill="#000" />
                  <rect x="60" y="20" width="20" height="20" fill="#000" />
                  <rect x="100" y="20" width="20" height="20" fill="#000" />
                  <rect x="140" y="20" width="20" height="20" fill="#000" />
                  <rect x="20" y="60" width="20" height="20" fill="#000" />
                  <rect x="140" y="60" width="20" height="20" fill="#000" />
                  <rect x="20" y="100" width="20" height="20" fill="#000" />
                  <rect x="60" y="100" width="20" height="20" fill="#000" />
                  <rect x="100" y="100" width="20" height="20" fill="#000" />
                  <rect x="140" y="100" width="20" height="20" fill="#000" />
                  <rect x="20" y="140" width="20" height="20" fill="#000" />
                  <rect x="60" y="140" width="20" height="20" fill="#000" />
                  <rect x="100" y="140" width="20" height="20" fill="#000" />
                  <rect x="140" y="140" width="20" height="20" fill="#000" />
                  <text x="90" y="95" textAnchor="middle" fontSize="12" fill="#666">Hirota</text>
                </svg>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <span className="text-[#162a39] font-['Noto_Sans_JP'] text-[12px] font-medium leading-[140%]">QRコードの有効期限</span>
                <span className="text-[#162a39] font-['Noto_Sans_JP'] text-[12px] font-medium leading-[140%]">2025/6/1 15:34 まで</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};