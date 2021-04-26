import React from 'react' 
import {v4} from 'uuid'
import Bar from './Bar'
import { Container, Row } from 'react-grid' 
import { useSelector , useDispatch } from 'react-redux'
import {apiCallWeatherData} from '../actions'




export default function Bargraph(props){
   
    const isHidden = useSelector(state => state.isHidden)
    const weatherData = useSelector(state => state.weatherData)
    const dispatch = useDispatch()

    useEffect(()=> {
       
        
       
        dispatch(apiCallWeatherData())
        weatherData  &&  dispatch(isHidden)
            
    }, [dispatch, isHidden, weatherData])

    return(

    <div className="barchart" >
        {console.log("threeHourData", threeHourData)}
       {threeHourData.length === 9 ? threeHourData.splice(5,1) : console.log("threeHourData length", threeHourData.length)}
       {threeHourData.map( (day, index) => {
        
           let time= day.dt_txt.split(" ")[1]
           let timeArr = time.split('').splice(0, 5)
           timeArr[0] === 0 && timeArr.shift();
           timeArr=timeArr.join('')
           timeArr =timeArr.split(" ")
           let heightCalc = [Math.floor(day.main.temp - 273.15)]
           let height
           const date = day.dt_txt.split(' ')[0]
           console.log('AAAAA', date[0])

          function conditionalHeight(){
            
              console.log("height", heightCalc)
              heightCalc[0] === 14 ? height = 100 : height = 50
             
              return height
          }
          
           conditionalHeight(heightCalc)


        //  let dateHourData =[]
         let  dateHourData =[]


         oneDayCardData.map((one)=> {


             console.log('PFPFPFPTPP',one.dt_txt.split(' ')[0] )
            

             dateHourData.push(one.dt_txt.split(' ')[0])
            // if(date[0] === one.dt_txt.split(' ')[0]) {
            //     dateHourData.push(date[0])
            // } 
            
            return dateHourData
         })
         console.log("oneDayCardData", oneDayCardData)
         console.log("dateHourData", dateHourData)
          
            if(timeArr[0] === `00:00`){
                    timeArr[0] = `12:00AM`
                } else if(timeArr[0] === '12:00'){
                    timeArr[0] = `12:00PM`
                }else if(timeArr[0] === `15:00`){
                    timeArr[0] = `3:00PM`
                }else if(timeArr[0] === '18:00'){
                    timeArr[0] = `6:00PM`
                }else if(timeArr[0] === '21:00'){
                    timeArr[0]=`9:00PM`
                } else {
                    timeArr[0]=timeArr[0].split('').splice(1).join('')+'AM'
               
                } 
                   

                const temp = day.main.temp
                console.log("temp", temp)
               
          
                
                
               

        return(
            
        <Bar           
            celcius={Math.floor(day.main.temp - 273.15)} 
            fahrenheit={Math.floor((day.main.temp - 273.15)* 9/5 + 32)} 
            key={v4()}
            temp={temp}
            tempChecked={tempChecked}
            height = {height}
            day={day}
            date={date}
            // dateDayData={dateDayData}
            index={index}
            timeDisplay={timeArr}
            dateHourData = {dateHourData}
           
        /> 
        )
      

        }
                      
        )
        }
      
    </div>    
    )
    }
