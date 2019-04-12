import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
                
                <Link to="/">
                    <ButtonContainer>
                        <span>
                            <i className='fas fa-home' />
                        </span>
                    </ButtonContainer> 
                </Link>
                

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Stor
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
                            Cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--darkGray);
    font-size: 1.4rem;
}
    
&:hover{
    .nav-link{
        color: var(--dimGray);
    }
}

.nav-title{
    color: var(--mainWhite)!important;
    font-size: 2.0rem;
}
.home{
    font-size: 1.4rem;
}
`;