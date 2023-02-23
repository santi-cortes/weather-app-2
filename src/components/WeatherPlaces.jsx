import React from "react";
import Place from "./Place";

const WeatherPlaces = ({ isCelsius }) => {
  const cities = {
    first: {
      lat: 40.7143,
      long: -74.006,
    },
    second: {
      lat: 35.6895,
      long: 139.6917,
    },
    third: {
      lat: 51.5085,
      long: -0.1257,
    },
  };

  return (
    <div className="weather-places">
      <Place isCelsius={isCelsius} city={cities.first} />
      <Place isCelsius={isCelsius} city={cities.second} />
      <Place isCelsius={isCelsius} city={cities.third} />
    </div>
  );
};

export default WeatherPlaces;
