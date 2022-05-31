
import React , {usestate} from "react"
const [valorcontador , setvalorcontador] = usestate(0)
 function Contador(param){
    

    const calculo =()=>{
            if (param==="-") {
                setvalorcontador(valorcontador+1)

            } else if (param==="+"){ 
                setvalorcontador(valorcontador-1)
            }
       

    }

    return(
        <div>
                <h1>Contador</h1>
                <h1>{valorcontador}</h1>
                <button onClick={()=>calculo("-")}>-</button>
                <button onClick={()=>calculo("+")}>+</button>
        </div>
    );
}
export default Contador;