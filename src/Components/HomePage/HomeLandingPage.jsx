import React, { useState } from "react";

import NavBarHome from "./NavBarHome";
import Product from "./Product";
import { products } from "../../ProductData";
import "./Product.css";
import { useDispatch } from "react-redux";
import { productAdded } from "../../store/CartProducts";
const vegFilter = products.filter(
  (pro) => pro.productCatagorey === "Vegetables"
);
const FurFilter = products.filter((pro) => pro.productCatagorey === "Furits");
const SnackFilter = products.filter((pro) => pro.productCatagorey === "Snacks");

function HomeLandingPage(props) {
  const dispatch = useDispatch();

  useState(() => {
    dispatch(
      productAdded({
        id: FurFilter[1].id,
        name: FurFilter[1].title,
        price: FurFilter[1].price,
        image: FurFilter[1].productImage,
      })
    );
    dispatch(
      productAdded({
        id: vegFilter[1].id,
        name: vegFilter[1].title,
        price: vegFilter[1].price,
        image: vegFilter[1].productImage,
      })
    );
    dispatch(
      productAdded({
        id: SnackFilter[1].id,
        name: SnackFilter[1].title,
        price: SnackFilter[1].price,
        image: SnackFilter[1].productImage,
      })
    );
  }, []);
  return (
    <>
      <NavBarHome />
      <div className="products">
        <div style={{ backgroundColor: "green", flex: 1 }}>
          <p style={{ marginTop: 12, color: "white", fontWeight: "bold" }}>
            {" "}
            Vagetable Products{" "}
          </p>
        </div>

        <Product products={vegFilter} />

        <div style={{ backgroundColor: "Red", flex: 1 }}>
          <p style={{ marginTop: 12, color: "white", fontWeight: "bold" }}>
            {" "}
            Furit Products{" "}
          </p>
        </div>

        <Product products={FurFilter} />

        <div style={{ backgroundColor: "Orange", flex: 1 }}>
          <p style={{ marginTop: 12, color: "white", fontWeight: "bold" }}>
            {" "}
            Snacks Products{" "}
          </p>
        </div>

        <Product products={SnackFilter} />
      </div>
    </>
  );
}

export default HomeLandingPage;
