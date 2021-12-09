import { createContext, useState } from "react";
import productData from "./components/productdata";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  

  const getUser = () => {
    let user = sessionStorage.getItem('user');
  if(user){
    return true;

  }else{
    return false;
  }
}

  const [loggedin, setLoggedin] = useState(getUser());
  return (
    <ProductContext.Provider value={{ productData , loggedin, setLoggedin}}>
      {props.children}
    </ProductContext.Provider>
  );
};
