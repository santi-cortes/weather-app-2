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
    fourth: {
      lat: 1.2897,
      long: 103.8501,
    },
    fifth: {
      lat: 25,
      long: 45,
    },
  };

  return (
    <div className="weather-places">
      <Place isCelsius={isCelsius} city={cities.first} />
      <Place isCelsius={isCelsius} city={cities.second} />
      <Place isCelsius={isCelsius} city={cities.third} />
      <Place isCelsius={isCelsius} city={cities.fourth} />
      <Place isCelsius={isCelsius} city={cities.fifth} />
    </div>
  );
};

export default WeatherPlaces;
