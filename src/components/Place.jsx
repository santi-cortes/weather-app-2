import React from "react";
import { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { useEffect } from "react";
import axios from "axios";
import PreCharging from "./PreCharging";

const Place = ({ city, isCelsius }) => {
  const [weath, setWeath] = useState();
  const [tempe, setTempe] = useState();

  let myStyle = {
    background:
      "linear-gradient(10deg, rgb(30, 107, 221) 0%, rgb(3, 126, 255) 42%, rgb(3, 191, 255) 100%)",
  };

  useEffect(() => {
    if (city) {
      const APIKEY = "73b0ec4428e7c7b120f292f1e3e2c29c";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&appid=${APIKEY}`;
      axios
        .get(URL)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
          setTempe({ celsius, farenheit });
          setWeath(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [city]);

  return (
    <article className="card sub" style={myStyle}>
      <section className="card_second-section-sub">
        <div className="main">
          <h2 className="card_title-sub">{`${weath?.name}, ${weath?.sys.country}`}</h2>
          <h2 className="card_temperature">
            {isCelsius ? `${tempe?.celsius} °C` : `${tempe?.farenheit} °F`}
          </h2>
        </div>

        <h3 className="second-title-sub">"{weath?.weather[0].description}"</h3>
        <ul className="second_list-sub">
          <li className="second-item-sub">
            <span className="second_span">Wind Speed</span> {weath?.wind.speed}{" "}
            m/s
          </li>
          <li className="second-item-sub">
            <span className="second_span">Clouds</span> {weath?.clouds.all} %
          </li>
          <li className="second-item-sub">
            <span className="second_span-sub">Pressure</span>{" "}
            {weath?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <section className="card_first-section-sub">
        {weath ? <WeatherIcon weather={weath} /> : <PreCharging />}
      </section>
    </article>
  );
};

export default Place;
