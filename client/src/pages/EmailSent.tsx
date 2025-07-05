import { useLocation } from "wouter";

export const EmailSent = (): JSX.Element => {
  const [, navigate] = useLocation();
  
  // Get email from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email') || '';

  return (
    <div className="bg-white w-full min-h-screen flex justify-center">
      <div className="bg-white w-[390px] relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center p-4 pt-12">
          <div className="flex items-center gap-1">
            <span className="text-black font-medium text-[17px]">9:41</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24">
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12l-.35-.95L4 12.53l-1.15-1.48L2 12.53l.85-1.48L3.5 12l-.35.95zM12 4l7 3v6l-7 3-7-3V7l7-3z"/>
            </svg>
            <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24">
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L5.5 12l-.35-.95L4 12.53l-1.15-1.48L2 12.53l.85-1.48L3.5 12l-.35.95zM12 4l7 3v6l-7 3-7-3V7l7-3z"/>
            </svg>
            <svg className="w-6 h-3" fill="black" viewBox="0 0 24 12">
              <rect x="1" y="1" width="22" height="10" rx="5" fill="none" stroke="black" strokeWidth="1"/>
              <rect x="23" y="4" width="2" height="4" rx="1" fill="black"/>
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="px-4 py-2 flex items-center">
          <button 
            onClick={() => navigate('/email-registration')}
            className="p-2 -ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-[17px] font-medium text-black font-['Noto_Sans_JP']">会員登録</h1>
          </div>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="px-4 py-8 flex flex-col items-center">
          <div className="w-full max-w-[358px] flex flex-col items-center">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-[20px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                メールアドレスを登録
              </h2>
              <p className="text-[14px] text-gray-600 font-['Noto_Sans_JP'] mt-4">
                届いたメールに記載の<br />
                認証コードをご入力ください
              </p>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col items-center gap-4">
              <button
                onClick={() => navigate(`/verification?email=${encodeURIComponent(email)}`)}
                className="w-full h-[50px] bg-[#4CAF50] text-white rounded-lg font-['Noto_Sans_JP'] text-[16px] font-medium"
              >
                認証する
              </button>

              <button
                onClick={() => navigate('/email-registration')}
                className="text-[14px] text-[#4CAF50] font-['Noto_Sans_JP'] underline"
              >
                メールアドレスを入力し直す
              </button>
            </div>

            {/* Footer Text */}
            <div className="mt-8 text-center">
              <p className="text-[12px] text-gray-600 font-['Noto_Sans_JP']">
                メールが届かない場合は<br />
                迷惑メールフォルダをご確認ください
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};