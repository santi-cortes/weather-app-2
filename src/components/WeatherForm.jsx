import { useState } from "react";
import React from "react";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" onChange={onChange} placeholder="Busca una ciudad" />
    </form>
  );
};

export default WeatherForm;
