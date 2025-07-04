import React from "react";
import { Link } from "wouter";
import Header from "../components/Header";

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
        <div className="flex-1 flex flex-col items-start p-6 pb-32">
          <div className="flex flex-col items-start gap-6 w-full max-w-[400px]">
            <h1 className="text-[#162a39] font-['Noto_Sans_JP'] text-[24px] font-bold leading-[160%]">
              会員ランクとは
            </h1>
            
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="text-[#162a39] font-['Noto_Sans_JP'] text-[18px] font-semibold leading-[160%]">
                  会員ランクシステム
                </h2>
                <p className="text-[#475a69] font-['Noto_Sans_JP'] text-[16px] leading-[160%]">
                  ReBitでは、ご利用状況に応じて会員ランクが決まります。ランクが上がるほど、より多くの特典やサービスをご利用いただけます。
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="text-[#162a39] font-['Noto_Sans_JP'] text-[18px] font-semibold leading-[160%]">
                  ランクの種類
                </h2>
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-6 h-6 bg-[#C0C0C0] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <span className="text-[#162a39] font-['Noto_Sans_JP'] text-[16px] font-medium">
                      シルバー会員
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <span className="text-[#162a39] font-['Noto_Sans_JP'] text-[16px] font-medium">
                      ゴールド会員
                    </span>
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-6 h-6 bg-[#E5E4E2] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <span className="text-[#162a39] font-['Noto_Sans_JP'] text-[16px] font-medium">
                      プラチナ会員
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="text-[#162a39] font-['Noto_Sans_JP'] text-[18px] font-semibold leading-[160%]">
                  ランクアップの方法
                </h2>
                <p className="text-[#475a69] font-['Noto_Sans_JP'] text-[16px] leading-[160%]">
                  ・定期的なアプリの利用<br/>
                  ・キャンペーンへの参加<br/>
                  ・ポイントの貯め方や使い方<br/>
                  ・友達紹介などの特別な活動
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h2 className="text-[#162a39] font-['Noto_Sans_JP'] text-[18px] font-semibold leading-[160%]">
                  特典について
                </h2>
                <p className="text-[#475a69] font-['Noto_Sans_JP'] text-[16px] leading-[160%]">
                  各ランクに応じて、限定キャンペーンやポイント還元率の向上、特別なサービスなどの特典をご用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};