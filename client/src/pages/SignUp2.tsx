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
            <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden bg-[#FF9900] flex items-center justify-center">
              <div className="flex items-center justify-center gap-3">
                {/* Amazon Logo */}
                <div className="flex items-center">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9 12.8C14.3 14.1 11.9 14.8 9.8 14.8C6.9 14.8 4.3 13.6 2.3 11.8C2.1 11.6 2.3 11.3 2.5 11.4C4.7 12.9 7.5 13.8 10.4 13.8C12.4 13.8 14.6 13.4 16.6 12.5C17 12.3 17.3 12.7 15.9 12.8Z" fill="#232F3E"/>
                    <path d="M16.8 11.8C16.6 11.5 15.4 11.6 14.9 11.7C14.7 11.7 14.7 11.5 14.9 11.4C15.9 10.6 17.6 10.8 17.8 11.1C18 11.4 17.7 13.1 16.8 13.8C16.6 14 16.4 13.9 16.5 13.7C16.9 12.9 17 11.9 16.8 11.8Z" fill="#232F3E"/>
                    <path d="M15.2 2.1V1C15.2 0.7 15 0.5 14.7 0.5H8.8C8.5 0.5 8.3 0.7 8.3 1V1.9C8.3 2.2 8.5 2.5 8.9 3L11.9 6.9C12.1 7.2 12.2 7.6 12.2 8V10.4C12.2 10.6 12.3 10.8 12.5 10.9L13.8 11.7C14.1 11.9 14.5 11.7 14.5 11.3V8C14.5 7.6 14.6 7.2 14.8 6.9L17.8 3C18.1 2.6 18.2 2.2 18.2 1.9V1C18.2 0.7 18 0.5 17.7 0.5H16C15.7 0.5 15.5 0.7 15.5 1V2.1H15.2Z" fill="#232F3E"/>
                  </svg>
                </div>
                {/* Text */}
                <span className="text-[#232F3E] font-['Noto_Sans_JP'] text-[14px] font-medium">
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