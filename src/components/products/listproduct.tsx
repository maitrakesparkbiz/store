import React, { Component } from 'react';
import axios from 'axios';
import Product from '../../containers/product/product';
import ProdictView from '../../containers/product/productView/ProductView';

class ProductList extends Component{

    state = {
        products: {},
        selectedID:""
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

    selectproductHander = (product:number) => {
        this.setState({
            selectedID: product
        });
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

                           
                            <Product key={data[0]} data={data[1]} id={data[0]} click={()=> this.selectproductHander(+data[0])}/>

                )
                
            }) 
        }
    </tbody>
        </table>
            </div>)
        }
}

export default ProductList;
