import ReactDOM from 'react-dom'
import React from 'react'

//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import { CompA, CompB } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <MultiElementos  />
    {/* <CompA valor='Olá eu sou A' />
    <CompB valor='Olá eu sou B' />
    <PrimeiroComponente valor='Bom dia !'/> */}
</div>
, elemento)