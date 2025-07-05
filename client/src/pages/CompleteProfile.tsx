import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export const CompleteProfile = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  // Get email from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email') || '';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast({
        title: "入力エラー",
        description: "名前を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.lastName.trim()) {
      toast({
        title: "入力エラー",
        description: "姓を入力してください",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.mobile.trim()) {
      toast({
        title: "入力エラー",
        description: "携帯電話番号を入力してください",
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
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "入力エラー",
        description: "パスワードが一致しません",
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
      firstName: formData.firstName,
      lastName: formData.lastName,
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
            onClick={() => navigate(`/code-confirmed?email=${encodeURIComponent(email)}`)}
            className="p-2 -ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-[17px] font-medium text-black font-['Noto_Sans_JP']">プロフィール完成</h1>
          </div>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="px-4 py-8 flex flex-col items-center">
          <div className="w-full max-w-[358px]">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-[20px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                プロフィールを完成させる
              </h2>
              <p className="text-[14px] text-gray-600 font-['Noto_Sans_JP']">
                アカウントを作成するために<br />
                必要な情報を入力してください
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  名前　必須
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder="太郎"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  姓　必須
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder="田中"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  携帯電話番号　必須
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder="090-1234-5678"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  パスワード　必須
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder="6文字以上"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[14px] font-medium text-black font-['Noto_Sans_JP'] mb-2">
                  パスワード確認　必須
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-lg font-['Noto_Sans_JP'] text-[16px] focus:outline-none focus:border-[#4CAF50]"
                  placeholder="パスワードを再入力"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={completeRegistrationMutation.isPending}
                  className="w-full h-[50px] bg-[#4CAF50] text-white rounded-lg font-['Noto_Sans_JP'] text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {completeRegistrationMutation.isPending ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>登録中...</span>
                    </div>
                  ) : (
                    "登録を完了する"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};