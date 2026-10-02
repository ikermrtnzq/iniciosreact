//IMPORTAMOS useState de REACT
import {useState} from 'react';

function Contador () {

    //Las variables las declaramos con nombre para GET y SET
    const [numero,setNumero] = useState(5);

    const incrementarContador= () => {

        //PARA MODIFICAR EL VALOR
        setNumero(numero+1)
    }
    const decrementarContador= () => {

        //PARA MODIFICAR EL VALOR
        setNumero(numero-1)
    }

    return (
        <div>
            <h1>CONTADOR STATE</h1>
            <p>Contador: {numero}</p>
            <button onClick={() => incrementarContador()}>incrementar</button>
            <button onClick={() => decrementarContador()}>decrementar</button>

        </div>
    )
}

export default Contador