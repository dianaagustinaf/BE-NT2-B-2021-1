import React from "react";

const saludo = ({nombre}) => {
    return (
        <h1>Hola! Soy {nombre}</h1>
    )
}

const saludo2 = function({nombre}){
    return (
        <h1>Hola! Soy {nombre}</h1>
    )
}

const saludo3 = ({nombre}) => (<h1>Hola soy {nombre}</h1>)


export default saludo;