import React from 'react';

const Button = ({ buttonClick, name }) => {
    return (
        <button className="pa3 ba b--washed-yellow" onClick={ buttonClick } type="button">{ name }</button>
    );
}

export default Button;