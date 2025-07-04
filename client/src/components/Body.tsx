import React from 'react';
import styles from '../styles/Body.module.css';

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <div className={styles.Body_2_9213}>
      {children}
    </div>
  );
}