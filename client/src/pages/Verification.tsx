import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";

export const Verification = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  // Get email and sessionId from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email') || '';
  const sessionId = urlParams.get('sessionId') || '';
  
  const [codes, setCodes] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const verifyCodeMutation = useMutation({
    mutationFn: async (data: { email: string; code: string }) => {
      console.log("=== Verifying Code ===");
      console.log("Email:", data.email);
      console.log("Code:", data.code);
      
      try {
        const response = await fetch("/api/mobile/auth/verify-code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || "認証に失敗しました");
        }
        
        return await response.json();
      } catch (error) {
        console.error("Verification error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Verification successful:", data);
      toast({
        title: "認証完了",
        description: "メールアドレスが認証されました",
      });
      // Navigate to code confirmed page
      navigate(`/code-confirmed?email=${encodeURIComponent(email)}&sessionId=${encodeURIComponent(sessionId)}`);
    },
    onError: (error: Error) => {
      console.error("Verification failed:", error);
      
      let errorMessage = "認証コードが正しくありません";
      if (error.message.includes("expired")) {
        errorMessage = "認証コードの有効期限が切れています";
      } else if (error.message.includes("invalid")) {
        errorMessage = "認証コードが正しくありません";
      }
      
      toast({
        title: "認証エラー",
        description: errorMessage,
        variant: "destructive",
      });
      
      // Clear all inputs
      setCodes(['', '', '', '']);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },
  });

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
    
    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Auto-submit when all 4 digits are entered
    if (newCodes.every(code => code.length === 1)) {
      const fullCode = newCodes.join('');
      verifyCodeMutation.mutate({ email, code: fullCode });
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      // Move to previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = codes.join('');
    if (fullCode.length === 4) {
      verifyCodeMutation.mutate({ email, code: fullCode });
    }
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
            onClick={() => navigate(`/email-sent?email=${encodeURIComponent(email)}&sessionId=${encodeURIComponent(sessionId)}`)}
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

            {/* Code Input Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
              {/* 4-Digit Code Input */}
              <div className="flex gap-4 justify-center">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    value={code}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-[60px] h-[60px] text-center text-[24px] font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#4CAF50] font-['Noto_Sans_JP']"
                    disabled={verifyCodeMutation.isPending}
                  />
                ))}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={codes.some(code => !code) || verifyCodeMutation.isPending}
                className="w-full h-[50px] bg-[#4CAF50] text-white rounded-lg font-['Noto_Sans_JP'] text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {verifyCodeMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>認証中...</span>
                  </div>
                ) : (
                  "認証する"
                )}
              </button>

              {/* Resend Link */}
              <button
                type="button"
                onClick={() => navigate(`/email-sent?email=${encodeURIComponent(email)}&sessionId=${encodeURIComponent(sessionId)}`)}
                className="text-[14px] text-[#4CAF50] font-['Noto_Sans_JP'] underline"
              >
                メールアドレスを入力し直す
              </button>
            </form>

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