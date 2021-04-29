import React from 'react'
import { Paper, Button } from '@material-ui/core'




export default function Card(props){
    const {item} = props



    return(

        <Paper>
             <h2>{item}</h2>
                <p>{item}</p>
             <Button className="view-data-button">
                    Check it out!
             </Button>
        </Paper> 
       
    )
}
