import React from 'react';
import ProductList from './components/products/listproduct';
import ProductView from './containers/product/productView/ProductView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Aux from './hoc/Aux/Aux';

function App(props:any) {
  return (
    <Aux>
      <Navigation/>
<BrowserRouter>
      <Routes>
          <Route path="/"  element={<ProductList/>}/>
          <Route path="/view/:id" element={<ProductView/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </Aux>
  );
}

export default App;
