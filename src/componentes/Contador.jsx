import  React, { Component } from 'react' 

export default class Contador extends Component {    
    
    maisUm = () => {
        this.props.numero++
        
    
    render() {
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}

/*Solução  01 - Bind
constructor(props){
    super(props)
    this.maisUm = this.maisUm.bind(this)
    no contexto do construtor sendo chamado sempre o this
    vai apontar para uma instancia de classe
*/

//Solução 02 - onClick
//<button onClick={() => this.maisUm()}>Inc</button>
//utillizar arrow functions e chamar a função
// o this apontará para a classe

//Solução 03 
//maisUm = () => {
//    this.props.numero++
//} 
// tranformar a função maisUm em arrow   
