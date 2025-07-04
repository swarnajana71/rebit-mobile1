import { Link } from "wouter";

export const SignUp1 = (): JSX.Element => {
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
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-[80px] h-[54px] bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />
            <h2 className="text-[#162A39] font-['Noto_Sans_JP'] text-[16px] font-medium text-center">
              ReBitアプリへようこそ
            </h2>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 w-[358px]">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                メールアドレス
              </label>
              <input
                type="email"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                パスワード
              </label>
              <input
                type="password"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="パスワードを入力"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                パスワード確認
              </label>
              <input
                type="password"
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="パスワードを再入力"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="flex flex-col gap-3 w-[358px] items-center">
            <button className="relative w-[240px] h-[54px] rounded-[27px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#148176] to-[#77C6BE]"></div>
              <span className="relative z-10 text-white font-['Noto_Sans_JP'] text-[16px] font-bold flex items-center justify-center h-full">
                新規登録
              </span>
            </button>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px]">
                既にアカウントをお持ちですか？
              </span>
              <Link href="/login">
                <span className="text-[#148176] font-['Noto_Sans_JP'] text-[14px] font-medium ml-1 underline">
                  ログイン
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};