import React from 'react';
import Card from './Card';
import './Card.css';

const CardList = ({ presentedData }) => {
    return (
        <div id="cardHolder">
            {
                /* Function that maps each robot onto a card */
                presentedData.map((data) => {
                    return (
                        <Card
                            key={data.url} // Key prop is suggested when using an iterator in React
                            name={data.name}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;