import "../components/WeatherIcons.css";

const WeatherIcons = (props) => {
  return (
    <div>
      <div className="container">
        <h1 className="title">Pure CSS Weather Icons</h1>
        <div className="weatherIcon">
          <div className="sunny">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="mostlysunny">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="mostlycloudy">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="cloudy">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="fog">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="rain">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="tstorms">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="sleet">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="flurries">
            <div className="inner"></div>
          </div>
        </div>
        <div className="weatherIcon">
          <div className="snow">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherIcons;
