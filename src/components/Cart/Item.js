import React from 'react';
import styled from 'styled-components';

export default function Item({item, value}) {
    const {id, title, img, price, total, count} = item;
    const{increment, decrement, deleteItem} = value;
    return (
        <ItemsWrapper>
            <div className='items'>
                <div className='row my-2 text-center'>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <img 
                            src={img} 
                            style={{width:'7rem', height:'auto'}}
                            className='img-fluid' 
                            alt='product' />
                    </div>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <span className='d-lg-none'>Product : </span>
                        {title}
                    </div>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <span className='d-lg-none'>Price : </span>
                        {price}
                    </div>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <div className='d-flex justify-content-center'>
                            <div>
                                <div className='btn btn-quantity mx-1' onClick={()=>decrement(id)}>-</div>
                                <div className='btn btn-quantity mx-1'>{count}</div>
                                <div className='btn btn-quantity mx-1' onClick={()=>increment(id)}>+</div>
                            </div>
                        </div>
                    </div>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <strong> Item Total : ${total}</strong>
                    </div>

                    <div className='eachItem col-10 mx-auto col-lg-2'>
                        <div className='cart-icon' onClick={() =>deleteItem(id)}>
                            <button className='btn btn-outline-danger mt-2 px-5'>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </ItemsWrapper>
    );
}

const ItemsWrapper = styled.div`
.eachItem{
    border-bottom:0.1rem solid var(--mainDark);
}
.btn{
    border-radius: 0.5rem;
}

`