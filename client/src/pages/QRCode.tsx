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
                {/* Home button with filled icon */}
                <Link href="/">
                  <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40000004_2374)">
                        <path d="M6 19H9V14C9 13.7167 9.09583 13.4792 9.2875 13.2875C9.47917 13.0958 9.71667 13 10 13H14C14.2833 13 14.5208 13.0958 14.7125 13.2875C14.9042 13.4792 15 13.7167 15 14V19H18V10L12 5.5L6 10V19ZM4 19V10C4 9.68333 4.07083 9.38333 4.2125 9.1C4.35417 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.6458 8.81667 19.7875 9.1C19.9292 9.38333 20 9.68333 20 10V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H14C13.7167 21 13.4792 20.9042 13.2875 20.7125C13.0958 20.5208 13 20.2833 13 20V15H11V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19Z" fill="#162A39"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_40000004_2374">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      ホーム
                    </div>
                  </button>
                </Link>
                
                {/* Challenge button */}
                <Link href="/challenge">
                  <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                    <div
                      className="w-6 h-6 bg-[100%_100%]"
                      style={{ backgroundImage: `url(/figmaAssets/gift-400.svg)` }}
                    />
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      チャレンジ
                    </div>
                  </button>
                </Link>
              </div>

              {/* Right side navigation items */}
              <div className="flex items-center justify-end gap-2 relative flex-1 grow">
                {/* Map button */}
                <Link href="/map">
                  <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                    <div
                      className="w-6 h-6 bg-[100%_100%]"
                      style={{ backgroundImage: `url(/figmaAssets/pin.svg)` }}
                    />
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      マップ
                    </div>
                  </button>
                </Link>
                
                {/* Account button */}
                <Link href="/account">
                  <button className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto bg-transparent border-none">
                    <div
                      className="w-6 h-6 bg-[100%_100%]"
                      style={{ backgroundImage: `url(/figmaAssets/account.svg)` }}
                    />
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      アカウント
                    </div>
                  </button>
                </Link>
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