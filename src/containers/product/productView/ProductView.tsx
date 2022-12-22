import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductView.css'
const ProductView = (props:any) => {

  const param = useParams();
  type User = typeof initUser;
  const initUser = {image: '',title: '',price: '',description: '',}

  const [product, setProduct] = useState<User>({image: '',title: '',price: '',description: ''});
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+param.id).then(response => {
      setProduct(response.data);
  }).catch(error => {
      console.log(error);
  })
  }, [])
  


  
  return (
    <div>
      <h2>Product Card</h2>

      <div className="card">
        <img src={product.image} alt="Denim Jeans" />
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p>
         {product.description}
        </p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
};

export default ProductView;
