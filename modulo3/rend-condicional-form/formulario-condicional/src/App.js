
import React from "react";

import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Etapa4 } from "./components/Etapa4";
import styled from "styled-components";


 const Estilobto = styled.button`
  text-align:center;
  text-decoration:none;
  
  `
  const EstiloGeral = styled.div`
  display:flex;
  flex-direction:column;
  margin:0;
  padding:0;
  align-items:center;
  justify-content:space-around;
  
  `
  
  

class App extends React.Component {
  

 
  state={
      Etapa:1,
    }
  trocarEtapa = ()=>{
    if(this.state.Etapa<=3){
      this.setState({
        Etapa: this.state.Etapa+1
      });

    }
  }  
  
  render() {

    let firstPage;
    switch (this.state.Etapa) {
      case 1:
        firstPage= <Etapa1/>
        break;
      case 2:
        firstPage= <Etapa2/>
        break;
      case 3:
        firstPage= <Etapa3/>
      break;
      case 4:
        firstPage= <Etapa4/>
        break;
      default:
        break;
    }
        return (
            <EstiloGeral> 
                
                  {firstPage}
                    <p></p>
                    <p></p>
                    <p></p>
                <Estilobto>
                    
                  <button onClick={this.trocarEtapa}>Proxima Etapa</button>
                </Estilobto>
            </EstiloGeral>
        );
    }

}

export default App;