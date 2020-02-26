import React from 'react'

export default props =>
<div>
    <button onClick={() => props.notificarSaida('shopping')} >
        Vou Sair
    </button>
    {/*Passando uma função via props e passando os parametros */}
</div>