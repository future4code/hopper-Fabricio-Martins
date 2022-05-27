import React from "react";



export class CriarPlayList extends React.Component {





    render() {
        
     

        return(
        <div>
            <div className="App-header">
                <p>Crie sua PlayList:</p>
                <input name="nomePlayList" id="nomePlay" type={String}   placeholder="Digite nome da Sua PlayList"></input>
                <p></p><p></p>
                <button >Criar</button>
            </div>

        </div>
        );
    }

}