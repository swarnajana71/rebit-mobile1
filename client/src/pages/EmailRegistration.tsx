import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";

export const EmailRegistration = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendVerificationMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      console.log("=== Sending Verification Code ===");
      console.log("Email:", data.email);
      
      const response = await fetch("/api/mobile/auth/send-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "送信に失敗しました");
      }
      
      return await response.json();
      
      console.log("Verification sent response:", response);
      return response;
    },
    onSuccess: (data) => {
      console.log("Verification code sent:", data);
      // Navigate to email sent confirmation page
      navigate(`/email-sent?email=${encodeURIComponent(email)}`);
    },
    onError: (error: Error) => {
      console.error("Verification send failed:", error);
      
      let errorMessage = "認証コードの送信に失敗しました";
      if (error.message.includes("already exists")) {
        errorMessage = "このメールアドレスは既に登録されています";
      } else if (error.message.includes("invalid email")) {
        errorMessage = "正しいメールアドレスを入力してください";
      }
      
      toast({
        title: "送信エラー",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "入力エラー",
        description: "正しいメールアドレスを入力してください",
        variant: "destructive",
      });
      return;
    }

    sendVerificationMutation.mutate({ email });
  };

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
            onClick={() => navigate('/')}
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
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
              {/* Email Input */}
              <div className="w-full">
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  メールアドレス　必須
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder=""
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!email || sendVerificationMutation.isPending}
                className="w-full h-[50px] bg-[#4CAF50] text-white rounded-lg font-['Noto_Sans_JP'] text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {sendVerificationMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>送信中...</span>
                  </div>
                ) : (
                  "認証メールを送信する"
                )}
              </button>

              {/* Login Link */}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[14px] text-[#4CAF50] font-['Noto_Sans_JP'] underline"
              >
                メールアドレスを入力し直す
              </button>
            </form>

            {/* Footer Text */}
            <div className="mt-8 text-center">
              <p className="text-[12px] text-gray-600 font-['Noto_Sans_JP']">
                メールが見つからない場合は<br />
                迷惑メールフォルダをご確認ください
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};