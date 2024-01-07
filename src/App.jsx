import WeatherSearch from "../components/WeatherSearch.jsx";
import WeatherBoard from "../components/WeatherBoard.jsx";
import WeatherIcons from "../components/WeatherIcons.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [shownWeather, setShownWeather] = useState("");
  const [cityInput, setCityInput] = useState("");

  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleSearch = (updatedWeather) => {
    console.log(updatedWeather);
    setShownWeather(updatedWeather);
  };

  const showErrorMessage = () => {
    console.log("La ciudad ingresada no es válida");
  };

  return (
    <>
      <WeatherSearch
        cityInput={cityInput}
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
        showErrorMessage={showErrorMessage}
      ></WeatherSearch>
      <WeatherBoard shownWeather={shownWeather}></WeatherBoard>
    </>
  );
}

export default App;
