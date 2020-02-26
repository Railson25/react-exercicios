import ReactDOM from 'react-dom'
import React from 'react'

//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFunçao from './componentes/ComponenteComFunçao'
//import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <ComponenteClasse valor='Sou um componente de Classe!' />
    {/*<Pai />
    <ComponenteComFunçao />
    <Familia sobrenome='Pereira'>
        <Membro nome='Andre' />
    </Familia>
    <FamiliaSilva sobrenome='Silva'/>
     <MultiElementos  />
     <CompA valor='Olá eu sou A' />
    <CompB valor='Olá eu sou B' />
    <PrimeiroComponente valor='Bom dia !'/> */}
</div>
, elemento)
