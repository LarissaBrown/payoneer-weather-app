import React, { useContext } from "react";

import { Row } from "react-grid";
import { ContextStore } from "../ContextStore";

export function TempToggle() {
  const { isTempChecked, handleKelvin } = useContext(ContextStore);

  return (
    <Row className="radio">
      <label>
        <input
          type="radio"
          value="fahrenheit"
          checked={isTempChecked}
          onChange={() => handleKelvin()}
        />
        Fahrenheit
      </label>

      <label>
        <input
          type="radio"
          value="celcius"
          checked={!isTempChecked}
          onChange={() => handleKelvin()}
        />
        Celcius
      </label>
    </Row>
  );
}
