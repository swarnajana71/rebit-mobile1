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
            <button className="relative w-[358px] h-[48px] rounded-[24px] overflow-hidden flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <svg width="270" height="48" viewBox="0 0 270 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-full h-full">
                  <rect width="270" height="48" fill="url(#pattern0_2_8675)"/>
                  <defs>
                    <pattern id="pattern0_2_8675" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_2_8675" transform="scale(0.00174292 0.00980392)"/>
                    </pattern>
                    <image id="image0_2_8675" width="574" height="102" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj4AAABmCAYAAAG8d6uJAAAABGdBTUEAALGPC/xhBQAAQABJREFUeAHsHQdgFcVyXggtCT10BBQERHrvCgiKooJKUUCKNEUsgH7siA0UkSbSpEsVBUFUVBCQ3ntVKVKkQxI6yZ+Z3dm72/dCAlgQbyFv2/Sdndvdu3cvAJgmvVf+F8r9ZFkgEOgX+OydsgkPNW0LgUAAICEBsMA5lgBLQDml/2R/WGoIj49H7S+dNYZgq7BJlL3ESmKo/1T/pfMQfvFSPCTEn0G9A2wk8pq0RV7SJlLZ6a3vevqpNcFAK9O58W+c/hTBHpSAU6xymZvgx/FtcMYlQOTtPT0eRv1q4qFBsZ9ql1/4x8yXz36xFLMfQNz4X3vnFU5S3WYCRZjrk4pPOIhD6yWpCnL/pPcWfhPH7ZI5Pb0ecIZwGzFqfGsaOb5VRyZAF8vFD9VT3YITpcZxc+RGEhGTVBJp8WQCqn8LKF/yDxoEP6FDyYOsf9X+0Y8xhIq/3JeCzpfZpGhJRpKh8l+YgOGtHqf9W+cjY6/95TpDfJxn+Gmu7Tk5JEDfNuH4vfCv7SQKh+Jx3YkHIfY/FqJ/8LGQEcyHi84wCL94FfAfKF+PJK2wZyC/4hJQ4wQJYbM89J8vFIe/UHaGCf+dDj8v4hRPGcaH/pFCDdNqBQdKYRSGbcWMwBYFPhYd8MfhL8vYLVUQAXL4z+wUG5VDhGQ1DL8KMFrYfuBfcpVg/DZh+Iv1Y/VU/xD8BQog/LRvvYb/CH9JhOQ1DDdZgXhUGPzJRHVMqT9HCcRhY/9YT/P9I+fEJGZT8Y/1D0sKY/9YT/RPBT3fO8f4vf/L7XEo8hJ/5YEXp/rLBfzc6VcQIP8b6hKcHOqNQNOh8ePfKwShwBJfnUhT3pKXTBfD4+pOLJfePn14Ey7Lc/9k/wlz6QWH5eTICAkIfkIxuKB0kOF/FJ/9X8xLhJv8B9hc/eP+yYtlr5JfpJQ9aw/IyQ/5E/OhZM3r6X9pA8Q8OPff31z9qdl7DvWOJXvz2dRB+A8Z/8W8U5BFnXpDPDf8U1wvMXwGJUzJCd/6k/L0fvdXJ9kXDXULf1sWZl8nofpFJjX8z8bH5vOo9x9sP8gJ2X8xL3SInvJANw8xL8zBff/TxJBJz5y4FhzEGf9xMJP8DzpFRBYfqCR6+/A9K1M56L+avr4vvhQq+P6hJPF8if6JhiAG49z8n/+WB79z89/wvFq9aRD8A/0fZVrjHweH8vIz/R/3Xwy3yzJ4x9rQ/8kG/5X8uJxe+T9t6L/YPy7cOFUjPNfzn/Sg/1Qf8f2qLVqxn+c/9E/vYe+SgOa+f85BdQnpFH8/2TKnZCP/pvf6B/Sf8H/Y/05/z1L/SfqIvxUf/eRxzLUh5IPwH8W/bCU9Ef6A7/Pqn+s6l/y1wy0xhAR+wf45f9n1M2/oWGRCgvJF5MfqJ8cf6QNg/8o35IXlhqO/pf+5e0/8Pjy7S/8F9EGAz/jPpPfKkzyLQBvFNq1D9Z/e//WP+xjOSVo/6TZUzwH8U/GX8+/t/qhH7+P/ZP93VQj6/4i/Rq/1Zd8nT49k0xWBi/lrWe3/LL0/gk6Rh/Hdfvp+g/yv9k/cTnR9k8g7/H+W6w/8fZRlqC/q/Wc2N/t+w/1gE/8T+A/vHXGgOBwJ8gv/v6Kn/v41D/ZiP/W+fA/6z6p8Y/q4FJh9pD1zONX/y2L8W//5Zt+kHh+K+Nwz3Y8+w/Wgqr8Y/wL8mJvp6P/I8mTDn6a9zz/VlCTc/5uv8x/4vz3aQfJxCFj/w8FIQ=="/>
                  </defs>
                </svg>
              </div>
            </button>

            {/* Button 3 - Placeholder */}
            <div className="w-[358px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
              <span className="text-gray-500 font-['Noto_Sans_JP'] text-[14px]">Button 3 (準備中)</span>
            </div>

            {/* Button 4 - Placeholder */}
            <div className="w-[358px] h-[48px] bg-gray-200 rounded-[24px] flex items-center justify-center">
              <span className="text-gray-500 font-['Noto_Sans_JP'] text-[14px]">Button 4 (準備中)</span>
            </div>
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