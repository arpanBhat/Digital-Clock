import React, { useState } from "react";

const App=()=>{

    let time = new Date().toLocaleTimeString();

    const [initialState, finalState]= useState(time);
    const callUpdatedTime=()=>{
        time = new Date().toLocaleTimeString();
        finalState(time);
    }
    setInterval(callUpdatedTime,1000);

    return(
        <div>
            <h1>{initialState}</h1>
          
        </div>
    )

}

export default App;