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
        <div className="flex-1 flex flex-col items-center justify-start p-4 pb-32 min-h-[calc(100vh-120px)]">
          {/* Profile Section */}
          <div className="w-full max-w-[358px] bg-white rounded-lg p-6 shadow-sm mb-4">
            <div className="flex items-center gap-4 mb-6">
              {/* Profile Avatar */}
              <div className="w-16 h-16 bg-[#00C896] rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18Z" fill="white"/>
                </svg>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="font-['Noto_Sans_JP'] text-[18px] font-bold text-[#162a39] mb-1">
                  田中 太郎
                </h2>
                <p className="font-['Noto_Sans_JP'] text-[14px] text-[#666] mb-2">
                  tanaka@example.com
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00C896] rounded-full"></div>
                  <span className="font-['Noto_Sans_JP'] text-[12px] text-[#00C896] font-medium">
                    プレミアム会員
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Points & Statistics */}
          <div className="w-full max-w-[358px] bg-white rounded-lg p-6 shadow-sm mb-4">
            <h3 className="font-['Noto_Sans_JP'] text-[16px] font-bold text-[#162a39] mb-4">
              ポイント・統計
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="font-['Noto_Sans_JP'] text-[24px] font-bold text-[#00C896] mb-1">
                  1,250
                </div>
                <div className="font-['Noto_Sans_JP'] text-[12px] text-[#666]">
                  保有ポイント
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Noto_Sans_JP'] text-[24px] font-bold text-[#00C896] mb-1">
                  47
                </div>
                <div className="font-['Noto_Sans_JP'] text-[12px] text-[#666]">
                  完了チャレンジ
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Noto_Sans_JP'] text-[24px] font-bold text-[#00C896] mb-1">
                  158
                </div>
                <div className="font-['Noto_Sans_JP'] text-[12px] text-[#666]">
                  リサイクル回数
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Noto_Sans_JP'] text-[24px] font-bold text-[#00C896] mb-1">
                  92%
                </div>
                <div className="font-['Noto_Sans_JP'] text-[12px] text-[#666]">
                  今月の達成率
                </div>
              </div>
            </div>
          </div>

          {/* Menu Options */}
          <div className="w-full max-w-[358px] bg-white rounded-lg shadow-sm">
            {/* Account Settings */}
            <div className="border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15.5C11.1167 15.5 10.3542 15.1958 9.7125 14.5875C9.07083 13.9792 8.75 13.2167 8.75 12.3333C8.75 11.45 9.07083 10.6875 9.7125 10.0458C10.3542 9.40417 11.1167 9.08333 12 9.08333C12.8833 9.08333 13.6458 9.40417 14.2875 10.0458C14.9292 10.6875 15.25 11.45 15.25 12.3333C15.25 13.2167 14.9292 13.9792 14.2875 14.5875C13.6458 15.1958 12.8833 15.5 12 15.5ZM1.5 21V18.6667C1.5 18.1 1.67917 17.5875 2.0375 17.1292C2.39583 16.6708 2.86667 16.3333 3.45 16.1167C4.73333 15.65 6.02083 15.2958 7.3125 15.0542C8.60417 14.8125 9.8 14.6917 11 14.6917C12.2 14.6917 13.3958 14.8125 14.6875 15.0542C15.9792 15.2958 17.2667 15.65 18.55 16.1167C19.1333 16.3333 19.6042 16.6708 19.9625 17.1292C20.3208 17.5875 20.5 18.1 20.5 18.6667V21H1.5ZM3.5 19H18.5V18.6667C18.5 18.4833 18.4458 18.3208 18.3375 18.1792C18.2292 18.0375 18.0833 17.9333 17.9 17.8667C16.7833 17.4667 15.6625 17.1667 14.5375 16.9667C13.4125 16.7667 12.2 16.6667 11 16.6667C9.8 16.6667 8.5875 16.7667 7.4625 16.9667C6.3375 17.1667 5.21667 17.4667 4.1 17.8667C3.91667 17.9333 3.77083 18.0375 3.6625 18.1792C3.55417 18.3208 3.5 18.4833 3.5 18.6667V19ZM11 13.5C11.4167 13.5 11.7708 13.3542 12.0625 13.0625C12.3542 12.7708 12.5 12.4167 12.5 12C12.5 11.5833 12.3542 11.2292 12.0625 10.9375C11.7708 10.6458 11.4167 10.5 11 10.5C10.5833 10.5 10.2292 10.6458 9.9375 10.9375C9.64583 11.2292 9.5 11.5833 9.5 12C9.5 12.4167 9.64583 12.7708 9.9375 13.0625C10.2292 13.3542 10.5833 13.5 11 13.5Z" fill="#666"/>
                </svg>
                <span className="font-['Noto_Sans_JP'] text-[14px] text-[#162a39]">アカウント設定</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Notification Settings */}
            <div className="border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Noto_Sans_JP'] text-[14px] text-[#162a39]">通知設定</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Point History */}
            <div className="border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L13 5L17 9L21 5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Noto_Sans_JP'] text-[14px] text-[#162a39]">ポイント履歴</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Help & Support */}
            <div className="border-b border-[#f0f0f0] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="2"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Noto_Sans_JP'] text-[14px] text-[#162a39]">ヘルプ・サポート</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Logout */}
            <div className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Noto_Sans_JP'] text-[14px] text-[#ff6b6b]">ログアウト</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};