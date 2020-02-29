import React, { useState } from 'react'

export default props => {
    //operador de desestruturação
    //passando uma variável e uma função para alterar a variável
    //passando o valor inicial da variável pro state
    // pode passar string , obejeto , valor booleano
    const[contador, setContador] = useState(100)
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>inc</button>
            <button onClick={() => setContador(contador - 1)}>dec</button>
        </div>
    )
}