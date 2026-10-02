import {useState} from 'react';
function Car (props) {

    //VARIABLE PARA SABER ESTADO DEL COCHE
    const [estado,setEstado] = useState(false);
    const [velocidad,setVelocidad] = useState(0);

    let coche ={
        marca : props.marca,
        modelo: props.modelo,
        velocidadmaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion)
    }

    //METODO PARA DIBUJAR HTML DINAMICO
    const comprobarEstado = () => {
        if(estado == true){
            return(<h1 style={{color:"blue"}}>Arrancado</h1>)
        }else{
            return(<h1 style={{color:"red"}}>Apagado</h1>)


        }
    }

    const acelerar = () => {
        if (estado == false){
            alert("El coche está apagado, adonde vas???")
            setVelocidad(0);
        }else{
            if(velocidad < coche.velocidadmaxima){
                setVelocidad(velocidad + coche.aceleracion)
            }else{
                setVelocidad(0)
            }
        }
    }


    return(

        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
            <h2 style={{color:"fuchsia"}}>{velocidad}</h2>
            { comprobarEstado() }
            <button onClick={() => {
                setEstado(!estado)
            }}>On/Off Coche</button>
            <button onClick={() => 
                acelerar()
            }>Acelerar</button>

        </div>

    )
}

export default Car