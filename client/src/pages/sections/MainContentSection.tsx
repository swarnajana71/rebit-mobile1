import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import IconArea from "@/components/IconArea";
import Vector from "@/components/Vector";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export const MainContentSection = (): JSX.Element => {
  // Data for campaign banners
  const campaignBanners = [
    {
      id: 1,
      text: "XXXキャンペーン開催中！ピザ購入で500円引き！",
    },
    {
      id: 2,
      text: "XXXキャンペーン開催中！ピザ購入で500円引き！",
    },
    {
      id: 3,
      text: "XXXキャンペーン開催中！ピザ購入で500円引き！",
    },
    {
      id: 4,
      text: "XXXキャンペーン開催中！ピザ購入で500円引き！",
    },
  ];

  // Data for action buttons
  const actionButtons = [
    {
      id: 1,
      label: "送る",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33268 26.6668C4.59935 26.6668 3.97157 26.4057 3.44935 25.8835C2.92713 25.3613 2.66602 24.7335 2.66602 24.0002V8.00016C2.66602 7.26683 2.92713 6.63905 3.44935 6.11683C3.97157 5.59461 4.59935 5.3335 5.33268 5.3335H26.666C27.3994 5.3335 28.0271 5.59461 28.5494 6.11683C29.0716 6.63905 29.3327 7.26683 29.3327 8.00016V24.0002C29.3327 24.7335 29.0716 25.3613 28.5494 25.8835C28.0271 26.4057 27.3994 26.6668 26.666 26.6668H5.33268ZM26.666 10.6668L16.6994 16.9002C16.5882 16.9668 16.4716 17.0168 16.3494 17.0502C16.2271 17.0835 16.1105 17.1002 15.9994 17.1002C15.8882 17.1002 15.7716 17.0835 15.6494 17.0502C15.5271 17.0168 15.4105 16.9668 15.2994 16.9002L5.33268 10.6668V24.0002H26.666V10.6668ZM15.9994 14.6668L26.666 8.00016H5.33268L15.9994 14.6668ZM5.33268 11.0002V9.03349V9.06683V9.05016V11.0002Z" fill="#162A39" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "交換",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3333 13.3333H8L10.6667 10.6667L9.33333 9.33333L4.66667 14L9.33333 18.6667L10.6667 17.3333L8 14.6667H21.3333V13.3333Z" fill="#162A39"/>
          <path d="M10.6667 18.6667H24L21.3333 21.3333L22.6667 22.6667L27.3333 18L22.6667 13.3333L21.3333 14.6667L24 17.3333H10.6667V18.6667Z" fill="#162A39"/>
        </svg>
      ),
    },
    {
      id: 3,
      label: "履歴",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2.66667C8.63621 2.66667 2.66667 8.63621 2.66667 16C2.66667 23.3638 8.63621 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66667 16 2.66667ZM16 26.6667C10.1167 26.6667 5.33333 21.8833 5.33333 16C5.33333 10.1167 10.1167 5.33333 16 5.33333C21.8833 5.33333 26.6667 10.1167 26.6667 16C26.6667 21.8833 21.8833 26.6667 16 26.6667Z" fill="#162A39"/>
          <path d="M16 8V16L21.3333 21.3333L22.6667 20L18 15.3333V8H16Z" fill="#162A39"/>
        </svg>
      ),
    },
  ];

  // Data for PR banners
  const prBanners = [
    {
      id: 1,
      label: "（PRバナー画像）",
    },
    {
      id: 2,
      label: "（PRバナー画像）",
    },
    {
      id: 3,
      label: "（バナー画像）",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-2 pb-32">
      <header className="flex h-11 items-center justify-end pl-4 pr-0 py-2 relative self-stretch w-full bg-white">
        <div className="absolute w-[42px] h-7 top-2 left-1/2 -translate-x-1/2 bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />

        <Link href="/help">
          <Button
            variant="ghost"
            className="gap-0.5 px-2 py-3 h-auto inline-flex items-center"
          >
            <span className="font-rebit-app-label-12px text-[#475a69] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] tracking-[var(--rebit-app-label-12px-letter-spacing)] whitespace-nowrap">
              会員ランクとは
            </span>
            <div className="relative w-5 h-5 bg-[url(/figmaAssets/help.svg)] bg-[100%_100%]" />
          </Button>
        </Link>
      </header>

      <div className="flex flex-col items-center gap-6 w-full">
        <Layout />

        <section className="flex flex-col items-start gap-2 px-4 py-0 w-full">
          <h2 className="w-full font-rebit-app-heading-14px text-[#162a39] text-[length:var(--rebit-app-heading-14px-font-size)] tracking-[var(--rebit-app-heading-14px-letter-spacing)] leading-[var(--rebit-app-heading-14px-line-height)]">
            キャンペーン
          </h2>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-2 w-full">
              {campaignBanners.slice(0, 2).map((banner) => (
                <div
                  key={banner.id}
                  className="flex flex-col items-start gap-2 flex-1"
                >
                  <div className="h-[98px] w-full flex items-center justify-center gap-2 px-[21px] py-[34px] bg-[#d9d9d9]">
                    <span className="[font-family:'Hiragino_Kaku_Gothic_Pro-W6',Helvetica] font-normal text-[#959595] text-sm leading-[normal] text-center tracking-[0]">
                      （バナー画像）
                    </span>
                  </div>
                  <p className="w-full font-rebit-app-body-14px-med text-[#162a39] text-[length:var(--rebit-app-body-14px-med-font-size)] tracking-[var(--rebit-app-body-14px-med-letter-spacing)] leading-[var(--rebit-app-body-14px-med-line-height)]">
                    {banner.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 w-full">
              {campaignBanners.slice(2, 4).map((banner) => (
                <div
                  key={banner.id}
                  className="flex flex-col items-start gap-2 flex-1"
                >
                  <div className="h-[98px] w-full flex items-center justify-center gap-2 px-[21px] py-[34px] bg-[#d9d9d9]">
                    <span className="[font-family:'Hiragino_Kaku_Gothic_Pro-W6',Helvetica] font-normal text-[#959595] text-sm leading-[normal] text-center tracking-[0]">
                      （バナー画像）
                    </span>
                  </div>
                  <p className="w-full font-rebit-app-body-14px-med text-[#162a39] text-[length:var(--rebit-app-body-14px-med-font-size)] tracking-[var(--rebit-app-body-14px-med-letter-spacing)] leading-[var(--rebit-app-body-14px-med-line-height)]">
                    {banner.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start gap-2 pl-4 pr-0 py-0 w-full">
          <h2 className="w-full font-rebit-app-heading-14px text-[#162a39] text-[length:var(--rebit-app-heading-14px-font-size)] tracking-[var(--rebit-app-heading-14px-letter-spacing)] leading-[var(--rebit-app-heading-14px-line-height)]">
            PR
          </h2>

          <div className="flex items-center gap-2 w-full overflow-x-auto">
            {prBanners.map((banner) => (
              <div
                key={banner.id}
                className="w-40 h-[90px] flex-shrink-0 flex items-center justify-center gap-2 px-[21px] py-[34px] bg-[#d9d9d9]"
              >
                <span className="[font-family:'Hiragino_Kaku_Gothic_Pro-W6',Helvetica] font-normal text-[#959595] text-sm leading-[normal] text-center tracking-[0]">
                  {banner.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
