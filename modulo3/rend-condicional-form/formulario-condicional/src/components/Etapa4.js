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

export class Etapa4 extends React.Component {
    render() {
        return (
            <div>
                <EstiloGeral>

                    <div>
                        <h3>O FORMULÁRIO ACABOU</h3>
                        <p>Muito obrigado por participar! Entraremos em contato!</p>
                    </div>

                </EstiloGeral>
            </div>
        );
    }

}