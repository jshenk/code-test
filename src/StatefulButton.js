import React from "react";

function StatefulButton(props) {
  const [buttonText, setButtonText] = React.useState(props.default);

  return (
    <div>
      <button
        onClick={() => setButtonText("Yeah, i'm a useless button sorry.")}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default StatefulButton;
