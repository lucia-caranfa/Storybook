import React from 'react'
import { useState, useEffect } from 'react'

/*CLEANUP AL OCULTAR CONTADOR

const Cambiador3 = () => {

    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const handleClick = () => 
        setClicks(prevClicks => prevClicks + 1);

        document.addEventListener('click', handleClick);

//Una vez que ocultamos el contador, se borra el evento de clicks y su interacción

        return () => document.removeEventListener('click', handleClick);

    }, []);

    return (
        <div>
            <h1>{clicks}</h1>
        </div>
    )
}

export default Cambiador3*/

const Interval = () => {

    const [count, setCount] = useState(0);
    const [play, setPlay] = useState(true);

//creamos un intervalo a ejecutar cada segundo, al iniciar comienza y al uso del boton se frena o reactiva
//si no generamos un cleanUp, el intervalo se ejecuta por siempre, este oculto o no
//el boton play/pause frena el contador seteando un if condicional y a play como dependencia del useEffect 
    
    useEffect(()=> {
        //if(!play) return; es otra forma de aplicar el if, si no es true, no retornar nada. Si es true, el resto se ejecuta solo
        if (play) {
        const intervalID = setInterval(()=> {
            console.log('interval')
        setCount(prevCount => prevCount + 1)},1000);

        return ()=> clearInterval(intervalID); }//cleanUp generado
    }, [play])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setPlay(!play)}>{play ? "Pause" : "Play"}</button>
        </div>
    )
}

export default Interval

//Dentro de useEffect se puede retornar otra funcion, conocida como cleanUp
//cleanUp sirve para limpiar
//La funcion creada en el return del useEffect se ejecuta antes de utilizar el useEffect
//El cleanUp tambien se ejecuta cuando desmontamos un componente, borra todo lo archivado