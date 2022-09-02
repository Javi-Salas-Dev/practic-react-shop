import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

//se saca el fecth de los datos del UseEffec
  async function fetchData() {
    const response = await axios.get(API + '?limit=40&offset=0');    // nos ayuda a limitar la cantidad de items
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData();	
  }, []);

  return products;
};

export default useGetProducts;