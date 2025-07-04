import React from 'react';
import styles from '../styles/Button.module.css';

export default function HistoryButton() {
  return (
    <div className={styles.Button_1_2396}>
      <div className={styles.IconArea_1_4968}>
        <div className={styles.Mail_1_5129}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" stroke="#162A39" strokeWidth="2" fill="none"/>
            <path d="M16 8V16L20 20" stroke="#162A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <span className={styles.generated_送る_1_4969}>履歴</span>
    </div>
  );
}