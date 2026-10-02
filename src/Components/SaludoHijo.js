function SaludoHijo (props) {

    //METODO PARA CAPTURAR EN UNA VARIABLE EL METODO DE PROPS DE PARTE DEL PADRE
    let ejecutarPadre= props.metodoPadre;

    let mensaje = "iker";
    let id = props.id;

    const metodoHijo = () => {
        console.log("ejecutando HIJO")
    }
    return(
        <div>
            <h1>Saludo Hijo</h1>
            <button onClick={() => ejecutarPadre(mensaje, id)}>llamar</button>
        </div>
    )
}

export default SaludoHijo;