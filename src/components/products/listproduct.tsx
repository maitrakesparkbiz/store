import React, { Component } from 'react';
import axios from 'axios';
import Product from '../../containers/product/product';
import ProdictView from '../../containers/product/productView/ProductView';

class ProductList extends Component{

    state = {
        products: {},
        selectedID:"",
        sortBy:"acs",
        limit:5,
    }
    
    componentDidMount(): void {
        
        if(Object.keys(this.state.products).length === 0){
            axios.get("https://fakestoreapi.com/products?sort="+this.state.limit+"&limit="+this.state.limit).then(response => {
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

    sortByClickhandler = (event:any) => {
        this.setState({
            sortBy: event.target.value
                    });     
        
        axios.get('https://fakestoreapi.com/products?sort='+event.target.value+"&limit="+this.state.limit).then(response => {
            this.setState({
                products: response.data
            });
        }).catch(error => {
            console.log(error);
            
        })
        }


        limitClickhandler = (event:any) => {
            this.setState({
                limit: event.target.value
                        });     
            
            axios.get('https://fakestoreapi.com/products?limit='+event.target.value+"&sort="+this.state.sortBy).then(response => {
                this.setState({
                    products: response.data
                });
            }).catch(error => {
                console.log(error);
                
            })
            }


    render() {
        return (
            <div className="App">
                <div >
                    <select onClick={this.sortByClickhandler}>
                        <option value="asc">Asc</option>
                        <option value="desc">Desc</option>
                    </select>
                    <select onClick={this.limitClickhandler}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
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
