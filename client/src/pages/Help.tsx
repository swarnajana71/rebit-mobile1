import React from "react";
import { Link } from "wouter";

export const Help = (): JSX.Element => {
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
            <div className="w-[42px] h-7 bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />
          </div>
        </header>

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