import React, { useState } from "react";

import { GrSubtract, GrAdd } from "react-icons/gr";
import { IconContext } from "react-icons";

import { productUpdated } from "../../store/CartProducts";
import "./Cart.css";

function CounterCart({ productid, price, dispatch }) {
  const [counterValue, setCounterValue] = useState(1);
  //   const dispatch = useDispatch();

  return (
    <div style={{ flex: 1, flexDirection: "row", flexGrow: 10 }}>
      <span
        className="inc"
        onClick={() => {
          let value = counterValue;
          if (counterValue < 10) {
            setCounterValue(++value);
            dispatch(
              productUpdated({
                id: productid,
                quantity: value,
                unitprice: price,
              })
            );
          }
        }}
      >
        <GrAdd />
      </span>
      <span className="product-quantity"> {counterValue}</span>
      <span
        className="dec"
        onClick={() => {
          let value = counterValue;
          if (counterValue > 1) {
            setCounterValue(--value);
            dispatch(
              productUpdated({
                id: productid,
                quantity: value,
                unitprice: price,
              })
            );
          }
        }}
      >
        <IconContext.Provider
          value={{
            color: "blue",

            size: 30,
          }}
        >
          <GrSubtract />
        </IconContext.Provider>
      </span>
    </div>
  );
}

export default CounterCart;
