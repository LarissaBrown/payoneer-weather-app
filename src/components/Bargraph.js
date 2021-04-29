import React from 'react' 
import {v4} from 'uuid'
// import div from './div'
import Grid from '@material-ui/core/Grid';
// import { useSelector , useDispatch } from 'react-redux'
// import {isHidden} from '../actions'




export default function Bargraph(props){
   
    // const isHidden = useSelector(state => state.isHidden)
    // const weatherData = useSelector(state => state.weatherData)
    // const dispatch = useDispatch()
    const hours = [1,2,3,4,5,6,7,8]
    // useEffect(()=> {
       
        
      
    //     weatherData  &&  dispatch(isHidden)
            
    // }, [dispatch, isHidden, weatherData])

    return(

    <Grid container hournum={hours} className="bargraph">
        <h1 style={{ position: "absolute", top: "10px", color: "white", width: "100%", textAlign: "center" }}>Temperature Throughout the Day</h1>
             <div className="bar-container">
                <div className="bar" style={{height:"50px"}} key={v4()} hournum={hours[0]} ></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"100px"}} key={v4()} hournum={hours[1]}></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"80px"}} key={v4()} hournum={hours[2]}></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"130px"}} key={v4()} hournum={hours[3]}></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"90px"}} key={v4()} hournum={hours[4]}></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"150px"}} key={v4()} hournum={hours[5]}></div>
            </div>
                 
             <div className="bar-container">
                <div className="bar" style={{height:"60px"}} key={v4()} hournum={hours[6]}></div>
            </div>
                 
    
    </Grid >    
    )
    }
