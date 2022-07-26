import React from "react";
import CardCarrinho from "../../Componentes/CardCarrinho";
import Footer from "../../Componentes/Footer";




export default function Home() {

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <h1>Meu Carrinho</h1>
            </div>
          </div>
          //endereço
          <div>
            <p class="">Endereço de entrega</p><p class="">Rua Alessandro Vieira, 42</p>
          </div>
          <div>
            <p class="">Bullguer Vila Madalena</p>
            <p class="">R. Fradique Coutinho, 1136 - Vila Madalena</p>
            <p class="">30 - 45 min</p>

          </div>

          <CardCarrinho />
          <div>
            <p class="">Frete R$ 0,00</p>
            <p class="">SUBTOTAL</p>
            <p class="">R$00,00</p>
          </div>


          <div>
            <div class="">
              <p class="">Forma de Pagamento</p>
              <hr class="" />
              <div value="" class="">
                <input type="radio" name="payment" value="Money" /> Dinheiro <br />
                <input type="radio" name="payment" value="CreditCard" /> Cartão de crédito<br />
              </div>
            </div>
          </div>
          <div>
            <p>Confirmar</p>
          </div>
        </div>
        <Footer />
      </div>


    </div>
  );
}
