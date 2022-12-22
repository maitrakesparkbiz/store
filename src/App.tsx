import React from 'react';
import ProductList from './components/products/listproduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
