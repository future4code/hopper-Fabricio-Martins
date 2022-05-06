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


export class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <EstiloGeral>
                    <div>
                        <h3>ETAPA 1 - DADOS GERAIS</h3>
                    </div>
                    <div>
                        <p>1. Qual o seu nome?</p>
                        <input value=""></input>
                    </div>
                    <div>
                        <p>2. Qual sua idade?</p>
                        <input value=""></input>

                    </div>
                    <div>
                        <h3>3. Qual seu email?</h3>
                        <input value=""></input>

                    </div>
                    <div>
                        <h3>4. Qual a sua escolaridade?</h3>
                        <select>
                            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                            <option value="Ensino médio completo">Ensino médio completo</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
                        </select>
                    </div>
                 

                </EstiloGeral>
            </div>
        );
    }

}