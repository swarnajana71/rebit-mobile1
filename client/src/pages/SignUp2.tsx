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
              プロフィール情報
            </h2>
            <p className="text-[#666666] font-['Noto_Sans_JP'] text-[14px] text-center">
              基本情報を入力してください
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 w-[358px]">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                お名前
              </label>
              <input
                type="text"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="山田 太郎"
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                電話番号
              </label>
              <input
                type="tel"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="090-1234-5678"
              />
            </div>

            {/* Birth Date Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                生年月日
              </label>
              <input
                type="date"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
              />
            </div>

            {/* Gender Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                性別
              </label>
              <div className="flex gap-2">
                <button className="flex-1 border border-[#E6E6E6] rounded-lg h-[48px] font-['Noto_Sans_JP'] text-[14px] text-[#666666] hover:border-[#148176] hover:text-[#148176]">
                  男性
                </button>
                <button className="flex-1 border border-[#E6E6E6] rounded-lg h-[48px] font-['Noto_Sans_JP'] text-[14px] text-[#666666] hover:border-[#148176] hover:text-[#148176]">
                  女性
                </button>
                <button className="flex-1 border border-[#E6E6E6] rounded-lg h-[48px] font-['Noto_Sans_JP'] text-[14px] text-[#666666] hover:border-[#148176] hover:text-[#148176]">
                  その他
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-[358px] items-center">
            {/* Next Button */}
            <button className="relative w-[240px] h-[54px] rounded-[27px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#148176] to-[#77C6BE]"></div>
              <span className="relative z-10 text-white font-['Noto_Sans_JP'] text-[16px] font-bold flex items-center justify-center h-full">
                次へ
              </span>
            </button>

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