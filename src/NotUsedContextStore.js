// import React, { useState } from "react";
// import { v4 } from "uuid";
// import axios from 'axios'

// export const ContextStore = React.createContext();

// function ContextStoreProvider(props) {
//   const [isHidden, setIsHidden] = useState(true);setIsHidden(false? true : false)
//   const [isTempChecked, setIsTempChecked] = useState(true);
//   const [oneDayCardData, setOneDayCardData] = useState([]);
//   const [threeHourData, setThreeHourData] = useState([]);
//   const [arrTimes, setArrTimes] = useState([]);

//   const initialWeatherData = { count: 0 }

//   const [weatherData, dispatch] = useReducer(reducer, initiaWeatherData)




    
//   const fiveDayWeatherSet = async () => {
//     try{
//       const data = await loadContent()
//       weatherData.map((item, index) => {
//             if (
//               item[index + 1].dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0]
//             ) {
//               return item;
//             } else if (index + 1 <= 5) {
//               return item;
//             }
//           return data
//           })
//         }catch (err) {
//           console.error('error', err)
//         }
        
//    }
  
//    const [weatherFive, setWeatherFive ] = useState(() => {
//     const initialStateWeatherFive = fiveDayWeatherSet(weatherData)
//     return initialStateWeatherFive }
//   )
//   const fiveDayHourDataSet = async () => { 
    
   
//      try{
//         let oneDayWeatherData = []
//        const data = await loadContent()
//        weatherData.map((item) => {
//         if (item.dt_txt.split(" ")[1] === "00:00:00") {
//           oneDayWeatherData.push(item);
//           return oneDayWeatherData
//         }

//         if (data === []) {
//           data.push(item.dt_txt.split(" ")[0]);
//         } else if (data[0] === item.dt_txt.split(" ")[0]) {
//           data.push(item.dt_txt.split(" ")[0]);
//         } else if (data[0] !== item.dt_txt.split(" ")[0]) {
//           return data;
//         }
       
//       })
//      } catch (err) {
//       console.error('error', err)
//     }


//   };
 
//   const [eightTimesData, setEightTimesData] = useState(()=> {
//     const initialStateEightTimesData = fiveDayHourDataSet()
//     return initialStateEightTimesData
//   })
//     // setOneDayCardData(oneDayWeatherData);
  



//   const handleKelvin = () => {
//     setIsTempChecked(!isTempChecked);
//   };

//   return (
//     <ContextStore.Provider
//       value={{
//         weatherFive,
//         setWeatherData,
//         setThreeHourData,
//         threeHourData,
//         isTempChecked,
//         setIsTempChecked,
//         oneDayCardData,
//         setOneDayCardData,
//         arrTimes,
//         setArrTimes,
//         isHidden,
//         setIsHidden,
//         fiveDayHourDataSet,
//         getPlayers,
//         fiveDayWeatherSet,
//         handleKelvin,
//         loadContent
//       }}
//     >
//       {props.children}
//     </ContextStore.Provider>
//   );
// }
// export { ContextStoreProvider };
