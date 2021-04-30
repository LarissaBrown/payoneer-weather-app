import React, { useState } from "react";
import { v4 } from "uuid";
export const ContextStore = React.createContext();

function ContextStoreProvider(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [isTempChecked, setIsTempChecked] = useState(true);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherFive, setWeatherFive] = useState([]);
  const [oneDayCardData, setOneDayCardData] = useState([]);
  const [threeHourData, setThreeHourData] = useState([]);
  const [arrTimes, setArrTimes] = useState([]);
  const [eightTimesData, setEightTimesData] = useState([]);
  const [_carouselItems, set_CarouselItems] = useState([]);
  const [cityName, setCityName] = useState("City");

  const fiveDayWeatherSet = () => {
    setWeatherFive(() =>
      weatherData.map((item, index) => {
        if (
          item[index + 1].dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0]
        ) {
          return item;
        } else if (index + 1 <= 5) {
          return item;
        }
        return [...item, item];
      })
    );
    console.log("weatherFiveApi", weatherFive);

    return weatherFive;
  };

  const fiveDayHourDataSet = () => {
    let oneDayWeatherData = [];

    setEightTimesData(() =>
      weatherData.map((item) => {
        item.dt_txt.split(" ")[1] === "00:00:00" &&
          oneDayWeatherData.push(item);

        if (eightTimesData === []) {
          eightTimesData.push(item.dt_txt.split(" ")[0]);
        } else if (eightTimesData[0] === item.dt_txt.split(" ")[0]) {
          eightTimesData.push(item.dt_txt.split(" ")[0]);
        } else if (eightTimesData[0] !== item.dt_txt.split(" ")[0]) {
          return eightTimesData;
        }
        return eightTimesData;
      })
    );
    console.log("eightTimesData", eightTimesData);
    setOneDayCardData(oneDayWeatherData);
  };

  function getPlayers(arr) {
    console.log("weatherInGetPlayers", weatherData);
    arr.map((_carouselItem) => {
      let key = v4();
      let celcius = Math.floor(_carouselItem.main.temp - 273.15);
      let fahrenheit = Math.floor(
        ((_carouselItem.main.temp - 273.15) * 9) / 5 + 32
      );
      let date = _carouselItem.dt_txt.split(" ")[0];
      let desc = _carouselItem.weather[0].main;

      set_CarouselItems(..._carouselItems, {
        player: {
          key: key,
          celcius: celcius,
          fahrenheit: fahrenheit,
          date: date,
          desc: desc,
          //   image: require(`"./assets/${_carouselItem.weather[0].main}_Munich.jpg"`),
        },
      });
      return _carouselItems;
    });
  }

  const handleKelvin = () => {
    setIsTempChecked(!isTempChecked);
    console.log("tempChecked", isTempChecked);
  };

  return (
    <ContextStore.Provider
      value={{
        weatherFive,
        setWeatherData,
        setThreeHourData,
        threeHourData,
        isTempChecked,
        setIsTempChecked,
        oneDayCardData,
        setOneDayCardData,
        arrTimes,
        setArrTimes,
        isHidden,
        setIsHidden,
        fiveDayHourDataSet,
        getPlayers,
        fiveDayWeatherSet,
        handleKelvin,
        cityName,
        setCityName,
      }}
    >
      {props.children}
    </ContextStore.Provider>
  );
}
export { ContextStoreProvider };
