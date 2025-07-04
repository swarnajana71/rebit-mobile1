import React from 'react';
import styles from '../styles/Heading.module.css';

interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <div className={styles.Heading_2_9209}>
      {children}
    </div>
  );
}