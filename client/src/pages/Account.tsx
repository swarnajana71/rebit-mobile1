import React from 'react';
import { Link } from 'wouter';
import { FooterSection } from './sections/FooterSection';

export const Account = (): JSX.Element => {
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
        <div className="flex w-full px-0 py-6 pb-10 flex-col items-center gap-6 min-h-[calc(100vh-120px)]">
          {/* Profile Section */}
          <div className="flex w-[358px] flex-col items-center gap-2">
            {/* Profile Image */}
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 rounded-[40px] bg-[#E6EAED] flex items-center justify-center">
                <svg width="38.4" height="38.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18Z" fill="#162A39"/>
                </svg>
              </div>
            </div>

            {/* User Name */}
            <span className="color-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-bold leading-[140%] text-[#162A39]">
              渡辺 広太
            </span>
          </div>

          {/* Menu List */}
          <div className="flex flex-col items-start w-[358px]">
            {/* Member Information */}
            <div className="flex h-[54px] px-4 items-center gap-2 border-b border-[#E6E6E6] w-full box-border">
              <span className="flex-1 overflow-hidden text-[#162A39] text-ellipsis whitespace-nowrap font-['Noto_Sans_JP'] text-[14px] font-medium leading-[160%]">
                会員情報
              </span>
              <div className="flex w-5 h-5 justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0622 10.0002L5.93718 3.87516C5.72885 3.66683 5.62816 3.4203 5.6351 3.13558C5.64205 2.85086 5.74968 2.60433 5.95802 2.396C6.16635 2.18766 6.41288 2.0835 6.6976 2.0835C6.98232 2.0835 7.22885 2.18766 7.43718 2.396L13.833 8.81266C13.9997 8.97933 14.1247 9.16683 14.208 9.37516C14.2914 9.5835 14.333 9.79183 14.333 10.0002C14.333 10.2085 14.2914 10.4168 14.208 10.6252C14.1247 10.8335 13.9997 11.021 13.833 11.1877L7.41635 17.6043C7.20802 17.8127 6.96496 17.913 6.70802 17.917C6.45108 17.921 6.20802 17.8207 6.00802 17.6127C5.80802 17.4043 5.70802 17.161 5.70802 16.8835C5.70802 16.606 5.80802 16.3627 6.00802 16.1543L12.0622 10.0002Z" fill="#162A39"/>
                </svg>
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex h-[54px] px-4 items-center gap-2 border-b border-[#E6E6E6] w-full box-border">
              <span className="flex-1 overflow-hidden text-[#162A39] text-ellipsis whitespace-nowrap font-['Noto_Sans_JP'] text-[14px] font-medium leading-[160%]">
                お問い合わせ
              </span>
              <div className="flex w-5 h-5 justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0622 10.0002L5.93718 3.87516C5.72885 3.66683 5.62816 3.4203 5.6351 3.13558C5.64205 2.85086 5.74968 2.60433 5.95802 2.396C6.16635 2.18766 6.41288 2.0835 6.6976 2.0835C6.98232 2.0835 7.22885 2.18766 7.43718 2.396L13.833 8.81266C13.9997 8.97933 14.1247 9.16683 14.208 9.37516C14.2914 9.5835 14.333 9.79183 14.333 10.0002C14.333 10.2085 14.2914 10.4168 14.208 10.6252C14.1247 10.8335 13.9997 11.021 13.833 11.1877L7.41635 17.6043C7.20802 17.8127 6.96496 17.913 6.70802 17.917C6.45108 17.921 6.20802 17.8207 6.00802 17.6127C5.80802 17.4043 5.70802 17.161 5.70802 16.8835C5.70802 16.606 5.80802 16.3627 6.00802 16.1543L12.0622 10.0002Z" fill="#162A39"/>
                </svg>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="flex h-[54px] px-4 items-center gap-2 border-b border-[#E6E6E6] w-full box-border">
              <span className="flex-1 overflow-hidden text-[#162A39] text-ellipsis whitespace-nowrap font-['Noto_Sans_JP'] text-[14px] font-medium leading-[160%]">
                利用規約
              </span>
              <div className="flex w-5 h-5 justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0622 10.0002L5.93718 3.87516C5.72885 3.66683 5.62816 3.4203 5.6351 3.13558C5.64205 2.85086 5.74968 2.60433 5.95802 2.396C6.16635 2.18766 6.41288 2.0835 6.6976 2.0835C6.98232 2.0835 7.22885 2.18766 7.43718 2.396L13.833 8.81266C13.9997 8.97933 14.1247 9.16683 14.208 9.37516C14.2914 9.5835 14.333 9.79183 14.333 10.0002C14.333 10.2085 14.2914 10.4168 14.208 10.6252C14.1247 10.8335 13.9997 11.021 13.833 11.1877L7.41635 17.6043C7.20802 17.8127 6.96496 17.913 6.70802 17.917C6.45108 17.921 6.20802 17.8207 6.00802 17.6127C5.80802 17.4043 5.70802 17.161 5.70802 16.8835C5.70802 16.606 5.80802 16.3627 6.00802 16.1543L12.0622 10.0002Z" fill="#162A39"/>
                </svg>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex h-[54px] px-4 items-center gap-2 border-b border-[#E6E6E6] w-full box-border">
              <span className="flex-1 overflow-hidden text-[#162A39] text-ellipsis whitespace-nowrap font-['Noto_Sans_JP'] text-[14px] font-medium leading-[160%]">
                プライバシーポリシー
              </span>
              <div className="flex w-5 h-5 justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0622 10.0002L5.93718 3.87516C5.72885 3.66683 5.62816 3.4203 5.6351 3.13558C5.64205 2.85086 5.74968 2.60433 5.95802 2.396C6.16635 2.18766 6.41288 2.0835 6.6976 2.0835C6.98232 2.0835 7.22885 2.18766 7.43718 2.396L13.833 8.81266C13.9997 8.97933 14.1247 9.16683 14.208 9.37516C14.2914 9.5835 14.333 9.79183 14.333 10.0002C14.333 10.2085 14.2914 10.4168 14.208 10.6252C14.1247 10.8335 13.9997 11.021 13.833 11.1877L7.41635 17.6043C7.20802 17.8127 6.96496 17.913 6.70802 17.917C6.45108 17.921 6.20802 17.8207 6.00802 17.6127C5.80802 17.4043 5.70802 17.161 5.70802 16.8835C5.70802 16.606 5.80802 16.3627 6.00802 16.1543L12.0622 10.0002Z" fill="#162A39"/>
                </svg>
              </div>
            </div>

            {/* ReBit Official Site */}
            <div className="flex h-[54px] px-4 items-center gap-2 border-b border-[#E6E6E6] w-full box-border">
              <span className="flex-1 overflow-hidden text-[#162A39] text-ellipsis whitespace-nowrap font-['Noto_Sans_JP'] text-[14px] font-medium leading-[160%]">
                ReBit公式サイト
              </span>
              <div className="flex w-5 h-5 justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0622 10.0002L5.93718 3.87516C5.72885 3.66683 5.62816 3.4203 5.6351 3.13558C5.64205 2.85086 5.74968 2.60433 5.95802 2.396C6.16635 2.18766 6.41288 2.0835 6.6976 2.0835C6.98232 2.0835 7.22885 2.18766 7.43718 2.396L13.833 8.81266C13.9997 8.97933 14.1247 9.16683 14.208 9.37516C14.2914 9.5835 14.333 9.79183 14.333 10.0002C14.333 10.2085 14.2914 10.4168 14.208 10.6252C14.1247 10.8335 13.9997 11.021 13.833 11.1877L7.41635 17.6043C7.20802 17.8127 6.96496 17.913 6.70802 17.917C6.45108 17.921 6.20802 17.8207 6.00802 17.6127C5.80802 17.4043 5.70802 17.161 5.70802 16.8835C5.70802 16.606 5.80802 16.3627 6.00802 16.1543L12.0622 10.0002Z" fill="#162A39"/>
                </svg>
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