import React, { Component } from 'react';
import styled from 'styled-components';

export default class Product extends Component {
    render() {
        return (
            <ProductWrapper>
                <div>
                    <div className='section-header'>Product</div>
                </div>
            </ProductWrapper>

        );
    }
}

const ProductWrapper = styled.section`
.section-header{
    text-align: center;
    font-size: 1.75rem;
}
`;

