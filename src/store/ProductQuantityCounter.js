import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    valueChange: false,
    productTotalPriceinfo: {
      totalPrirce: "",
      numberOfProducts: "",
    },
  },
  reducers: {
    //action => action handlers
    increaseCounter: (state) => {
      if (state.count < 10) state.count += 1;
    },

    decreaseCounter: (state) => {
      if (state.count > 1) state.count -= 1;
    },
    setCounterValue: (state, action) => {
      state.count = action.payload;
    },
    setCounterValueChanged: (state, action) => {
      state.valueChange = action.payload.value;
    },

    setTotalProductPrice: (state, action) => {
      state.productTotalPriceinfo.totalPrirce = action.payload.totalPrirce;
      state.productTotalPriceinfo.numberOfProducts =
        action.payload.numberOfProducts;
    },
  },
});
export const selectCount = (state) => state.entities.quantityCounter.count;
export const getTotalProductPrice = (state) =>
  state.entities.quantityCounter.productTotalPriceinfo.totalPrirce;
export const getNumberofProduct = (state) =>
  state.entities.quantityCounter.productTotalPriceinfo.numberOfProducts;

export const selectIsValueChanged = (state) =>
  state.entities.quantityCounter.valueChange;
export const {
  increaseCounter,
  decreaseCounter,
  setCounterValue,
  setCounterValueChanged,
  setTotalProductPrice,
} = slice.actions;
export default slice.reducer;
