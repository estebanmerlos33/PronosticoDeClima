const WeatherBoard = (props) => {
  if (!props.shownWeather) return;

  let weatherClassName;
  switch (props.shownWeather) {
    case "Clear sky" || "Mainly clear":
      weatherClassName = "clear";
      break;

    case "Mainly clear" || "Partly cloudy":
      weatherClassName = "partlycloudy";
      break;

    case "Overcast":
      weatherClassName = "cloudy";
      break;
    case "Fog" || "Depositing rime fog":
      weatherClassName = "fog";
      break;
    case "Drizzle: Light intensity" ||
      "Drizzle: moderate intensity" ||
      "Drizzle: dense intensity" ||
      "Rain: Slight intensity" ||
      "Rain: moderate intensity" ||
      "Rain: heavy intensity" ||
      "Rain showers: Slight" ||
      "Rain showers: moderate" ||
      "Rain showers: violent" ||
      "Rain showers: Slight" ||
      "Rain showers: moderate" ||
      "Rain showers: violent":
      weatherClassName = "rain";
      break;
    case "Freezing Rain: Light intensity" || "Freezing Rain: heavy intensity":
      weatherClassName = "sleet";
      break;
    case "Snow fall: Slight, intensity" ||
      "Snow fall: moderate intensity" ||
      "Snow fall: heavy intensity":
      weatherClassName = "cloudy";
      break;
    case "Snow grains":
      weatherClassName = "flurries";
      break;
    case "Snow showers slight" || "Snow showers heavy":
      weatherClassName = "snow";
      break;
    case "Thunderstorm" ||
      "Thunderstorm with slight hail" ||
      "Thunderstorm with heavy hail":
      weatherClassName = "tstorms";
      break;
  }
  return (
    <div>
      <h2>{props.shownWeather}</h2>
      <div className="weatherIcon">
        <div className={weatherClassName}>
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
};
export default WeatherBoard;
