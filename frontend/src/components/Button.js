import React from 'react';

const Button=({text,...otherprops})=>{
    return <button {...otherprops} >{text}</button>
}

export default Button