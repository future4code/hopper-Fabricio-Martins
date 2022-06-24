import React from "react";
import styled from "styled-components";

const EstiloGeral = styled.div`
display:flex;
flex-direction:column;
margin:0;
padding:0;
align-items:center;
justify-content:space-around;

`


export class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <EstiloGeral>

                    <div>
                        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    </div>
                    <EstiloGeral>
                        <h3>5. Qual curso?</h3>
                        <input value=""></input>
                    </EstiloGeral>
                    <EstiloGeral>
                        <h3>6. Qual a unidade de ensino?</h3>
                        <input value=""></input>

                    </EstiloGeral>

                 



                </EstiloGeral>
            </div>
        );
    }

}