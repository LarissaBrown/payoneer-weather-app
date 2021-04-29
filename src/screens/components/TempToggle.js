import React from 'react'
import { useSelector , useDispatch } from 'react-redux'



export default function TempToggle(){

    const isCheckedTemp = useSelector(state => state.isCheckedTemp)
    const dispatch = useDispatch()
   



    return (
<form style={{display: "flex", flexDirection: "row"}}>

           
<div className="radio">
  
    <label>
        <input type="radio" value="fahrenheit" checked={isCheckedTemp} onChange={() =>  dispatch(isCheckedTemp)}/>
    Fahrenheit
    </label>


    <label>
        <input type="radio" value="celcius" checked={!isCheckedTemp} onChange={() =>  dispatch(isCheckedTemp)}/>
    Celcius
    </label>
   
</div>
</form>
    )

}

