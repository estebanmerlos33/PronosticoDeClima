const WeatherSearch = (props) => {
  const translateWeatherCode = (code) => {
    let description = "";

    switch (code) {
      case 0:
        description = "Clear sky";
        break;
      case 1:
        description = "Mainly clear";
        break;
      case 2:
        description = "Partly cloudy";
        break;
      case 3:
        description = "Overcast";
        break;
      case 45:
        description = "Fog";
        break;
      case 48:
        description = "Depositing rime fog";
        break;
      case 51:
        description = "Drizzle: Light intensity";
        break;
      case 53:
        description = "Drizzle: moderate intensity";
        break;
      case 55:
        description = "Drizzle: dense intensity";
        break;
      case 56:
        description = "Freezing Drizzle: Light intensity";
        break;
      case 57:
        description = "Freezing Drizzle: dense intensity";
        break;
      case 61:
        description = "Rain: Slight intensity";
        break;
      case 63:
        description = "Rain: moderate intensity";
        break;
      case 65:
        description = "Rain: heavy intensity";
        break;
      case 66:
        description = "Freezing Rain: Light intensity";
        break;
      case 67:
        description = "Freezing Rain: heavy intensity";
        break;
      case 71:
        description = "Snow fall: Slight, intensity";
        break;
      case 73:
        description = "Snow fall: moderate intensity";
        break;
      case 75:
        description = "Snow fall: heavy intensity";
        break;
      case 77:
        description = "Snow grains";
        break;
      case 80:
        description = "Rain showers: Slight";
        break;
      case 81:
        description = "Rain showers: moderate";
        break;
      case 82:
        description = "Rain showers: violent";
        break;
      case 85:
        description = "Snow showers slight";
        break;
      case 86:
        description = "Snow showers heavy";
        break;
      case 95:
        description = "Thunderstorm";
        break;
      case 96:
        description = "Thunderstorm with slight hail";
        break;
      case 99:
        description = "Thunderstorm with heavy hail";
        break;
    }

    return description;
  };
  const searchWeather = async () => {
    if (props.cityInput === "") return;
    let coordinates = await getCoordinates(props.cityInput).then((c) => {
      return c;
    });
    let latitude = await coordinates[1][1];
    let longitude = await coordinates[2][1];
    console.log(latitude);
    console.log(longitude);
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weathercode`;

    let weatherCode = await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        return data.current.weathercode;
      });
    props.handleSearch(translateWeatherCode(weatherCode));
  };

  const getCoordinates = async (city) => {
    //const apiKey = import.meta.env.VITE_COORDS_API_KEY;
    const apiKey = "Rn83GNo+8YEZHpF0LDiXDA==ZnabpQj1Aw5ZZyny";
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        props.showErrorMessage();
      }

      const result = await response.json();
      console.log(result);

      return Object.entries(result[0]);
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const handleInputChange = (e) => {
    props.handleInputChange(e);
  };

  return (
    <div>
      WeatherSearch<br></br>
      <br></br>
      <br></br>
      <input
        value={props.cityInput}
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder="Buenos Aires"
      ></input>
      <br></br>
      <br></br>
      <button onClick={searchWeather}>Buscar clima</button>
    </div>
  );
};

export default WeatherSearch;
