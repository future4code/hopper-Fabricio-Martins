import React, {useState} from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [future, setFuture] = useState(undefined)

    const getFuture = () => {
    }

    const states = {future}
    const setters = {setFuture}
    const requests = {getFuture}

    return(
        <GlobalStateContext.Provider value={{states,setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState


