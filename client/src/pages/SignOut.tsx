import { Link } from "wouter";

export const SignOut = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen flex justify-center">
      <div className="bg-white w-[390px] relative">
        {/* Header */}
        <header className="flex flex-col w-[390px] items-start pt-4 pb-0 px-0 sticky top-0 left-0 bg-white z-10">
          <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto] px-4">
            <Link href="/account">
              <button className="flex items-center justify-center w-8 h-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#162A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Link>
            
            <h1 className="text-[#162A39] font-['Noto_Sans_JP'] text-[16px] font-bold">
              サインアウト
            </h1>
            
            <div className="w-8 h-8"></div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex w-[390px] py-8 flex-col items-center gap-8 min-h-[calc(100vh-120px)]">
          {/* Sign Out Confirmation */}
          <div className="flex w-[358px] flex-col items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 bg-[#E6EAED] rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#162A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17L21 12L16 7" stroke="#162A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12H9" stroke="#162A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-[#162A39] font-['Noto_Sans_JP'] text-[18px] font-bold text-center">
              サインアウトしますか？
            </h2>

            {/* Description */}
            <p className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium text-center leading-[160%] max-w-[280px]">
              サインアウトすると、再度ログインが必要になります。
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-[358px] items-center">
            {/* Sign Out Button with Gradient */}
            <button className="relative w-[240px] h-[54px] rounded-[27px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#148176] to-[#77C6BE]"></div>
              <span className="relative z-10 text-white font-['Noto_Sans_JP'] text-[16px] font-bold flex items-center justify-center h-full">
                ログアウト
              </span>
            </button>

            {/* Cancel Button */}
            <Link href="/account">
              <button className="bg-[#F5F5F5] text-[#162A39] font-['Noto_Sans_JP'] text-[16px] font-medium h-[52px] rounded-lg w-[240px]">
                キャンセル
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};