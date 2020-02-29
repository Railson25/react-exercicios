import  React, { Component } from 'react' 

export default class Contador extends Component {    
    state = {
        //numero: 0
        numero: this.props.numeroInicial
    }

    
    maisUm = () => {
        //escolha apenas os ementos que quer modificar
        //this.setState({ numero: this.state.numero +1 })
        //this.state.numero = this.state.numero +1
        this.alterarNumero(1)
    }

    
    menosUm = () => {
        //this.setState({ numero: this.state.numero - 1 })
        this.alterarNumero(-1)
    }

    // colcoando tudo no mesmo método
    // se tiver apenas um parametro os () sao opcionais   
    alterarNumero = (diferenca) => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                {/* utilizar função arrow passando o parametro*/}
                <button onClick={() => this.alterarNumero(10)}>Dec</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec</button>
            </div>
        )
    }
} 

//Cada componente tem seu proprio estado