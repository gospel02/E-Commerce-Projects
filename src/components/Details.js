import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const{id, img, category, description, rating, price, title, inCart} = value.detailProduct;
                    return(
                        <div className='container py-5'>

                            {/*title*/}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* product info */}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className="img-fluid" alt='product'/>
                                </div>

                                {/* product text */}
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

                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>Return To Products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onclick={() =>{
                                                value.addToCart(id)
                                            }}>
                                            {inCart ? 'inCart' :  <i className='fas fa-cart-arrow-down' />}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    );
                }}
                
            </ProductConsumer>

        );
    }
}