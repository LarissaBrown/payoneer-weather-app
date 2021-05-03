
import { createContext } from "react"
import { actions } from '../constants'

const Context = createContext({
  carouselWeatherItems: [],
  errorMessage: " ",
  isTempChecked: false ,
  isHidden: false,
  action: actions
})

export default Context