import {useState} from 'react';
function Car (props) {

    //VARIABLE PARA SABER ESTADO DEL COCHE
    const [estado,setEstado]= useState(false);
    const [velocidad,setVelocidad]= useState(0);

    let coche ={
        marca : props.marca,
        modelo: props.modelo,
        velocidadmaxima: props.velocidadmaxima,
        aceleracion: props.aceleracion
    }


    return(

        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
        </div>

    )
}

export default Car