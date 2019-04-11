import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    };
    
    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        });
        
    };
    addToCart = () =>{
        console.log('hello from add to cart');
    };
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
            }}>
                {this.props.children}

            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};