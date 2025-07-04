import { Link } from "wouter";

export const SignUp2 = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen flex justify-center">
      <div className="bg-white w-[390px] relative">
        {/* Header */}
        <header className="flex flex-col w-[390px] items-start pt-4 pb-0 px-0 sticky top-0 left-0 bg-white z-10">
          <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto] px-4">
            <div className="w-8 h-8"></div>
            
            <h1 className="text-[#162A39] font-['Noto_Sans_JP'] text-[18px] font-bold">
              新規登録
            </h1>
            
            <div className="w-8 h-8"></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex w-[390px] py-8 flex-col items-center gap-8 min-h-[calc(100vh-120px)]">
          {/* Step indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#148176] rounded-full"></div>
            <div className="w-2 h-2 bg-[#148176] rounded-full"></div>
            <div className="w-2 h-2 bg-[#E6E6E6] rounded-full"></div>
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[#162A39] font-['Noto_Sans_JP'] text-[20px] font-bold text-center">
              連携サービス選択
            </h2>
            <p className="text-[#666666] font-['Noto_Sans_JP'] text-[14px] text-center">
              アカウント連携方法を選択してください
            </p>
          </div>

          {/* Service Buttons */}
          <div className="flex flex-col gap-4 w-[358px] items-center">
            {/* Button 1 - LINE */}
            <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden bg-[#00B900] flex items-center justify-center">
              <div className="flex items-center justify-center gap-3">
                {/* LINE Logo */}
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-[#00B900] font-bold text-[10px] leading-none">LINE</span>
                </div>
                {/* Text */}
                <span className="text-white font-['Noto_Sans_JP'] text-[16px] font-medium">
                  LINEで登録する
                </span>
              </div>
            </button>

            {/* Button 2 - Amazon */}
            <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden bg-[#FF9900] flex items-center justify-center border border-[#E7C547]">
              <div className="flex items-center justify-center gap-3">
                {/* Amazon Logo */}
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 9.5C8.5 11.3 10 12.8 11.8 12.8H14.5C16.3 12.8 17.8 11.3 17.8 9.5C17.8 7.7 16.3 6.2 14.5 6.2H11.8C10 6.2 8.5 7.7 8.5 9.5Z" fill="#232F3E"/>
                  <path d="M20.5 14.8C18.9 16.1 16.5 16.8 14.4 16.8C11.5 16.8 8.9 15.6 6.9 13.8C6.7 13.6 6.9 13.3 7.1 13.4C9.3 14.9 12.1 15.8 15 15.8C17 15.8 19.2 15.4 21.2 14.5C21.6 14.3 21.9 14.7 20.5 14.8Z" fill="#232F3E"/>
                  <path d="M21.4 13.8C21.2 13.5 20 13.6 19.5 13.7C19.3 13.7 19.3 13.5 19.5 13.4C20.5 12.6 22.2 12.8 22.4 13.1C22.6 13.4 22.3 15.1 21.4 15.8C21.2 16 21 15.9 21.1 15.7C21.5 14.9 21.6 13.9 21.4 13.8Z" fill="#232F3E"/>
                </svg>
                {/* Text */}
                <span className="text-[#232F3E] font-['Noto_Sans_JP'] text-[15px] font-medium">
                  Amazonアカウントでログイン
                </span>
              </div>
            </button>

            {/* Button 3 - Placeholder */}
            <div className="w-[358px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
              <span className="text-gray-500 font-['Noto_Sans_JP'] text-[14px]">Button 3 (準備中)</span>
            </div>

            {/* Button 4 - Placeholder */}
            <div className="w-[358px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
              <span className="text-gray-500 font-['Noto_Sans_JP'] text-[14px]">Button 4 (準備中)</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3 w-[358px] items-center mt-8">
            {/* Back Button */}
            <Link href="/signup1">
              <button className="bg-[#F5F5F5] text-[#162A39] font-['Noto_Sans_JP'] text-[16px] font-medium h-[52px] rounded-lg w-[240px]">
                戻る
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};