import React, { Component } from 'react';
import {ProductConsumer} from '../store';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <DetailsWrapper>
                <div className='details'>
                    <ProductConsumer>
                        {value => {
                            const{id, img, category, description, rating, price, title} = value.detailProduct;
                            return(
                                <div className='container py-5'>

                                    <div className='row'>
                                        <div className='col-10 mx-auto text-center my-5'>
                                            <h1>{title}</h1>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-10 mx-auto col-md-6 my-3'>
                                            <img src={img} className="img-fluid" alt='product'/>
                                        </div>

                                        <div className='col-10 mx-auto col-md-6 my-3'>

                                            <span className='font-weight-bold mt-3 mb-0'>Category: </span>
                                            <span className='text-capitalize'>{category}</span>
                                            
                                            <p className='font-weight-bold mt-3 mb-0'>Product Info:</p>
                                            <p className='text-muted lead'>{description}</p>

                                            <p className='font-weight-bold mt-3 mb-0'>Rating: </p> 
                                            <p className='text-muted lead'>{rating} out of 5</p>

                                            <h4>
                                                <strong>Price : <span>$</span>{price}</strong>
                                            </h4>

                                            <div>
                                                <Link to='/'>
                                                    <ButtonContainer>Return To Products</ButtonContainer>
                                                </Link>
                                                <Link to='/cart'>
                                                    <button className='cart-btn'
                                                        onClick={() =>{
                                                            value.addToCart(id);
                                                            }}>
                                                            <i className='fas fa-cart-plus' /> Add To Cart
                                                    </button>   
                                                </Link>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                            );
                        }}
                        
                    </ProductConsumer>
                </div>
            </DetailsWrapper>

        );
    }
}

const DetailsWrapper = styled.div`


.cart-btn{
    padding: 0.2rem 0.4rem;
    background: var(--darkGray);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem;
}
`;