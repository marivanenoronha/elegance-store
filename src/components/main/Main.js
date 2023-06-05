import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';

function Main() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {

    try {
      const response = await axios.get("http://localhost:3000/products");

      const productsFromApi = response.data

      setProducts(productsFromApi)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <article>
      <div className='main'>
          <div className='products'>
              {products.map((product) => (
                <div className='product' key={product.id}>
                  <img src={product.path} />
                  <h2>{product.name}</h2> 
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
      </div>
    </article>
  )
}

export default Main