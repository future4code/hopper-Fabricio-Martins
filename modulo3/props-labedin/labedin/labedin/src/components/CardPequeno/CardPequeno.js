import React from 'react';

function CardPequeno(props) {
    return (
        <div>
            <div className="smallcard-container">
                <img src={ props.imagem } />
                <div>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPequeno;