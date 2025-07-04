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
          <path d="M12 2L13.09 5.26L16 2L14.91 5.26L18 4L16.91 7.26L20 6L18.91 9.26L22 8L20.91 11.26L24 10L22.91 13.26L24 14L20.91 15.26L22 16L18.91 17.26L20 18L16.91 19.26L18 20L14.91 21.26L16 22L13.09 21.26L12 24L10.91 21.26L8 22L9.09 19.26L6 20L7.09 17.26L4 18L5.09 15.26L2 16L3.09 13.26L0 14L1.09 11.26L0 10L3.09 9.26L2 8L5.09 7.26L4 6L7.09 5.26L6 4L9.09 5.26L8 2L10.91 5.26L12 2Z" fill="#162a39"/>
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
