import { createContext } from "react";
import { useState } from "react";
export const ProductCon = createContext();

export const ProductProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <ProductCon.Provider
      value={{
        cartData,
        setCartData,
      }}
    >
      {{ ...children }}
    </ProductCon.Provider>
  );
};
