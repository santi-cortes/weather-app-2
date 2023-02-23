import React from "react";
import { useState } from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({ weather, tempe, changeTemperature, isCelsius }) => {
  let myStyle = {
    background:
      "linear-gradient(10deg, rgb(30, 107, 221) 0%, rgb(3, 126, 255) 42%, rgb(3, 191, 255) 100%)",
  };

  return (
    <article className="card" style={myStyle}>
      <section className="card_second-section">
        <h2 className="card_title">{`${weather?.name}, ${weather?.sys.country}`}</h2>

        <h3 className="second-title">"{weather?.weather[0].description}"</h3>
        <ul className="second_list">
          <li className="second-item">
            <span className="second_span">Wind Speed</span>{" "}
            {weather?.wind.speed} m/s
          </li>
          <li className="second-item">
            <span className="second_span">Clouds</span> {weather?.clouds.all} %
          </li>
          <li className="second-item">
            <span className="second_span">Pressure</span>{" "}
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <section className="card_first-section">
        <WeatherIcon weather={weather} />
      </section>

      <h2 className="card_temperature">
        {isCelsius ? `${tempe?.celsius} °C` : `${tempe?.farenheit} °F`}
      </h2>
      <button className="card_btn" onClick={changeTemperature}>
        {isCelsius ? "Change °F" : "change °C"}
      </button>
    </article>
  );
};

export default WeatherCard;
