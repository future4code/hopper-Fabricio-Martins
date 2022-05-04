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
const Estiloinput = styled.input`
display:flex;
flex-direction:column;
margin:0;
padding:0;
align-items:center;
justify-content:space-around;

`

export class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <EstiloGeral>

                    <div>
                        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                    </div>
                    <div>
                        <Estiloinput>
                            <h3>5. Por que você não terminou um curso de graduação?</h3>
                            <input value=""></input>
                        </Estiloinput>
                    </div>
                    <div>
                        <h3>6. Você fez algum curso complementar?</h3>
                    </div>
                    <div>

                        <select>
                            <option value="Nenhum">Nenhum</option>
                            <option value="Curso técnico">Curso técnico</option>
                            <option value="Curso de inglês">Curso de inglês</option>
                        </select>
                    </div>

                </EstiloGeral>
            </div>

        );
    }

}