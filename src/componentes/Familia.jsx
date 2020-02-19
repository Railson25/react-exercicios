import React from 'react'
import { filhosComProps } from '../utils/utils'
export default props => 

    <div>
        <h1>Família</h1>
            {filhosComProps(props)}
        {/*Precisa usar chaves para chamar a função
            em JavaScript*/}


        {/*React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props})
        utilizando a função map para percorer os elementos
        gerando clone para conseguir passar as props */ }               
    </div>