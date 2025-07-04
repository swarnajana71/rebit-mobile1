import React from 'react';
import { Link } from 'wouter';
import { FooterSection } from './sections/FooterSection';
import styles from '../styles/Challenge.module.css';

export const Challenge = (): JSX.Element => {
  const statusBarItems = [
    {
      type: "text",
      content: "9:41",
      className:
        "w-fit [font-family:'SF_Pro-Semibold',Helvetica] font-semibold text-black text-[17px] text-center tracking-[-0.4px] leading-[22px] whitespace-nowrap",
    },
    {
      type: "cellular",
      className: "w-[17px] h-[11px]",
    },
    {
      type: "wifi",
      className: "w-[15px] h-[11px]",
    },
    {
      type: "battery",
      className: "w-[24px] h-[11px]",
    },
  ];

  return (
    <div className={styles.challengeContainer}>
      {/* Status Bar and Header */}
      <header className="flex flex-col w-full items-start pt-4 pb-0 px-0 sticky top-0 left-0 bg-white z-10">
        <div className="items-center justify-between flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[120px] items-center justify-center pl-6 pr-4 py-0 relative">
            <div className={statusBarItems[0].className}>
              {statusBarItems[0].content}
            </div>
          </div>

          <div className="flex w-[120px] items-center justify-end gap-1 pl-4 pr-6 py-0 relative">
            {/* Cellular Signal */}
            <div className={statusBarItems[1].className}>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
                <rect x="0" y="8" width="2" height="3" rx="1" fill="black"/>
                <rect x="3" y="6" width="2" height="5" rx="1" fill="black"/>
                <rect x="6" y="4" width="2" height="7" rx="1" fill="black"/>
                <rect x="9" y="2" width="2" height="9" rx="1" fill="black"/>
              </svg>
            </div>

            {/* WiFi Signal */}
            <div className={statusBarItems[2].className}>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path d="M7.5 2C10.54 2 13.02 3.02 13.02 3.02L12.25 4.14C12.25 4.14 10.29 3.29 7.5 3.29C4.71 3.29 2.75 4.14 2.75 4.14L1.98 3.02C1.98 3.02 4.46 2 7.5 2Z" fill="black"/>
                <path d="M7.5 5C9.36 5 10.95 5.75 10.95 5.75L10.18 6.86C10.18 6.86 8.95 6.29 7.5 6.29C6.05 6.29 4.82 6.86 4.82 6.86L4.05 5.75C4.05 5.75 5.64 5 7.5 5Z" fill="black"/>
                <path d="M7.5 8C8.18 8 8.77 8.25 8.77 8.25L8 9.36C8 9.36 7.68 9.29 7.5 9.29C7.32 9.29 7 9.36 7 9.36L6.23 8.25C6.23 8.25 6.82 8 7.5 8Z" fill="black"/>
              </svg>
            </div>

            {/* Battery */}
            <div className={statusBarItems[3].className}>
              <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                <rect x="0" y="2" width="20" height="7" rx="2" stroke="black" strokeWidth="1" fill="none"/>
                <rect x="1.5" y="3.5" width="17" height="4" rx="0.5" fill="black"/>
                <rect x="21" y="4.5" width="2" height="2" rx="1" fill="black"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Header with Logo */}
        <div className="bg-white w-full flex justify-center items-center h-[44px] px-4 relative">
          {/* Centered Logo */}
          <div className="w-[42px] h-7 bg-[url(/figmaAssets/logo.png)] bg-[100%_100%]" />
        </div>
      </header>
      
      <div className={styles.challengeContent}>
        <div className={styles.challengeHeader}>
          <h1 className={styles.challengeTitle}>チャレンジ</h1>
          <p className={styles.challengeSubtitle}>
            環境にやさしい行動でポイントを獲得しよう！
          </p>
        </div>

        <div className={styles.challengeList}>
          <div className={styles.challengeCard}>
            <div className={styles.challengeIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#4A9B8C" fillOpacity="0.1"/>
                <path d="M20 10V30M10 20H30" stroke="#4A9B8C" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.challengeInfo}>
              <h3 className={styles.challengeCardTitle}>初回リサイクル</h3>
              <p className={styles.challengeDescription}>
                初めてReBit BOXにリサイクル素材を投入する
              </p>
              <div className={styles.challengeReward}>
                <span className={styles.rewardText}>報酬:</span>
                <span className={styles.rewardPoints}>50ポイント</span>
              </div>
            </div>
            <div className={styles.challengeStatus}>
              <span className={styles.statusBadge}>未完了</span>
            </div>
          </div>

          <div className={styles.challengeCard}>
            <div className={styles.challengeIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#4A9B8C" fillOpacity="0.1"/>
                <path d="M13 20L18 25L27 16" stroke="#4A9B8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.challengeInfo}>
              <h3 className={styles.challengeCardTitle}>週間目標達成</h3>
              <p className={styles.challengeDescription}>
                1週間で5回以上リサイクルする
              </p>
              <div className={styles.challengeReward}>
                <span className={styles.rewardText}>報酬:</span>
                <span className={styles.rewardPoints}>100ポイント</span>
              </div>
            </div>
            <div className={styles.challengeStatus}>
              <span className={styles.statusBadgeComplete}>完了</span>
            </div>
          </div>

          <div className={styles.challengeCard}>
            <div className={styles.challengeIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#4A9B8C" fillOpacity="0.1"/>
                <path d="M20 12V20L26 26" stroke="#4A9B8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.challengeInfo}>
              <h3 className={styles.challengeCardTitle}>継続リサイクル</h3>
              <p className={styles.challengeDescription}>
                30日間連続でリサイクルを行う
              </p>
              <div className={styles.challengeReward}>
                <span className={styles.rewardText}>報酬:</span>
                <span className={styles.rewardPoints}>500ポイント</span>
              </div>
            </div>
            <div className={styles.challengeStatus}>
              <span className={styles.statusBadgeProgress}>進行中</span>
            </div>
          </div>

          <div className={styles.challengeCard}>
            <div className={styles.challengeIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#4A9B8C" fillOpacity="0.1"/>
                <path d="M20 8L22.5 15.5H30L24.5 19.5L27 27L20 23L13 27L15.5 19.5L10 15.5H17.5L20 8Z" stroke="#4A9B8C" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.challengeInfo}>
              <h3 className={styles.challengeCardTitle}>エコマスター</h3>
              <p className={styles.challengeDescription}>
                累計100回のリサイクルを達成する
              </p>
              <div className={styles.challengeReward}>
                <span className={styles.rewardText}>報酬:</span>
                <span className={styles.rewardPoints}>1000ポイント</span>
              </div>
            </div>
            <div className={styles.challengeStatus}>
              <span className={styles.statusBadge}>未完了</span>
            </div>
          </div>
        </div>

        <div className={styles.challengeProgress}>
          <h3 className={styles.progressTitle}>今週の進捗</h3>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '65%' }}></div>
          </div>
          <div className={styles.progressText}>
            <span>5回 / 7回</span>
            <span>65%</span>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};