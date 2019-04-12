import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, rating, inCart} = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className='card'>
                    <ProductConsumer>
                        {(value) => (
                        <div className='img-container' onClick={() => value.handleDetail(id)}>
                            <Link to='/details'>
                                <img src={img} alt='product' className='card-img-top p-5'></img>
                            </Link>
                            <button className='cart-btn' disabled={inCart ? true : false} onClick={() =>{
                                value.addToCart(id);
                            }}>
                                {inCart ? (<p className='text-capitalize mb-0' disabled>
                                {" "}
                                in cart
                                </p>
                                ):(
                                    <i className='fas fa-cart-plus' />
                                )}
                            </button>
                        </div>)}
                    </ProductConsumer>
                    <div className='card-footer'>
                        <div className='mb-0'>{title}</div>
                        <div className='mb-0'>Rating - {rating} out of 5</div>
                        <h5 className='font-italic mb-0'>
                            <span className='mr-1'>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>

        );
    }
}

const ProductWrapper = styled.div`
.img-container{
    position:relative;
    overflow:hidden;
}

.cart-btn{
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background: var(--darkGray);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0 0 0.5rem 0;
}

.cart-btn:hover{
    color: var(--divGray);
    cursor: pointer;
}
`;

