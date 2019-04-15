import React from 'react'
import styled from 'styled-components';

export default function CartColumns() {
    return(
        <ColumnsWrapper>
            <div className='columns'>
                <div className='container-fluid text-center d-none d-lg-block'>
                    <div className='row'>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Product</strong></p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Name of Product</strong></p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Price</strong></p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Quantity</strong></p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Total</strong></p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p><strong>Remove</strong></p>
                        </div>

                    </div>
                </div>
            </div>
        </ColumnsWrapper>
    );
}

const ColumnsWrapper = styled.div`
.header{
    border-bottom:0.1rem solid var(--mainDark)
}

`