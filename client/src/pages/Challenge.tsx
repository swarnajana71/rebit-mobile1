import React from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import { FooterSection } from './sections/FooterSection';
import styles from '../styles/Challenge.module.css';

export const Challenge = (): JSX.Element => {
  return (
    <div className={styles.challengeContainer}>
      <Header />
      
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