import React from 'react'
import {Col} from 'react-grid' 




export default function Bar(props){
  
    const {hournum} = props
    // let i = index+1
    // let divHeight =  `${parseInt(height)}`

    // console.log(divHeight)

  
  return(
  
       <Col >
          
            <div className="bar" >
                
                <p>Date:{`${hournum}`} </p>    
                {/* {!tempChecked?  */}
                <p>Temp: {hournum}C</p> 
                 {/* : <p>Temp: {fahrenheit}C</p> */}
                <p>Time: {hournum}</p>
            </div>
            {/* {console.log("pxHeight", `${parseInt(height)}`)} */}
         
        </Col>
    )
}


