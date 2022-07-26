import React from "react";
import Card from "../../Componentes/Card";
import Footer from "../../Componentes/Footer";



export default function Home() {
 
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>FutureEats</h1>
          </div>
          <div>
            <div>
              <input placeholder="Restaurante"></input>
            </div>
          </div>


        </div>
        // card de lanchonetes

        
       <Card/>

      </div>
      <Footer/>
    </div>



  );
}
