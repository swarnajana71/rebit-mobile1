import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export const CompleteProfile = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  // Get email and sessionId from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email') || '';
  const sessionId = urlParams.get('sessionId') || '';
  
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    mobile: '',
    password: ''
  });

  const validateForm = () => {
    if (!formData.lastName.trim()) {
      toast({
        title: "入力エラー",
        description: "姓を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.firstName.trim()) {
      toast({
        title: "入力エラー",
        description: "名を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.lastNameKana.trim()) {
      toast({
        title: "入力エラー",
        description: "姓（カナ）を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.firstNameKana.trim()) {
      toast({
        title: "入力エラー",
        description: "名（カナ）を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.mobile.trim()) {
      toast({
        title: "入力エラー",
        description: "電話番号を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (formData.password.length < 6) {
      toast({
        title: "入力エラー",
        description: "パスワードは6文字以上で入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const completeRegistrationMutation = useMutation({
    mutationFn: async (data: any) => {
      console.log("=== Completing Registration ===");
      console.log("Data:", data);
      
      try {
        const response = await fetch("/api/mobile/auth/complete-registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || "登録の完了に失敗しました");
        }
        
        return await response.json();
      } catch (error) {
        console.error("Complete registration error:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Registration completed:", data);
      toast({
        title: "登録完了",
        description: "会員登録が完了しました",
      });
      // Navigate to success page or home
      navigate('/');
    },
    onError: (error: Error) => {
      console.error("Registration completion failed:", error);
      
      toast({
        title: "登録エラー",
        description: error.message || "登録の完了に失敗しました",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    completeRegistrationMutation.mutate({
      email,
      sessionId,
      lastName: formData.lastName,
      firstName: formData.firstName,
      lastNameKana: formData.lastNameKana,
      firstNameKana: formData.firstNameKana,
      mobile: formData.mobile,
      password: formData.password
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white w-full min-h-screen flex justify-center">
      <div className="bg-white w-[390px] relative">
        {/* Header */}
        <div className="px-4 py-4 flex items-center border-b border-gray-200">
          <button 
            onClick={() => navigate(`/code-confirmed?email=${encodeURIComponent(email)}&sessionId=${encodeURIComponent(sessionId)}`)}
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
          <div className="w-full max-w-[358px]">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-[20px] font-medium text-black font-['Noto_Sans_JP']">
                会員情報を登録
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Last Name and First Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                    姓　<span className="text-red-500">必須</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                    名　<span className="text-red-500">必須</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                    required
                  />
                </div>
              </div>

              {/* Last Name Kana and First Name Kana Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                    姓（カナ）　<span className="text-red-500">必須</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastNameKana}
                    onChange={(e) => handleInputChange('lastNameKana', e.target.value)}
                    className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                    名（カナ）　<span className="text-red-500">必須</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstNameKana}
                    onChange={(e) => handleInputChange('firstNameKana', e.target.value)}
                    className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  電話番号　<span className="text-red-500">必須</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  パスワード　<span className="text-red-500">必須</span>
                </label>
                <p className="text-[12px] text-gray-500 font-['Noto_Sans_JP'] mb-2">
                  6文字以上の半角英数字でご指定ください
                </p>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#148176]"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={completeRegistrationMutation.isPending}
                  className="relative w-[240px] h-[48px] rounded-[24px] overflow-hidden"
                >
                  <svg width="240" height="48" viewBox="0 0 240 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <rect width="240" height="48" rx="24" fill="url(#paint0_linear_2_10500)"/>
                    <defs>
                      <linearGradient id="paint0_linear_2_10500" x1="0" y1="24" x2="240" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#148176"/>
                        <stop offset="1" stopColor="#77C6BE"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {completeRegistrationMutation.isPending ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-white font-['Noto_Sans_JP'] text-[16px] font-medium">登録中...</span>
                      </div>
                    ) : (
                      <span className="text-white font-['Noto_Sans_JP'] text-[16px] font-medium">登録する</span>
                    )}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};