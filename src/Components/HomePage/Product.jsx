import React from "react";

import Button from "@material-ui/core/Button";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { productAdded, getProducts } from "../../store/CartProducts";

function Product({ products }) {
  const dispatch = useDispatch();
  const productData = useSelector(getProducts);
  console.log("cart Products", productData);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-image">
            <img src={product.productImage} alt=" not found" />
          </div>
          <div className="product-details">
            <div className="product-name">{product.title}</div>
            <div className="product-price">{product.price}</div>
          </div>

          <Button
            variant="contained"
            color="secondary"
            className="add-to-cart"
            onClick={() => {
              let filter = productData.filter((pro) => pro.id === product.id);
              console.log(filter);
              if (filter.length === 0) {
                dispatch(
                  productAdded({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.productImage,
                  })
                );
              }
            }}
          >
            {" "}
            Add to cart{" "}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Product;
