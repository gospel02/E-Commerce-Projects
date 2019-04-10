import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
                <Link to="/">
                    <span className='nav-storename'>
                        <i className='fas fa-home' />
                    </span> 
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>
                <span className='nav-title ml-auto'>
                    Super Buy
                </span> 

                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-arrow-down' /> 
                        </span>
                            my cart
                    </ButtonContainer>
                </Link> 
            </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.4rem;
    text-transform: capitalize;
}
.nav-title{
    color: var(--mainWhite)!important;
    font-size: 2.0rem;
    text-transform: capitalize;
}
.nav-storename{
    font-size: 1.4rem;
}
`;