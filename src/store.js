import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products: [],
        detailProduct: detailProduct,
        cart: [],
        cartTotal: 0,
    };

    componentDidMount() {
        this.setProducts()
    };

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
            
        });
        this.setState(() =>{
            return {products:tempProducts}
        });
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

    addToCart = id =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
            return {products: tempProducts,cart:[...this.state.cart, product]};
        },
        () => {
            this.Total()
        }
      );
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id)
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(
            ()=>{
                return{cart:[...tempCart]};
            },
            ()=>{
                this.Total();
            }
        );
    };

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if(product.count === 0){
            this.deleteItem(id)
        }
        else{
            product.total = product.count * product.price;
            this.setState(
                ()=>{
                    return{cart:[...tempCart]};
                },
                ()=>{
                    this.Total();
                }
            );
        }
    };

    deleteItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() =>{
            return{
                cart:[...tempCart],
                products: [...tempProducts]
            };
        },
        () => {
            this.Total();
             }
        );
    };

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };

        },() =>{
            this.setProducts();
            this.Total();
        });
    };

    Total = () => {
        let Total = 0;
        this.state.cart.map(item => (Total += item.total));
        this.setState(() => {
            return{
                cartTotal:Total

            }
        })
    }
   
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                increment:this.increment,
                decrement:this.decrement,
                deleteItem:this.deleteItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}

            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};