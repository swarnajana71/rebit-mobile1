import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export const FooterSection = (): JSX.Element => {
  // Navigation items data for the footer
  const navigationItems = [
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19V10C4 9.68333 4.07083 9.38333 4.2125 9.1C4.35417 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C11.15 3.63333 11.55 3.5 12 3.5C12.45 3.5 12.85 3.63333 13.2 3.9L19.2 8.4C19.45 8.58333 19.6458 8.81667 19.7875 9.1C19.9292 9.38333 20 9.68333 20 10V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H15C14.7167 21 14.4792 20.9042 14.2875 20.7125C14.0958 20.5208 14 20.2833 14 20V15C14 14.7167 13.9042 14.4792 13.7125 14.2875C13.5208 14.0958 13.2833 14 13 14H11C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15V20C10 20.2833 9.90417 20.5208 9.7125 20.7125C9.52083 20.9042 9.28333 21 9 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19Z" fill="#162A39"/>
        </svg>
      `),
      label: "ホーム",
      position: "left",
      href: "/",
    },
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20V11C3.45 11 2.97917 10.8042 2.5875 10.4125C2.19583 10.0208 2 9.55 2 9V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H7.2C7.11667 4.85 7.0625 4.69167 7.0375 4.525C7.0125 4.35833 7 4.18333 7 4C7 3.16667 7.29167 2.45833 7.875 1.875C8.45833 1.29167 9.16667 1 10 1C10.3833 1 10.7417 1.07083 11.075 1.2125C11.4083 1.35417 11.7167 1.55 12 1.8C12.2833 1.53333 12.5917 1.33333 12.925 1.2C13.2583 1.06667 13.6167 1 14 1C14.8333 1 15.5417 1.29167 16.125 1.875C16.7083 2.45833 17 3.16667 17 4C17 4.18333 16.9833 4.35417 16.95 4.5125C16.9167 4.67083 16.8667 4.83333 16.8 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V9C22 9.55 21.8042 10.0208 21.4125 10.4125C21.0208 10.8042 20.55 11 20 11V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20ZM14 3C13.7167 3 13.4792 3.09583 13.2875 3.2875C13.0958 3.47917 13 3.71667 13 4C13 4.28333 13.0958 4.52083 13.2875 4.7125C13.4792 4.90417 13.7167 5 14 5C14.2833 5 14.5208 4.90417 14.7125 4.7125C14.9042 4.52083 15 4.28333 15 4C15 3.71667 14.9042 3.47917 14.7125 3.2875C14.5208 3.09583 14.2833 3 14 3ZM9 4C9 4.28333 9.09583 4.52083 9.2875 4.7125C9.47917 4.90417 9.71667 5 10 5C10.2833 5 10.5208 4.90417 10.7125 4.7125C10.9042 4.52083 11 4.28333 11 4C11 3.71667 10.9042 3.47917 10.7125 3.2875C10.5208 3.09583 10.2833 3 10 3C9.71667 3 9.47917 3.09583 9.2875 3.2875C9.09583 3.47917 9 3.71667 9 4ZM4 7V9H11V7H4ZM11 20V11H6V20H11ZM13 20H18V11H13V20ZM20 9V7H13V9H20Z" fill="#162A39"/>
        </svg>
      `),
      label: "チャレンジ",
      position: "left",
      href: "/challenge",
    },
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 21.325C11.7667 21.325 11.5333 21.2833 11.3 21.2C11.0667 21.1167 10.8583 20.9917 10.675 20.825C9.59167 19.825 8.63333 18.85 7.8 17.9C6.96667 16.95 6.27083 16.0292 5.7125 15.1375C5.15417 14.2458 4.72917 13.3875 4.4375 12.5625C4.14583 11.7375 4 10.95 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 10.95 19.8542 11.7375 19.5625 12.5625C19.2708 13.3875 18.8458 14.2458 18.2875 15.1375C17.7292 16.0292 17.0333 16.95 16.2 17.9C15.3667 18.85 14.4083 19.825 13.325 20.825C13.1417 20.9917 12.9333 21.1167 12.7 21.2C12.4667 21.2833 12.2333 21.325 12 21.325ZM12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12Z" fill="#162A39"/>
        </svg>
      `),
      label: "マップ",
      position: "right",
      href: "/map",
    },
    {
      icon: "data:image/svg+xml;base64," + btoa(`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_40000004_2149)">
            <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="#162A39"/>
          </g>
          <defs>
            <clipPath id="clip0_40000004_2149">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      `),
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
