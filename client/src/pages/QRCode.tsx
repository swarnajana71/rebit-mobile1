import React from 'react';
import { Link } from 'wouter';
import { FooterSection } from './sections/FooterSection';

export const QRCode = (): JSX.Element => {
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
        <footer className="fixed bottom-0 left-0 right-0 flex flex-col w-full items-start bg-transparent z-50">
          <div className="flex flex-col items-center justify-end p-2 relative self-stretch w-full flex-[0_0_auto] bg-white border-t [border-top-style:solid] border-[#e6e6e6]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              {/* Left side navigation items */}
              <div className="flex items-center gap-2 relative flex-1 grow">
                {/* Home button with outlined icon */}
                <Link href="/">
                  <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12L12 3L21 12" stroke="#162a39" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 10V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V10" stroke="#162a39" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="10" y="15" width="4" height="5" stroke="#162a39" strokeWidth="1.5" fill="none"/>
                      <circle cx="11.5" cy="17" r="0.5" fill="#162a39"/>
                    </svg>
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      ホーム
                    </div>
                  </button>
                </Link>
                
                {/* Challenge button */}
                <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                  <div
                    className="w-6 h-6 bg-[100%_100%]"
                    style={{ backgroundImage: `url(/figmaAssets/gift-400.svg)` }}
                  />
                  <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                    チャレンジ
                  </div>
                </button>
              </div>

              {/* Right side navigation items */}
              <div className="flex items-center justify-end gap-2 relative flex-1 grow">
                {/* Map button */}
                <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                  <div
                    className="w-6 h-6 bg-[100%_100%]"
                    style={{ backgroundImage: `url(/figmaAssets/pin.svg)` }}
                  />
                  <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                    マップ
                  </div>
                </button>
                
                {/* Account button */}
                <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                  <div
                    className="w-6 h-6 bg-[100%_100%]"
                    style={{ backgroundImage: `url(/figmaAssets/account.svg)` }}
                  />
                  <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                    アカウント
                  </div>
                </button>
              </div>

              {/* Center QR code button */}
              <Link href="/qrcode">
                <button className="flex flex-col w-16 h-16 items-center justify-center gap-0.5 pt-0 pb-1 px-0 absolute top-[-22px] left-1/2 transform -translate-x-1/2 bg-[#162a39] rounded-[47px] border-none">
                  <div className="w-6 h-6 bg-[url(/figmaAssets/qrcode.svg)] relative bg-[100%_100%]" />
                  <div className="relative self-stretch font-med-12px font-[number:var(--med-12px-font-weight)] text-white text-[length:var(--med-12px-font-size)] text-center tracking-[var(--med-12px-letter-spacing)] leading-[var(--med-12px-line-height)] [font-style:var(--med-12px-font-style)]">
                    QRコード
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative self-stretch w-full h-[34px] bg-white">
            <div className="relative w-36 h-[5px] mx-auto mt-5 bg-black rounded-[100px]" />
          </div>
        </footer>
      </div>
    </div>
  );
};