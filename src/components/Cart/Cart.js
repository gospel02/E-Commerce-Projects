import React, { Component } from 'react';
import Title from '../Title';
import Columns from './Columns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../store';
import ItemList from './ItemList';
import Total from './Total';


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                                <React.Fragment>
                                    <Title name='your' title='Items In Cart'/>
                                    <Columns /> 
                                    <ItemList value={value} />
                                    <Total value={value} />
                                </React.Fragment>

                            );

                        }else{
                            return <EmptyCart />
                        } 
                    }}
                </ProductConsumer>
       
            </section>

        );
    }
}