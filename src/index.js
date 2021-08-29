import React from "react";
import ReactDOM from "react-dom";
import App from "./app"


function OnScreenRender(){
    return (<div>
        <App/>
    </div>)
}

ReactDOM.render(<OnScreenRender/>,document.getElementById("root"));