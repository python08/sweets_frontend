import React from "react";
import styles from "./ProgressCircle.module.css";

interface ProgressCircleProps {
  duration: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ duration }) => (
  <div className={styles["progress-circle"]}>
    <div
      className={styles["progress-fill"]}
      style={{ animationDuration: `${duration}s` }}
    />
  </div>
);

export default ProgressCircle;
