import React from 'react'
import Filho from './Filho'

export default props => {
    const notificarSaidaDoFilho = lugar => alert(`Liberado para ${lugar}`)
   {/*Mostrando o que será exibido
        utilizando a Crazy para interpolar uma variável*/} 
    return (
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
        //passando uma função como props com parametropara o Filho
    )    
}