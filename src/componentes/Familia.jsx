import React from 'react'

export default props => 

    <div>
        <h1>Família</h1>
        {React.cloneElement(props.children, { ...props })} 
        {/* Passar clone criando um obejeto  para passar 
            todas as props que você recebeu*/}      
    </div>

    //<div>
    //    <h1>Família</h1>
    //    {React.cloneElement(props.children, props)} 
    //    {/* Passar todas as props sem especificar */}      
    //</div>


   // <div>
   //     <h1>Família</h1>
   //     {React.cloneElement(props.children,
   //         { sobrenome : props.sobrenome })}
   //     {/*O sobrenome que recebe via Propriedade 
   //     Passa como parametro para o componente
   //        que está sendo clonado*/}    
   // </div>
