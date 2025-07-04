import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";

export const Home = (): JSX.Element => {
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
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[390px] relative">
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
        </header>

        {/* Main Content */}
        <MainContentSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};
