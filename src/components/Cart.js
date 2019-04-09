import React, { Component } from 'react';
import styled from 'styled-components';

export default class Cart extends Component {
    render() {
        return (
            <CartWrapper>
                <div>
                    <div className='section-header'>Cart</div>
                </div>
            </CartWrapper>

        );
    }
}

const CartWrapper = styled.section`
.section-header{
    text-align: center;
    font-size: 1.75rem;
}
`;