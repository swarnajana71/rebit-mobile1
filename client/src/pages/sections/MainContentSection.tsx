import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      icon: "/figmaAssets/mail.svg",
      label: "送る",
    },
    {
      id: 2,
      icon: "/figmaAssets/change.svg",
      label: "交換",
    },
    {
      id: 3,
      icon: "/figmaAssets/history.svg",
      label: "履歴",
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
    <div className="flex flex-col w-full items-start gap-2">
      <header className="flex h-11 items-center justify-end pl-4 pr-0 py-2 relative self-stretch w-full bg-white">
        <div className="absolute w-[42px] h-7 top-2 left-1/2 -translate-x-1/2 bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />

        <Button
          variant="ghost"
          className="gap-0.5 px-2 py-3 h-auto inline-flex items-center"
        >
          <span className="font-rebit-app-label-12px text-[#475a69] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] tracking-[var(--rebit-app-label-12px-letter-spacing)] whitespace-nowrap">
            会員ランクとは
          </span>
          <div className="relative w-5 h-5 bg-[url(/figmaAssets/help.svg)] bg-[100%_100%]" />
        </Button>
      </header>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center w-full">
          <Card className="w-full mx-4 z-[1] rounded-lg overflow-hidden shadow-rebit-app-shadow-card bg-[linear-gradient(270deg,rgba(234,227,200,1)_0%,rgba(218,210,157,1)_100%)] border-0">
            <CardContent className="flex flex-col items-start gap-3 p-0">
              <div className="flex items-center gap-2 pl-6 pr-4 py-4 w-full">
                <div className="flex items-center gap-1 flex-1">
                  <span className="font-rebit-app-body-16px-bold text-[#162a39] text-[length:var(--rebit-app-body-16px-bold-font-size)] tracking-[var(--rebit-app-body-16px-bold-letter-spacing)] leading-[var(--rebit-app-body-16px-bold-line-height)] whitespace-nowrap">
                    Hirota
                  </span>
                  <span className="font-rebit-app-body-16px-bold text-[#162a39] text-[length:var(--rebit-app-body-16px-bold-font-size)] tracking-[var(--rebit-app-body-16px-bold-letter-spacing)] leading-[var(--rebit-app-body-16px-bold-line-height)] whitespace-nowrap">
                    さん
                  </span>
                </div>

                <Badge className="h-8 gap-2 pl-3 pr-2 py-2 bg-white rounded-2xl flex items-center">
                  <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                    会員ランク
                  </span>
                  <div className="flex items-center gap-0.5">
                    <span className="font-rebit-app-body-12px-med text-[#776907] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                      Seed
                    </span>
                    <div className="w-5 h-5 bg-[url(/figmaAssets/seed.svg)] bg-[100%_100%]" />
                  </div>
                </Badge>
              </div>

              <div className="flex flex-col items-start gap-3 px-6 pb-4 w-full">
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex items-center gap-4 w-full">
                    <span className="font-rebit-app-body-14px-med text-[#162a39] text-[length:var(--rebit-app-body-14px-med-font-size)] leading-[var(--rebit-app-body-14px-med-line-height)] tracking-[var(--rebit-app-body-14px-med-letter-spacing)] whitespace-nowrap">
                      ReBitポイント残高
                    </span>
                    <div className="flex items-end justify-end gap-2 flex-1">
                      <span className="flex-1 font-rebit-app-number-l text-[#162a39] text-[length:var(--rebit-app-number-l-font-size)] leading-[var(--rebit-app-number-l-line-height)] tracking-[var(--rebit-app-number-l-letter-spacing)] text-right overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                        100
                      </span>
                      <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                        pt
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                      円換算
                    </span>
                    <div className="inline-flex items-end gap-2">
                      <span className="font-rebit-app-number-m text-[#162a39] text-[length:var(--rebit-app-number-m-font-size)] leading-[var(--rebit-app-number-m-line-height)] tracking-[var(--rebit-app-number-m-letter-spacing)] text-right whitespace-nowrap">
                        10
                      </span>
                      <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                        円
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full">
                  <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                    CO2削減量
                  </span>
                  <div className="inline-flex items-end gap-2">
                    <span className="font-rebit-app-number-m text-[#162a39] text-[length:var(--rebit-app-number-m-font-size)] leading-[var(--rebit-app-number-m-line-height)] tracking-[var(--rebit-app-number-m-letter-spacing)] text-right whitespace-nowrap">
                      -5
                    </span>
                    <span className="font-rebit-app-body-12px-med text-[#162a39] text-[length:var(--rebit-app-body-12px-med-font-size)] leading-[var(--rebit-app-body-12px-med-line-height)] tracking-[var(--rebit-app-body-12px-med-letter-spacing)] whitespace-nowrap">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-10 pt-16 pb-6 px-4 w-full -mt-10 z-0 bg-[#e6eaed]">
            {actionButtons.map((button) => (
              <Button
                key={button.id}
                variant="outline"
                className="flex flex-col w-20 h-20 items-center justify-center gap-0.5 pt-3.5 pb-[18px] px-0 bg-white rounded-[40px] overflow-hidden shadow-rebit-app-shadow-button-secondary"
              >
                <div className="w-8 h-8 bg-[url(${button.icon})] bg-[100%_100%]" />
                <span className="font-rebit-app-label-12px text-[#162a39] text-[length:var(--rebit-app-label-12px-font-size)] leading-[var(--rebit-app-label-12px-line-height)] text-center tracking-[var(--rebit-app-label-12px-letter-spacing)] whitespace-nowrap">
                  {button.label}
                </span>
              </Button>
            ))}
          </div>
        </div>

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
