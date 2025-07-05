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

            {/* Button 3 - Google */}
            <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden">
              <svg width="358" height="48" viewBox="0 0 358 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="357" height="47" rx="23.5" fill="white"/>
                <rect x="0.5" y="0.5" width="357" height="47" rx="23.5" stroke="#747775"/>
                <mask id="mask0_2_8676" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="16" y="14" width="20" height="20">
                  <path d="M36 14H16V34H36V14Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_2_8676)">
                  <path d="M35.6 24.2274C35.6 23.5183 35.5364 22.8365 35.4182 22.1819H26V26.0501H31.3818C31.15 27.3001 30.4455 28.3592 29.3864 29.0683V31.5774H32.6182C34.5091 29.8365 35.6 27.2728 35.6 24.2274Z" fill="#4285F4"/>
                  <path d="M26.0001 33.9999C28.7001 33.9999 30.9637 33.1044 32.6182 31.5772L29.3864 29.0681C28.491 29.6681 27.3455 30.0226 26.0001 30.0226C23.3955 30.0226 21.191 28.2635 20.4046 25.8999H17.0637V28.4908C18.7092 31.759 22.091 33.9999 26.0001 33.9999Z" fill="#34A853"/>
                  <path d="M20.4045 25.8999C20.2045 25.2999 20.0909 24.659 20.0909 23.9999C20.0909 23.3408 20.2045 22.6999 20.4045 22.0999V19.509H17.0636C16.3864 20.859 16 22.3863 16 23.9999C16 25.6135 16.3864 27.1408 17.0636 28.4908L20.4045 25.8999Z" fill="#FBBC04"/>
                  <path d="M26.0001 17.9773C27.4682 17.9773 28.7864 18.4818 29.8228 19.4727L32.691 16.6045C30.9592 14.9909 28.6955 14 26.0001 14C22.091 14 18.7092 16.2409 17.0637 19.5091L20.4046 22.1C21.191 19.7364 23.3955 17.9773 26.0001 17.9773Z" fill="#E94235"/>
                </g>
                <text x="126.729" y="28" className="fill-[#747775] font-['Noto_Sans_JP'] text-[15px] font-medium">Googleでログイン</text>
              </svg>
            </button>

            {/* Button 4 - Email */}
            <Link href="/register-email">
              <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden">
                <svg width="358" height="48" viewBox="0 0 358 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="356" height="46" rx="23" fill="white"/>
                  <rect x="1" y="1" width="356" height="46" rx="23" stroke="url(#paint0_linear_2_8686)" strokeWidth="2"/>
                  <g clipPath="url(#clip0_2_8686)">
                    <path d="M19.9995 32C19.4495 32 18.9787 31.8042 18.587 31.4125C18.1953 31.0208 17.9995 30.55 17.9995 30V18C17.9995 17.45 18.1953 16.9792 18.587 16.5875C18.9787 16.1958 19.4495 16 19.9995 16H35.9995C36.5495 16 37.0203 16.1958 37.412 16.5875C37.8037 16.9792 37.9995 17.45 37.9995 18V30C37.9995 30.55 37.8037 31.0208 37.412 31.4125C37.0203 31.8042 36.5495 32 35.9995 32H19.9995ZM35.9995 20L28.5245 24.675C28.4412 24.725 28.3537 24.7625 28.262 24.7875C28.1703 24.8125 28.0828 24.825 27.999 24.825C27.9162 24.825 27.8287 24.8125 27.737 24.7875C27.6453 24.7625 27.5578 24.725 27.4745 24.675L19.9995 20V18L27.999 23L35.9995 18V20Z" fill="#2B988D"/>
                  </g>
                  <text x="106.802" y="28" className="fill-[#2B988D] font-['Noto_Sans_JP'] text-[15px] font-medium">メールアドレスで登録</text>
                  <defs>
                    <linearGradient id="paint0_linear_2_8686" x1="-3.55067e-08" y1="24.192" x2="357.773" y2="33.2134" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2B988D"/>
                      <stop offset="1" stopColor="#A4E0D9"/>
                    </linearGradient>
                    <clipPath id="clip0_2_8686">
                      <rect width="24" height="24" fill="white" transform="translate(16 12)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
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