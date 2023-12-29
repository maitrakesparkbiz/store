import React, { Component } from 'react';
import axios from 'axios';
import Product from '../../containers/product/product';
import ProdictView from '../../containers/product/productView/ProductView';
import Pagination from '../../containers/pagination/pagination';
import ProductView from '../../containers/product/productView/ProductView'
import Loader from '../UI/Loader/Loader';
class ProductList extends Component{

    state = {
        products: {},
        selectedID:"",
        sortBy:"acs",
        limit:5,
        total:0,
        currentPage:1,
        showModel:false,
        loading: false
    }
    
    componentDidMount(): void {
        
        if(Object.keys(this.state.products).length === 0){
            this.setState({
                loading: true
            });       
            axios.get("https://fakestoreapi.com/products?sort="+this.state.sortBy+"&limit="+this.state.limit).then(response => {
                this.setState({
                                products: response.data,
                                loading: false
                            });       
            }).catch(error => {
                console.log(error);
                
            })
            axios.get("https://fakestoreapi.com/products").then(response => {
                this.setState({
                    total: Object.keys(response.data).length
                });
            }).catch(error => {
                console.log(error);
                
            })
        }
    }

    selectproductHander = (product:number) => {
        console.log("product",product);
        
        this.setState({
            selectedID: product,
            showModel:true
        });
    }

    modelCloseHander = () => {
        this.setState({
            selectedID:0 ,
            showModel:false
        });
    }

    sortByClickhandler = (event:any) => {
        this.setState({
            loading: true
        });  
        this.setState({
            sortBy: event.target.value
                    });     
        
        axios.get('https://fakestoreapi.com/products?sort='+event.target.value+"&limit="+this.state.limit).then(response => {
            this.setState({
                products: response.data,
                loading: false
            });
        }).catch(error => {
            console.log(error);
            
        })
        }


        limitClickhandler = (event:any) => {
            this.setState({
                loading: true
            });  
            this.setState({
                limit: event.target.value
                        });     
            
            axios.get('https://fakestoreapi.com/products?limit='+event.target.value+"&sort="+this.state.sortBy).then(response => {
                this.setState({
                    products: response.data,
                    loading: false
                });
            }).catch(error => {
                console.log(error);
                
            })
            }

        paginateClickhandler = (id:any) => {
            this.setState({
                loading: true
            });  

            axios.get("https://fakestoreapi.com/products?sort="+this.state.sortBy).then(response => {
                
                    let productsPaginated: unknown[] =[];
                    Object.entries(response.data).forEach(([key, value]) => {
                        const high=id*this.state.limit;
                        const low=high-this.state.limit;
                        if(+key>=low && +key<high){
                            productsPaginated.push(value);
                        }
                    })
                    this.setState({
                        products: {...productsPaginated},
                        loading: false
                    });    
                    console.log(this.state.products);
                    
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
                            <Product key={data[0]} data={data[1]} id={data[0]} click={this.selectproductHander}/>
                        )
                    }) 
                }    
    </tbody>
        </table>
        {
            this.state.showModel?
            <ProductView id={this.state.selectedID} closeModel={this.modelCloseHander}/>
            :null
        }

        {
            this.state.loading?
            <Loader/>
            :null
        }

        <Pagination total={this.state.total} limit={this.state.limit} currentPage={this.state.currentPage} paginate={this.paginateClickhandler}/>
            </div>
            )
        }
}

export default ProductList;
