import React, {useReducer} from "react";
import { Row } from "react-grid";
import { ToggleReducer } from "../state/reducer"




export default function TempToggle() {
 
  const [ 
    isTempChecked
  , dispatch
] = useReducer(
  ToggleReducer,
  );
  return (
    <Row className="radio">
      <label>
        <input
          type="radio"
          value="fahrenheit"
          checked={isTempChecked}
          onChange={() => dispatch({action: "CHECKED"})}
        />
        Fahrenheit
      </label>

      <label>
        <input
          type="radio"
          value="celcius"
          checked={!isTempChecked}
          onChange={() => dispatch({action: "CHECKED"})}
        />
        Celcius
      </label>
    </Row>
  );
}
