import React from 'react'
import { useState, useEffect } from 'react'

const Cambiador = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (count === 0) return; //useEffect se ejecuta pero no genera reacción
        document.title = count;
    }, [count]); //con esto indicamos que cuando count se modifique, se ejecute el useEffect (en el titulo)
    return (
        <div>
            <h1>{count}</h1>
            <h2>Step: {step}</h2>
            <button
                onClick={() => {
                    setCount(count + step);
                }}>
                Incrementar + 1
            </button>
            <button
                onClick={() => {
                    setStep(step + 1);
                }}>
                Incrementar step + 1
            </button>
        </div>
    )
}

export default Cambiador

//Array de dependencias: Dentro de colocan los elementos que al cambiar,
//provocarán la ejecucion del useEffect
//El array se recalcula con cada renderizado
//En caso de querer ejecutar el useEffect solo una vez, podemos colocar
//un valor de dependencias fijo
//Suelen ponerse props o un estado dentro de las dependencias