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

            {/* Button 2 - Placeholder */}
            <div className="w-[358px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
              <span className="text-gray-500 font-['Noto_Sans_JP'] text-[14px]">Button 2 (準備中)</span>
            </div>

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