import React , {useContext, useEffect} from 'react' 
import Bargraph from './components/bargraph/Bargraph.js'
import Carousel from 'react-multi-carousel'
import TempToggle from './components/TempToggle'
import {v4} from 'uuid'
import Card from './components/carousel/Card'
import { Container, Row } from 'react-grid' 
import { useSelector , useDispatch } from 'react-redux'
import {apiCallWeatherData} from '../actions'

export default function WeatherInfo(props){

    const weatherData = useSelector(state => state.weatherData)
    const dispatch = useDispatch()
   
    useEffect(()=> {
    
        dispatch(apiCallWeatherData())
      
            
    }, [dispatch, weatherData])



   

    return (

        <Container >
             <h1 style={{color: "white"}}>The Weather Report Munich</h1>
              <h4 style={{color: "white", padding: '30px',}}>“If enough people think of a thing and work hard enough at it, I guess it’s pretty nearly bound to happen, wind and weather permitting.” – Laura Ingalls Wilder</h4>
            <Row >
                <TempToggle />
            </Row>

    <Carousel
     showDots={true}
     sliderClass=""
     slidesToSlide={1}
     swipeable
     additionalTransfrom={0}
     arrows
     autoPlaySpeed={3000}
     centerMode={false}
     containerClass="container"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite={false}
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
     responsive={{
       desktop: {
           breakpoint: {
               max: 3000,
               min: 1024
           },
           items: 3,
           partialVisibilityGutter: 40
       },
        mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 1,
           partialVisibilityGutter: 30
         },
         tablet: {
          breakpoint: {
             max: 1024,
             min: 464
          },
           items: 2,
           partialVisibilityGutter: 30
         }
       }}
    >
          
           
             {weatherData.map(item => 
       
        
               <Card 

                        id={v4()}    />
                
        
              

             )}  
    </Carousel>
    <Row>
        <Bargraph />
    </Row>

        </Container>

        
    )
}