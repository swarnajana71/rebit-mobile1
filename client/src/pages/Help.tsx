import React from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Heading from "../components/Heading";

export const Help = (): JSX.Element => {
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
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full relative">
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
        </header>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-col items-center p-0 gap-6 absolute w-[358px] left-1/2 transform -translate-x-1/2 top-[122px]">
          <div className="flex flex-col items-start p-0 gap-6 w-[358px]">
            {/* Main Heading */}
            <Heading>会員ランクの説明</Heading>
            
            {/* Section 1 */}
            <div className="flex flex-col items-start p-0 gap-4 w-[358px]">
              <div className="flex flex-row items-start py-2 px-3 gap-2 w-[358px] h-9 bg-[#E6EAED]">
                <h2 className="w-[334px] h-5 font-['Noto_Sans_JP'] font-bold text-[14px] leading-[140%] flex items-center text-[#162A39] flex-grow">
                  会員ランクシステムについて
                </h2>
              </div>
              <p className="w-[358px] font-['Noto_Sans_JP'] font-medium text-[14px] leading-[160%] flex items-center text-[#162A39]">
                ReBitでは、ご利用状況に応じて会員ランクが決まります。ランクが上がるほど、より多くの特典やサービスをご利用いただけます。定期的なアプリの利用やキャンペーンへの参加により、ランクアップが可能です。
              </p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-start p-0 gap-4 w-[358px]">
              <div className="flex flex-row items-start py-2 px-3 gap-2 w-[358px] h-9 bg-[#E6EAED]">
                <h2 className="w-[334px] h-5 font-['Noto_Sans_JP'] font-bold text-[14px] leading-[140%] flex items-center text-[#162A39] flex-grow">
                  ランクの種類と特典
                </h2>
              </div>
              <p className="w-[358px] font-['Noto_Sans_JP'] font-medium text-[14px] leading-[160%] flex items-center text-[#162A39]">
                5つのランクをご用意しており、各ランクで異なる特典をお楽しみいただけます。
              </p>
              
              {/* Chart Image */}
              <div className="w-[358px] h-[162px] bg-white relative">
                {/* Base line */}
                <div className="absolute w-[310px] h-0.5 left-1/2 transform -translate-x-1/2 top-40 bg-[#162A39]"></div>
                
                {/* Rank bars */}
                <div className="absolute w-[30px] h-8 left-14 top-32 bg-[#475A69] rounded-t-sm"></div>
                <div className="absolute w-[30px] h-14 left-[110px] top-[104px] bg-[#475A69] rounded-t-sm"></div>
                <div className="absolute w-[30px] h-20 left-[164px] top-20 bg-[#475A69] rounded-t-sm"></div>
                <div className="absolute w-[30px] h-[104px] left-[218px] top-14 bg-[#475A69] rounded-t-sm"></div>
                <div className="absolute w-[30px] h-32 left-[272px] top-8 bg-[#475A69] rounded-t-sm"></div>
                
                {/* Rank icons */}
                <div className="absolute w-5 h-5 left-[61px] top-[134px]">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#475A69] text-xs font-bold">R</span>
                  </div>
                </div>
                <div className="absolute w-5 h-5 left-[115px] top-[122px]">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#475A69] text-xs font-bold">R</span>
                  </div>
                </div>
                <div className="absolute w-5 h-5 left-[169px] top-[110px]">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#475A69] text-xs font-bold">R</span>
                  </div>
                </div>
                <div className="absolute w-5 h-5 left-[223px] top-[98px]">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#475A69] text-xs font-bold">R</span>
                  </div>
                </div>
                <div className="absolute w-5 h-5 left-[277px] top-[86px]">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#475A69] text-xs font-bold">R</span>
                  </div>
                </div>
                
                {/* Seed icon */}
                <div className="absolute w-6 h-6 left-[59px] top-24">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 22H2L12 2Z" fill="#475A69"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};