import  React, { Component } from 'react' 

export default class Contador extends Component {
    maisUm() {
        this.props.numero++
         // acrescentar uma inidade a props numero 
         //this não está apontando para o Contador 
    }    

    render() {
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                {/* Dispara a função ao clicar */}
                <button>Dec</button>
            </div>
        )
    }
} 