import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
    display: grid;
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const PizzaStyles = styled.div`
    display: grid;
    gap: 1rem;
    @supports not (grid-template-rows: subgrid) {
        grid-template-rows: auto auto 1fr;
    }
    grid-template-rows: subgrid;
    grid-row: span 3;
    h2, p {
        margin: 0;
    }
`;

function SinglePizza({ pizza }) {
    return (
        <PizzaStyles>
            <Link to={`/pizza/${pizza.slug.current}`}>
                <h2>
                    <span className="mark">{pizza.name}</span>
                </h2>
            </Link>
            <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
            <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
        </PizzaStyles>
    );
}

export default function PizzaList({ pizzas }) {
    return <PizzaGridStyles>
        {pizzas.map((pizza) => (
            <SinglePizza key={pizza.id} pizza={pizza} />
        ))}
    </PizzaGridStyles>
}