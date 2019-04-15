import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button';
import styled from 'styled-components';


export default function CartTotals({value}) {
    const{cartTotal, clearCart} = value;
    return(
        <TotalsWrapper>
            <div className='totals'>
                <React.Fragment>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>

                                <h5>
                                    <span  className='text-title'><strong>Total : </strong></span>
                                    <strong>$ {cartTotal}</strong>
                                </h5>

                                <div>
                                    <Link to='/'>
                                        <ButtonContainer>Continue Shopping</ButtonContainer>
                                    </Link>
                                </div>
                                
                                <div>
                                    <Link to='/'>
                                        <button className='btn btn-outline-danger mt-2 px-5'
                                            type ='button'
                                            onClick={() => clearCart()}>
                                            Delete All Item
                                        </button> 
                                    </Link>
                                </div>

                                <div>
                                    <Link className='btn'>
                                        <ButtonContainer>Submit Order</ButtonContainer>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        </TotalsWrapper>
    )
}

const TotalsWrapper = styled.div`

.btn{
    border-radius: 0.5rem;
}

`