import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';


export default function CartTotals({value}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return(
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>

                        <h5>
                            <span  className='text-title'><strong>Subtotal : </strong></span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className='text-title'><strong>Tax (.070%) : </strong></span>
                            <strong>$ {cartTax}</strong>
                        </h5>

                        <h5>
                            <span className='text-title'><strong>Total : </strong></span>
                            <strong>$ {cartTotal}</strong>
                        </h5>

                        <div>
                            <Link to='/'>
                                <ButtonContainer>Continue Shopping</ButtonContainer>
                            </Link>
                        </div>
                        
                        <div>
                            <Link to='/'>
                                <button className='btn btn-outline-danger mb-3 px-5'
                                    type ='button'
                                    onClick={() => clearCart()}>
                                    Delete All Item
                                </button> 
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}