import React from 'react'
import styled from 'styled-components';

export default function CartColumns() {
    return(
        <ColumnsWrapper>
            <div className='columns'>
                <div className='container-fluid text-center d-none d-lg-block'>
                    <div className='row'>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Product</p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Name of Product</p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Price</p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Quantity</p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Total</p>
                        </div>

                        <div className='header col-10 mx-auto col-lg-2'>
                            <p>Remove</p>
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