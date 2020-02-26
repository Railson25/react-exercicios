import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
        {/*Tranformanddo os itens em elementos jsx */}
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
        /*Chamando a função e passar a lista . */
    )
}