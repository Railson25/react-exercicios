import ReactDOM from 'react-dom'
import React from 'react'

//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <Familia>
        <Membro nome='Andre' sobrenome='Pereira' />
        <Membro nome='Mariana' sobrenome='Pereira' />
    </Familia>
    <Familia>
        <Membro nome='Bia' sobrenome='Martins' />
        <Membro nome='Gustavo' sobrenome='Martins' />
    </Familia>
    {/*<FamiliaSilva />
     <MultiElementos  />
     <CompA valor='Olá eu sou A' />
    <CompB valor='Olá eu sou B' />
    <PrimeiroComponente valor='Bom dia !'/> */}
</div>
, elemento)

//Para instancias diretamente no componente 
//Precisa importa o Componente 