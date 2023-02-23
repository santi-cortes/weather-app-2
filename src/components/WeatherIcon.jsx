import React from "react";
import moon from "../assets/moon.svg";
import sunny from "../assets/sunny.svg";
import rain from "../assets/rain.svg";

const WeatherIcon = ({ weather }) => {
  function day(icon) {
    let lastLetter = icon[2];
    let secondLetter = icon[1];
    if (lastLetter == "d") {
      return sunny;
    } else if (lastLetter == "n") {
      return moon;
    }
  }
  let icon = weather.weather[0].icon;

  return <img className="card_icon" src={weather && day(icon)} />;
};

export default WeatherIcon;
