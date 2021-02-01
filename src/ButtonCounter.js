import React from "react";

function ButtonCoutner() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <p>
        <strong>
          Number of times I have clicke this button for no real reason:
          {counter}
        </strong>
      </p>

      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
}
export default ButtonCoutner;
