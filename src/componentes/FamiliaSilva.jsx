import React from 'react'

import Membro from './Membro'

export default props => 
    <div>
        {/* Comunicação direta 
           o pai tem uma referencia para o componente filho
            e você passa os dados via propriedade */ }
        <Membro nome='Rafael' sobrenome={props.sobrenome} />
        <Membro nome='Daniela' sobrenome={props.sobrenome} />
        <Membro nome='Pedro' sobrenome={props.sobrenome} />
        <Membro nome='Ana' sobrenome={props.sobrenome} />
    </div>

//Acessando um componente através de outro Componente