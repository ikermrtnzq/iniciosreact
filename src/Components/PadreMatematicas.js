import Matematicas from './Matematicas';

function PadreMatematicas (props) {

    const doble = (numero) => {
        console.log(" Resultado = " + numero*2)
    }
    const triple = (numero) => {
        console.log(" Resultado = " + numero*3)
    }

    return(
        <div>
            <Matematicas metodoPadre1={doble} metodoPadre2={triple}/>
        </div>
    )

}

export default PadreMatematicas