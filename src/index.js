import ReactDOM from 'react-dom'
import React from 'react'

//mport ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>

    <Contador numeroInicial={100} />
    {/*iniciar contador a qualquer numero a sua escolha
    <Contador numero={0} /> */}
</div>
, elemento)
