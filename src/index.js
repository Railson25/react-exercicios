import ReactDOM from 'react-dom'
import React from 'react'

//mport ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
<div>
    <Contador numero={0} />    
    {/*<ComponenteClasse valor='Sou um componente de Classe!' />
        */}
</div>
, elemento)
