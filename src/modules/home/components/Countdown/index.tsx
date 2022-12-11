import { useEffect, useState } from "react";
import styles from "./Countdown.module.scss";

const countDownDate = new Date().setHours(new Date().getHours() + 2);

export const Countdown: React.FC = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(countDownDate - new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <>
      <div className={styles.countdown}>{hours.toString().padStart(2, "0")}</div>
      <div className={styles.countdown}>{minutes.toString().padStart(2, "0")}</div>
      <div className={styles.countdown}>{seconds.toString().padStart(2, "0")}</div>
    </>
  );
};
