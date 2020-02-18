import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products:storeProducts, 
        detailProduct:detailProduct
    }
    handleDetail = ()=>
    {
        console.log('hello from detail');
    }
    
    adtoCart = ()=>
    {
        console.log('hello from add to cart');
    }
    render() 
    {
        return (
            <ProductContext.Provider value ={{
                products: this.state.products,
                handleDetail:this.handleDetail,
                addtpCart:this.addtpCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export 
 {ProductProvider,ProductConsumer};