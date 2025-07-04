import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const FooterSection = (): JSX.Element => {
  // Navigation items data for the footer
  const navigationItems = [
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#162a39"/>
        </svg>
      `),
      label: "ホーム",
      position: "left",
      href: "/",
    },
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM15 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="#162a39"/>
        </svg>
      `),
      label: "チャレンジ",
      position: "left",
      href: "/challenge",
    },
    {
      icon: "/figmaAssets/pin.svg",
      label: "マップ",
      position: "right",
      href: "/map",
    },
    {
      icon: "/figmaAssets/account.svg",
      label: "アカウント",
      position: "right",
      href: "/account",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex flex-col w-full items-start bg-transparent z-50">
      <div className="flex flex-col items-center justify-end p-2 relative self-stretch w-full flex-[0_0_auto] bg-white border-t [border-top-style:solid] border-[#e6e6e6]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          {/* Left side navigation items */}
          <div className="flex items-center gap-2 relative flex-1 grow">
            {navigationItems
              .filter((item) => item.position === "left")
              .map((item, index) => (
                <Link key={`nav-left-${index}`} href={item.href}>
                  <Button
                    variant="ghost"
                    className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto"
                  >
                    <div
                      className="w-6 h-6 bg-[100%_100%]"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      {item.label}
                    </div>
                  </Button>
                </Link>
              ))}
          </div>

          {/* Right side navigation items */}
          <div className="flex items-center justify-end gap-2 relative flex-1 grow">
            {navigationItems
              .filter((item) => item.position === "right")
              .map((item, index) => (
                <Link key={`nav-right-${index}`} href={item.href}>
                  <Button
                    variant="ghost"
                    className="flex flex-col w-16 items-center gap-0.5 relative p-0 h-auto"
                  >
                    <div
                      className="w-6 h-6 bg-[100%_100%]"
                      style={{ backgroundImage: `url(${item.icon})` }}
                    />
                    <div className="font-rebit-app-label-12px font-[number:var(--rebit-app-label-12px-font-weight)] text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] whitespace-nowrap relative w-fit text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] [font-style:var(--rebit-app-label-12px-font-style)]">
                      {item.label}
                    </div>
                  </Button>
                </Link>
              ))}
          </div>

          {/* Center QR code button */}
          <Link href="/qrcode">
            <Button className="flex flex-col w-16 h-16 items-center justify-center gap-0.5 pt-0 pb-1 px-0 absolute top-[-22px] left-1/2 transform -translate-x-1/2 bg-[#162a39] rounded-[47px]">
              <div className="w-6 h-6 bg-[url(/figmaAssets/qrcode.svg)] relative bg-[100%_100%]" />
              <div className="relative self-stretch font-med-12px font-[number:var(--med-12px-font-weight)] text-white text-[length:var(--med-12px-font-size)] text-center tracking-[var(--med-12px-letter-spacing)] leading-[var(--med-12px-line-height)] [font-style:var(--med-12px-font-style)]">
                QRコード
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative self-stretch w-full h-[34px] bg-white">
        <div className="relative w-36 h-[5px] mx-auto mt-5 bg-black rounded-[100px]" />
      </div>
    </footer>
  );
};
