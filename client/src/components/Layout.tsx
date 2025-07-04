import React from 'react';
import styles from '../styles/Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.Layout_2_8228}>
      <div className={styles.Card_2_8229}>
        <div className={styles.Layout_1_4703}>
          <div className={styles.Layout_1_4704}>
            <span className={styles.Name_1_4705}>Hirota</span>
            <span className={styles.Label_1_4706}>さん</span>
          </div>
          <div className={styles.Rank_1_4707}>
            <span className={styles.Label_1_4708}>会員ランク</span>
            <div className={styles.Rank_1_4709}>
              <span className={styles.Label_1_4710}>Seed</span>
              <div className={styles.IconArea_1_4711}>
                <div className={styles.Seed_1_5125}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00004 16.6668C4.54171 16.6668 4.14935 16.5036 3.82296 16.1772C3.49657 15.8509 3.33337 15.4585 3.33337 15.0002C3.33337 14.5418 3.49657 14.1495 3.82296 13.8231C4.14935 13.4967 4.54171 13.3335 5.00004 13.3335C5.45837 13.3335 5.85073 13.4967 6.17712 13.8231C6.50351 14.1495 6.66671 14.5418 6.66671 15.0002C6.66671 15.4585 6.50351 15.8509 6.17712 16.1772C5.85073 16.5036 5.45837 16.6668 5.00004 16.6668ZM11.6667 16.6668C11.2084 16.6668 10.816 16.5036 10.4896 16.1772C10.1632 15.8509 10 15.4585 10 15.0002C10 14.5418 10.1632 14.1495 10.4896 13.8231C10.816 13.4967 11.2084 13.3335 11.6667 13.3335C12.125 13.3335 12.5174 13.4967 12.8438 13.8231C13.1701 14.1495 13.3334 14.5418 13.3334 15.0002C13.3334 15.4585 13.1701 15.8509 12.8438 16.1772C12.5174 16.5036 12.125 16.6668 11.6667 16.6668ZM15 16.6668C14.5417 16.6668 14.1493 16.5036 13.8229 16.1772C13.4965 15.8509 13.3334 15.4585 13.3334 15.0002C13.3334 14.5418 13.4965 14.1495 13.8229 13.8231C14.1493 13.4967 14.5417 13.3335 15 13.3335C15.4584 13.3335 15.8507 13.4967 16.1771 13.8231C16.5035 14.1495 16.6667 14.5418 16.6667 15.0002C16.6667 15.4585 16.5035 15.8509 16.1771 16.1772C15.8507 16.5036 15.4584 16.6668 15 16.6668ZM10 11.6668C9.72226 11.6668 9.48615 11.5696 9.29171 11.3752C9.09726 11.1807 9.00004 10.9446 9.00004 10.6668V3.3335C9.00004 3.05573 9.09726 2.81962 9.29171 2.62518C9.48615 2.43073 9.72226 2.3335 10 2.3335C10.2778 2.3335 10.5139 2.43073 10.7084 2.62518C10.9028 2.81962 11 3.05573 11 3.3335V10.6668C11 10.9446 10.9028 11.1807 10.7084 11.3752C10.5139 11.5696 10.2778 11.6668 10 11.6668Z" fill="#776907"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Layout_1_4712}>
          <div className={styles.Layout_1_4713}>
            <div className={styles.Layout_1_4714}>
              <span className={styles.Label_1_4715}>ReBitポイント残高</span>
              <div className={styles.Layout_1_4716}>
                <span className={styles.Value_1_4717}>100</span>
                <span className={styles.Label_1_4718}>pt</span>
              </div>
            </div>
            <div className={styles.Layout_1_4719}>
              <span className={styles.Label_1_4720}>円換算</span>
              <div className={styles.Layout_1_4721}>
                <span className={styles.Value_1_4722}>10</span>
                <span className={styles.Label_1_4723}>円</span>
              </div>
            </div>
          </div>
          <div className={styles.Layout_1_4724}>
            <span className={styles.Label_1_4725}>CO2削減量</span>
            <div className={styles.Layout_1_4726}>
              <span className={styles.Value_1_4727}>-5</span>
              <span className={styles.Label_1_4728}>%</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Section_2_8230}>
        <div className={styles.Button_1_2396}>
          <div className={styles.IconArea_1_4968}>
            <img src="/icons/mail-icon.png" alt="Mail" className={styles.Mail_1_5129} />
          </div>
          <span className={styles.generated_送る_1_4969}>送る</span>
        </div>
        <div className={styles.Button_1_2397}>
          <div className={styles.IconArea_1_4968}>
            <img src="/icons/exchange-icon.png" alt="Exchange" className={styles.Change_1_5129} />
          </div>
          <span className={styles.generated_送る_1_4969}>交換</span>
        </div>
        <div className={styles.Button_1_2398}>
          <div className={styles.IconArea_1_4968}>
            <img src="/icons/history-icon.png" alt="History" className={styles.History_1_5129} />
          </div>
          <span className={styles.generated_送る_1_4969}>履歴</span>
        </div>
      </div>
    </div>
  );
}