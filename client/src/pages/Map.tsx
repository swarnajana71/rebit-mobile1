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

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-start p-4 pb-32 min-h-[calc(100vh-120px)]">
          {/* Map Container */}
          <div className="w-full max-w-[358px] h-[500px] bg-white rounded-lg overflow-hidden shadow-sm">
            {/* Map Header */}
            <div className="bg-[#00C896] h-12 flex items-center justify-center">
              <span className="font-['Noto_Sans_JP'] text-white text-[14px] font-medium">
                ReBit BOX マップ
              </span>
            </div>

            {/* Map Content */}
            <div className="relative w-full h-[452px] bg-[#f0f8ff]">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00C896" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                </svg>
              </div>

              {/* Location Markers */}
              <div className="absolute top-20 left-12">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#00C896] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-['Noto_Sans_JP'] text-[#162a39] shadow-md whitespace-nowrap">
                    渋谷駅前
                  </div>
                </div>
              </div>

              <div className="absolute top-32 right-16">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#00C896] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-['Noto_Sans_JP'] text-[#162a39] shadow-md whitespace-nowrap">
                    新宿南口
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#00C896] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-['Noto_Sans_JP'] text-[#162a39] shadow-md whitespace-nowrap">
                    品川駅
                  </div>
                </div>
              </div>

              <div className="absolute top-16 right-8">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#FF6B6B] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-['Noto_Sans_JP'] text-[#162a39] shadow-md whitespace-nowrap">
                    現在地
                  </div>
                </div>
              </div>

              {/* Current Location Indicator */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                  <span className="font-['Noto_Sans_JP'] text-[12px] text-[#162a39]">現在地</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-[#00C896] rounded-full"></div>
                  <span className="font-['Noto_Sans_JP'] text-[12px] text-[#162a39]">ReBit BOX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Distance Info */}
          <div className="mt-4 w-full max-w-[358px] bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <span className="font-['Noto_Sans_JP'] text-[14px] font-medium text-[#162a39]">
                  最寄りのReBit BOX
                </span>
                <div className="mt-1">
                  <span className="font-['Noto_Sans_JP'] text-[12px] text-[#666]">
                    渋谷駅前 - 徒歩3分 (約240m)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#00C896] rounded-full"></div>
                <span className="font-['Noto_Sans_JP'] text-[12px] text-[#00C896] font-medium">
                  利用可能
                </span>
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