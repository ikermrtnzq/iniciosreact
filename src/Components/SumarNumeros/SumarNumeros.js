import './SumarNumeros.css';

function SumarNumeros  (props) {
    
    const sumarNumeros = (numero1, numero2) => {
        let resultado = parseInt(props.numero1) + parseInt(props.numero2);
        console.log("Este es el resultado de la suma de " + props.numero1 + " y " + props.numero2 + " = " + resultado)
    }

    return(
        <div>
            <h1>Esto es un calculadora que va a sumar numeros</h1>
            <button className="boton" onClick={() => sumarNumeros(10,20)}>pulsa</button>
        </div>
    )
}

export default SumarNumeros;