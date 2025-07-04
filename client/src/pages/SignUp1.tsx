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
      // Use proxy endpoint to avoid mixed content issues
      const endpoint = "/api/proxy/register";
      
      console.log("Attempting registration via proxy to:", endpoint);
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
      
      // Check if it's an external API error and fallback to local storage
      if (error.message.includes("External API unavailable") || error.message.includes("503") || error.message.includes("HTML instead of JSON")) {
        console.log("External API unavailable, falling back to local storage");
        
        // Try local database storage instead
        apiRequest("POST", "/api/mobile/auth/register", { email, password }).then(() => {
          toast({
            title: "登録完了",
            description: "ローカルデータベースで登録が完了しました。",
            variant: "default",
          });
          setLocation("/signup2");
        }).catch((localError: any) => {
          console.error("Local registration also failed:", localError);
          toast({
            title: "登録エラー",
            description: "登録に失敗しました。もう一度お試しください。",
            variant: "destructive",
          });
        });
      } else {
        // Show error message for other errors
        toast({
          title: "エラー",
          description: error.message || "登録に失敗しました。",
          variant: "destructive",
        });
      }
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

  // Test external API connection
  const testConnection = async () => {
    try {
      console.log("=== Testing External API Connection ===");
      
      const testData = { email: "test@example.com", password: "test123" };
      const response = await fetch("/api/proxy/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(testData),
      });
      
      console.log("External API response status:", response.status);
      const responseText = await response.text();
      console.log("External API response:", responseText);
      
      if (response.ok) {
        const data = JSON.parse(responseText);
        toast({
          title: "外部API接続成功",
          description: `登録成功: ${data.message || "OK"}`,
        });
      } else {
        toast({
          title: "外部API接続エラー",
          description: `ステータス: ${response.status}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("External API test failed:", error);
      toast({
        title: "外部API接続エラー",
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