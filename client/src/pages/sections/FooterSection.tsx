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
          <path d="M12 12C10.35 12 8.9375 11.4125 7.7625 10.2375C6.5875 9.0625 6 7.65 6 6C6 4.35 6.5875 2.9375 7.7625 1.7625C8.9375 0.5875 10.35 0 12 0C13.65 0 15.0625 0.5875 16.2375 1.7625C17.4125 2.9375 18 4.35 18 6C18 7.65 17.4125 9.0625 16.2375 10.2375C15.0625 11.4125 13.65 12 12 12ZM0 21V19.8C0 18.95 0.21875 18.1688 0.65625 17.4563C1.09375 16.7437 1.675 16.2 2.4 16.825C3.95 15.05 5.525 14.4688 7.125 14.0813C8.725 13.6938 10.35 13.5 12 13.5C13.65 13.5 15.275 13.6938 16.875 14.0813C18.475 14.4688 20.05 15.05 21.6 16.825C22.325 16.2 22.9063 16.7437 23.3438 17.4563C23.7813 18.1688 24 18.95 24 19.8V21C24 21.825 23.7063 22.5313 23.1188 23.1188C22.5313 23.7063 21.825 24 21 24H3C2.175 24 1.46875 23.7063 0.88125 23.1188C0.29375 22.5313 0 21.825 0 21ZM3 21H21V19.8C21 19.525 20.9313 19.275 20.7938 19.05C20.6563 18.825 20.475 18.65 20.25 18.525C18.9 18.35 17.5375 18.8438 16.1625 18.0063C14.7875 17.1688 13.4 16.5 12 16.5C10.6 16.5 9.2125 17.1688 7.8375 18.0063C6.4625 18.8438 5.1 18.35 3.75 18.525C3.525 18.65 3.34375 18.825 3.20625 19.05C3.06875 19.275 3 19.525 3 19.8V21ZM12 9C12.825 9 13.5313 8.70625 14.1188 8.11875C14.7063 7.53125 15 6.825 15 6C15 5.175 14.7063 4.46875 14.1188 3.88125C13.5313 3.29375 12.825 3 12 3C11.175 3 10.4688 3.29375 9.88125 3.88125C9.29375 4.46875 9 5.175 9 6C9 6.825 9.29375 7.53125 9.88125 8.11875C10.4688 8.70625 11.175 9 12 9Z" fill="#162A39"/>
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
