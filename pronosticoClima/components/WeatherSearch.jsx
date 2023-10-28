import { useState } from "react";

const WeatherSearch = () => {
  const [shownWeather, setShownWeather] = useState("");

  const getWeather = async () => {
    const city = "london";
    const apiKey = "Rn83GNo+8YEZHpF0LDiXDA==ZnabpQj1Aw5ZZyny";

    fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        setShownWeather(result[0].name);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      WeatherSearch<br></br>
      <br></br>
      {shownWeather}
      <br></br>
      <input type="text" placeholder="Buenos Aires"></input>
      <br></br>
      <br></br>
      <button onClick={getWeather}>Buscar pronóstico</button>
    </div>
  );
};

export default WeatherSearch;
