import SaludoHijo from './SaludoHijo';

function SaludoPadre() {

    //PARA MANDAR METODOS AL HIJO COMO PROPS
    const metodoPadre = (nombre, id) => {
        console.log("Yo soy tu padre: " + nombre + " con id: " + id)    }

    return(
        <div>
            <h1>Saludo Padre</h1>
            <SaludoHijo id="1" metodoPadre={metodoPadre}/>
        </div>
    )

}

export default SaludoPadre;