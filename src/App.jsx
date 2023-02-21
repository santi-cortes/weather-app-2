import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import PreCharging from "./components/PreCharging";
import MapView from "./components/MapView";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [tempe, setTempe] = useState();

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      };
      setCoords(obj);
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // PETICION DEL CLIMA //
  useEffect(() => {
    if (coords) {
      const APIKEY = "73b0ec4428e7c7b120f292f1e3e2c29c";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${APIKEY}`;
      axios
        .get(URL)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
          setTempe({ celsius, farenheit });
          setWeather(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  async function loadInfo(city = "london") {
    const APIKEY = "73b0ec4428e7c7b120f292f1e3e2c29c";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    axios
      .get(URL)
      .then((res) => {
        const celsius = (res.data.main.temp - 273.15).toFixed(1);
        const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
        const obj = {
          lat: res.data.coord.lat,
          long: res.data.coord.lon,
        };
        setCoords(obj);
        setTempe({ celsius, farenheit });
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  let myStyle = {
    background: "#333",
  };

  let myStyleMain = {
    background:
      "linear-gradient(rgb(30, 107, 221) 0%, rgb(3, 126, 255) 42%, rgb(3, 191, 255) 100%)",
  };

  return (
    <div className="App" style={myStyleMain}>
      <h1>Weather app</h1>
      <div className="content-app" style={myStyle}>
        {weather ? (
          <WeatherCard
            weather={weather}
            tempe={tempe}
            setWeather={setWeather}
          />
        ) : (
          <PreCharging />
        )}
        {weather ? <MapView coords={coords} /> : <PreCharging />}
        <WeatherForm onChangeCity={handleChangeCity} />
      </div>
    </div>
  );
}

export default App;
