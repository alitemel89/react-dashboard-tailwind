import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ progress, width, height }) => {
  return (
    <div style={{ width: width, height: height }}>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          // Text size
          textSize: "1.5rem",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(52, 211, 153, ${progress / 100})`,
          textColor: "#34D399",
          trailColor: "#5C6BC0",
        })}
      />
    </div>
  );
};

export default ProgressCircle;
