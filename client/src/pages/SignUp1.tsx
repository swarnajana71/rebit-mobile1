import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export const SignUp1 = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      // Use direct endpoint since this IS the admin dashboard
      const endpoint = "/api/mobile/auth/register";
      
      console.log("Attempting registration directly to:", endpoint);
      console.log("Data:", data);
      
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data),
        });
        
        console.log("Proxy response status:", response.status);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.log("Proxy error response:", errorData);
          throw new Error(errorData.message || `HTTP ${response.status}: Registration failed`);
        }
        
        const result = await response.json();
        console.log("Registration success:", result);
        return result;
      } catch (error: unknown) {
        console.error("Registration error:", error);
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("予期しないエラーが発生しました");
      }
    },
    onSuccess: (response) => {
      toast({
        title: "登録完了",
        description: "会員登録が完了しました。",
      });
      // Navigate to success page or sign in
      setLocation("/signup2");
    },
    onError: (error: Error) => {
      console.log("Registration error details:", error.message);
      toast({
        title: "登録エラー",
        description: error.message || "登録に失敗しました。もう一度お試しください。",
        variant: "destructive",
      });
    },
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "入力エラー",
        description: "メールアドレスとパスワードを入力してください。",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "メールアドレスエラー",
        description: "正しいメールアドレスを入力してください。",
        variant: "destructive",
      });
      return;
    }

    if (!validatePassword(password)) {
      toast({
        title: "パスワードエラー",
        description: "パスワードは6文字以上で入力してください。",
        variant: "destructive",
      });
      return;
    }

    registerMutation.mutate({ email, password });
  };



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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[358px]">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                メールアドレス
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border rounded-lg h-[48px] px-4 pr-12 font-['Noto_Sans_JP'] text-[14px] focus:outline-none w-full transition-colors ${
                    email && !validateEmail(email) 
                      ? "border-red-400 bg-red-50 focus:border-red-500" 
                      : email && validateEmail(email)
                      ? "border-green-400 bg-green-50 focus:border-green-500"
                      : "border-[#E6E6E6] focus:border-[#148176]"
                  }`}
                  placeholder="example@email.com"
                  required
                />
                {email && validateEmail(email) && (
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {email && !validateEmail(email) && (
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              {email && !validateEmail(email) && (
                <p className="text-red-500 text-xs font-['Noto_Sans_JP']">
                  正しいメールアドレスを入力してください
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                パスワード
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`border rounded-lg h-[48px] px-4 pr-12 font-['Noto_Sans_JP'] text-[14px] focus:outline-none w-full transition-colors ${
                    password && !validatePassword(password)
                      ? "border-red-400 bg-red-50 focus:border-red-500"
                      : password && validatePassword(password)
                      ? "border-green-400 bg-green-50 focus:border-green-500"
                      : "border-[#E6E6E6] focus:border-[#148176]"
                  }`}
                  placeholder="6文字以上のパスワード"
                  required
                />
                {password && validatePassword(password) && (
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {password && !validatePassword(password) && (
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              {password && !validatePassword(password) && (
                <p className="text-red-500 text-xs font-['Noto_Sans_JP']">
                  パスワードは6文字以上で入力してください
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-[#148176]"
                required
              />
              <p className="text-[#162A39] font-['Noto_Sans_JP'] text-[12px] leading-relaxed">
                <Link href="/terms" className="text-[#148176] underline">利用規約</Link>
                及び
                <Link href="/privacy" className="text-[#148176] underline">プライバシーポリシー</Link>
                に同意します
              </p>
            </div>



            {/* Register Button */}
            <Link href="/signup2">
              <button
                type="button"
                className="relative w-[240px] h-[54px] rounded-[27px] overflow-hidden mx-auto mt-6"
              >
                <svg width="240" height="54" viewBox="0 0 240 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="240" height="54" rx="27" fill="url(#paint0_linear_1_1)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1_1" x1="0" y1="0" x2="240" y2="54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#148176"/>
                      <stop offset="1" stopColor="#77C6BE"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-['Noto_Sans_JP'] text-[16px] font-medium">
                    会員登録する
                  </span>
                </div>
              </button>
            </Link>

            {/* Login Link */}
            <div className="relative w-[240px] h-[54px] rounded-[27px] overflow-hidden mx-auto mt-4">
              <svg width="240" height="54" viewBox="0 0 240 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="240" height="54" rx="27" fill="white" stroke="url(#paint0_linear_2_2)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="paint0_linear_2_2" x1="0" y1="0" x2="240" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2B988D"/>
                    <stop offset="1" stopColor="#A4E0D9"/>
                  </linearGradient>
                </defs>
              </svg>
              <Link href="/signin" className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#148176] font-['Noto_Sans_JP'] text-[16px] font-medium">
                  ログイン
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};