"use client";

import { useState, useEffect } from "react";
import { SITE } from "../_lib/constants";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const target = new Date(`${SITE.year}-08-09T00:00:00+03:00`);

  const calc = () => {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className={styles.countdown}>
      <div className={styles.box}>
        <span className={styles.num}>{time.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.box}>
        <span className={styles.num}>{pad(time.hours)}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.box}>
        <span className={styles.num}>{pad(time.minutes)}</span>
        <span className={styles.label}>Minutes</span>
      </div>
      <span className={styles.sep}>:</span>
      <div className={styles.box}>
        <span className={styles.num}>{pad(time.seconds)}</span>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  );
}
