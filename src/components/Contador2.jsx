import React from 'react'
import { useState, useEffect } from 'react'

const Cambiador2 = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        if (count === 0) return;  //si count es cero, no ejecutar el useEffect aún
        document.title = count;
    })
  return (
    <div>
        <h1>{count}</h1>
        <button
        onClick={()=>{
            setCount(count+1);
        }}>
            + 1
        </button>
        <button
        onClick={()=>{
            setCount(count+2);
        }}>
            + 2
        </button>
        <button
        onClick={()=>{
            setCount(count+3);
        }}>
            + 3
        </button>
    </div>
  )
}

export default Cambiador2

//Es una accion secundaria, presenta resultado en la interfaz
//Cada vez que un estado cambia, puede generar un efecto
//Se produce en consecuencia a otra acción
//Vinculamos count a un side effect, haciendo que la accion empleada en cualquier
//boton, genere los cambios en la pantalla como efecto secundario
//