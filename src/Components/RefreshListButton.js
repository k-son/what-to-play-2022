import React from "react";

function RefreshListButton( {onClick} ) {

  return(
    <button
      onClick = {onClick}
    >
      Refresh List
    </button>
  );
}

export default RefreshListButton;