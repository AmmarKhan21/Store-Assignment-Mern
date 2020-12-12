import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const UpdateProduct = (products, action) => {
  const index = products.findIndex(
    (product) => product.id === action.payload.id
  );

  const unitPrice = action.payload.unitprice;
  products[index].totalSignleProductPrice = action.payload.quantity * unitPrice;
};

const slice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    //action => action handlers
    productAdded: (products, action) => {
      const filterArray = products.filter(
        (pro) => pro.id === action.payload.id
      );
      if (filterArray.length === 0) {
        products.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          totalSignleProductPrice: action.payload.price,
          image: action.payload.image,
        });
      }
    },

    productDeleted: (products, action) => {
      const index = products.findIndex(
        (product) => product.id === action.payload.id
      );

      products.splice(index, 1);
    },

    productUpdated: (products, action) => {
      UpdateProduct(products, action);
    },

    productsAllDeleted: (products, actions) => {
      products.splice(0, products.length + 1);
    },
  },
});

export const getProducts = (state) => state.entities.cartProducts;

export const getTotalproductPrice = (state) =>
  state.entities.cartProducts.reduce(function (previousPrice, nextPrice) {
    return previousPrice + nextPrice.totalSignleProductPrice;
  }, 0);

export const getTotalDiscountPrice = (state) =>
  state.entities.cartProducts.reduce(function (previousPrice, nextPrice) {
    return previousPrice + nextPrice.totalPriceAfterdiscount;
  }, 0);

export const {
  productAdded,
  productDeleted,
  productUpdated,
  productsAllDeleted,
} = slice.actions;
export default slice.reducer;
