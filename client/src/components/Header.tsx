import React from 'react';
import { Link } from 'wouter';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.Header_2_9268}>
      <Link href="/">
        <div className={styles.IconArea_1_4653}>
          <div className={styles.ArrowBack_1_5127}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5502 12.0001L10.9002 19.3501C11.1502 19.6001 11.271 19.8918 11.2627 20.2251C11.2544 20.5584 11.1252 20.8501 10.8752 21.1001C10.6252 21.3501 10.3335 21.4751 10.0002 21.4751C9.66686 21.4751 9.3752 21.3501 9.1252 21.1001L1.4252 13.4251C1.2252 13.2251 1.0752 13.0001 0.975195 12.7501C0.875195 12.5001 0.825195 12.2501 0.825195 12.0001C0.825195 11.7501 0.875195 11.5001 0.975195 11.2501C1.0752 11.0001 1.2252 10.7751 1.4252 10.5751L9.1252 2.87511C9.3752 2.62511 9.67019 2.50428 10.0002 2.50261C10.3302 2.50094 10.6252 2.62094 10.8752 2.87261C11.1252 3.12428 11.2502 3.41761 11.2502 3.75261C11.2502 4.08761 11.1252 4.38094 10.8752 4.63261L3.5502 12.0001Z" fill="#403D3C"/>
            </svg>
          </div>
        </div>
      </Link>
      <span className={styles.Title_1_4654}>会員ランクとは</span>
    </div>
  );
}