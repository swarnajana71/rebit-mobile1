import { Link, useLocation } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export const SignUp1 = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const API_BASE = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
      const endpoint = `${API_BASE}/api/mobile/auth/register`;
      
      console.log("Attempting registration to:", endpoint);
      console.log("Data:", data);
      
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          mode: "cors",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data),
        });
        
        console.log("Response status:", response.status);
        console.log("Response headers:", Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          const errorText = await response.text();
          console.log("Error response:", errorText);
          let errorData: any = {};
          try {
            errorData = JSON.parse(errorText);
          } catch (e) {
            console.log("Could not parse error as JSON");
          }
          throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log("Success response:", result);
        return result;
      } catch (error: unknown) {
        console.error("Registration error:", error);
        if (error instanceof Error) {
          console.log("Error name:", error.name);
          console.log("Error message:", error.message);
          
          if (error.name === 'TypeError' && (error.message.includes('fetch') || error.message.includes('CORS'))) {
            throw new Error("ネットワークエラー: 管理サーバーに接続できません。CORSまたはネットワーク問題が発生しています。");
          }
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
      toast({
        title: "エラー",
        description: error.message || "登録に失敗しました。",
        variant: "destructive",
      });
    },
  });

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
    registerMutation.mutate({ email, password });
  };

  // Test API connection with multiple methods
  const testConnection = async () => {
    const API_BASE = "https://4e475e40-746c-4b88-8374-64ada12b3caa-00-12lsasagarlm3.worf.replit.dev";
    
    // Test 1: Basic connectivity
    try {
      console.log("=== Testing API Connectivity ===");
      console.log("API Base URL:", API_BASE);
      
      // Test the base URL first
      console.log("Testing base URL...");
      const baseResponse = await fetch(API_BASE, { method: "GET" });
      console.log("Base URL response:", baseResponse.status, baseResponse.statusText);
    } catch (error) {
      console.error("Base URL test failed:", error);
    }

    // Test 2: Registration endpoint with OPTIONS
    try {
      console.log("Testing registration endpoint with OPTIONS...");
      const optionsResponse = await fetch(`${API_BASE}/api/mobile/auth/register`, {
        method: "OPTIONS",
        headers: {
          "Origin": window.location.origin,
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "Content-Type"
        }
      });
      console.log("OPTIONS response:", optionsResponse.status, optionsResponse.statusText);
      console.log("CORS headers:", Object.fromEntries(optionsResponse.headers.entries()));
    } catch (error) {
      console.error("OPTIONS test failed:", error);
    }

    // Test 3: Actual POST test with minimal data
    try {
      console.log("Testing POST with test data...");
      const testData = { email: "test@test.com", password: "test123" };
      const postResponse = await fetch(`${API_BASE}/api/mobile/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(testData),
      });
      console.log("POST response status:", postResponse.status);
      console.log("POST response headers:", Object.fromEntries(postResponse.headers.entries()));
      
      const responseText = await postResponse.text();
      console.log("POST response body:", responseText);
      
      toast({
        title: "API テスト完了",
        description: `POST ステータス: ${postResponse.status}`,
      });
    } catch (error) {
      console.error("POST test failed:", error);
      toast({
        title: "API接続エラー",
        description: `エラー: ${error instanceof Error ? error.message : "Unknown error"}`,
        variant: "destructive",
      });
    }
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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="example@email.com"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#162A39] font-['Noto_Sans_JP'] text-[14px] font-medium">
                パスワード
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[#E6E6E6] rounded-lg h-[48px] px-4 font-['Noto_Sans_JP'] text-[14px] focus:border-[#148176] focus:outline-none"
                placeholder="パスワードを入力"
                required
              />
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

            {/* Test Connection Button - Debug */}
            <button
              type="button"
              onClick={testConnection}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded text-sm mb-2"
            >
              接続テスト (Debug)
            </button>

            {/* Register Button */}
            <button
              type="submit"
              disabled={registerMutation.isPending}
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
                  {registerMutation.isPending ? "登録中..." : "会員登録する"}
                </span>
              </div>
            </button>

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