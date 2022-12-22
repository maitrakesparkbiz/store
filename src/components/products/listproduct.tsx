import React, { Component } from 'react';
import axios from 'axios';
import Product from '../../containers/product/product';

class ProductList extends Component{

    state = {
        products: {}
    }
    
    componentDidMount(): void {
        
        if(Object.keys(this.state.products).length === 0){
            axios.get('https://fakestoreapi.com/products').then(response => {
                this.setState({
                                products: response.data
                            });     
                                
            }).catch(error => {
                console.log(error);
                
            })
        }
    }

    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                {
                    Object.entries(this.state.products).map((data) => {
                        return (

                            <Product data={data[1]} />
                )
                
            }) 
        }
    </tbody>
        </table>
            </div>)
        }
}

export default ProductList;
