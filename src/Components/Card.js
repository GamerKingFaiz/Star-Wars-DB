import React from 'react';

const Card = ({ name, click }) => {
    return (
        <div className="minW bg-SW-yellow tc br3 pa3 ma2 grow bw2 shadow-5" onClick={ click }>
            <div id="info">
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;