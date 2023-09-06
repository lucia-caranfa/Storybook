import React from 'react'
import { useState } from 'react'

const Likes = () => {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}> {likes} likes</button>
        </div>
    )
}

export default Likes

//Renderiza los cambios luego de una acción determinada, cambia el estado inicial
//Solo renderiza lo utilizado y aplicado dentro de la función Likes
//El estado siempre esta relacionado con un componente
//useState, useEffect y useContext debe utilizarse siempre dentro de un componente
//Solamente se producen nuevos renderizados cuando el valor inicial cambia
