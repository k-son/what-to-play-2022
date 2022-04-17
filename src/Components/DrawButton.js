import React from "react";

function DrawButton( {onClick} ) {

  return(
    <button
      onClick={onClick}
    >
      Draw
    </button>
  );
}

export default DrawButton;