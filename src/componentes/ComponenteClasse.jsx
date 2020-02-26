import React, { Component } from 'react'

export default class ComponenteClasse extends Component {
    render() {
        return (
            <h1>{this.props.valor}</h1>
            //acessando props de uma classe utiliza 
            // a palavra THIS  
            //<h1>{this.props.valor || 'Padrão'}</h1> 
            // nesse caso se nao passar nada nas props
            // ele renderiza o Padrao 
        )
    }
}