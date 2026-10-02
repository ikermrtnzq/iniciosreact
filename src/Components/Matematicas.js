function Matematicas (props) {

    let numero = "15";
    let doble= props.metodoPadre1;
    let triple= props.metodoPadre2;



    return(
        <div>
            <button onClick={() => doble(numero )}>Calcular Doble</button>
            <button onClick={() => triple(numero )}>Calcular Triple</button>

        </div>
    )

}

export default Matematicas