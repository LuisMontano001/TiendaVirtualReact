import React from 'react';
import axios from 'axios';
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context'
export default class PhoneList extends React.Component {
    state = {
        product: []
    }

componentDidMount() {
    axios.get(`https://localhost:3000/product`)
      .then(res => {
        const product = res.data;
        this.setState({ product });
      })
  }

render() {
    return(
        <React.Fragment>
        <div className = "py-5">
            <div className = "container">
                <Title name = "Nuestros" title = "Productos"></Title>
                    <div className="row">
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>
                                    {
                                        return <Product key ={product.id} product={product} 
                                        />
                                    })
                            }}
                        </ProductConsumer>
                    </div>
            </div>
        </div>
    </React.Fragment>
    //Product
    )
};

}