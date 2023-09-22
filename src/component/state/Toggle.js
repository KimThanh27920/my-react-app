import React, { useState } from "react";
import "./Toggle.css";
// StateLess functional componant: componant but not use state
// Stateful functional componant: componant use state
// 1. enabling state: useState(initialize value) initialize value: boolean. number, string, undefined, null, array, object
// 2. initialize state: useState(false)
// 3. reading state:
// 4. update state

function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
