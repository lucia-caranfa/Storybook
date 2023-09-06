import React from 'react'
import { useState, useEffect } from 'react'

const Cambiador = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (count === 0) return;
        document.title = count;
    })
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