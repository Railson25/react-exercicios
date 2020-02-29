import React, { useState, useEffect} from 'react'

export default props => {
    const[contador, setContador] = useState(100)
    const[status, setParOuImpar] = useState('Par')

    useEffect(() =>{
        // será chamado sempre que o componente for
        //mutado se tornar visivel/atualizado
        contador % 2 === 0 ? setParOuImpar('Par') :
            setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{status}</h3>
            <button onClick={() => setContador(contador + 1)}>inc</button>
            <button onClick={() => setContador(contador - 1)}>dec</button>
        </div>
    )
}