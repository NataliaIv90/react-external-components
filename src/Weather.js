import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  return (
    <div className="Weather">
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
        animate={true}
      />
    </div>
  );
}
