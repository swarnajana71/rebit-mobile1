import "./index.css";

function StatusBar() {
  return (
    <div className="w-[390px] h-[47px] bg-black flex items-center justify-between px-[21px] py-[15px] text-white">
      {/* Left side - Time */}
      <div className="text-[15px] font-semibold leading-[20px] tracking-[-0.24px]">
        9:41
      </div>
      
      {/* Right side - Status icons */}
      <div className="flex items-center gap-[5px]">
        {/* Signal bars */}
        <div className="flex items-end gap-[2px]">
          <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
          <div className="w-[3px] h-[5px] bg-white rounded-[1px]"></div>
          <div className="w-[3px] h-[7px] bg-white rounded-[1px]"></div>
          <div className="w-[3px] h-[9px] bg-white rounded-[1px]"></div>
        </div>
        
        {/* WiFi icon */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M0.5 5.5C0.5 5.5 3.5 1.5 7.5 1.5C11.5 1.5 14.5 5.5 14.5 5.5" stroke="white" strokeWidth="1"/>
          <path d="M2.5 7.5C2.5 7.5 4.5 5.5 7.5 5.5C10.5 5.5 12.5 7.5 12.5 7.5" stroke="white" strokeWidth="1"/>
          <path d="M4.5 9.5C4.5 9.5 5.5 8.5 7.5 8.5C9.5 8.5 10.5 9.5 10.5 9.5" stroke="white" strokeWidth="1"/>
          <circle cx="7.5" cy="10.5" r="0.5" fill="white"/>
        </svg>
        
        {/* Battery icon */}
        <div className="flex items-center">
          <div className="w-[24px] h-[11px] border border-white rounded-[2px] relative">
            <div className="w-[18px] h-[7px] bg-white rounded-[1px] absolute top-[1px] left-[1px]"></div>
          </div>
          <div className="w-[1px] h-[4px] bg-white rounded-r-[1px] ml-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <StatusBar />
    </div>
  );
}

export default App;