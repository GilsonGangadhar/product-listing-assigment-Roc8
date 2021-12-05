import React, { useEffect, useState } from "react";
import "./home.scss";
import Data from "../data.json";

function Home({ sizeArr, brandArr, genderArr }) {
  const [products, setProducts] = useState([]);

  // when none of the filters are selected.

  let filteredObj = {
    size: sizeArr,
    brand: brandArr,
    Ideal_for: genderArr,
  };

  //Filter list by Size Array
  useEffect(() => {
    const filterKeys = Object.keys(filteredObj); // [size, brand, Ideal_for]

    const filteredData = Data.filter((item) => {
      return filterKeys.every((eachKey) => {
        if (!filteredObj[eachKey].length) {
          //size : []
          return true;
        }
        return filteredObj[eachKey].includes(item[eachKey]);
      });
    });

    if (sizeArr.length == 0 && brandArr.length == 0 && genderArr.length == 0) {
      setProducts(Data);
    } else {
      setProducts(filteredData);
    }
  }, [sizeArr, brandArr, genderArr]);

  const handleSort = (ascending) => {
    let items = products;
    const sortProductList = ascending
      ? items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      : items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    setProducts([...sortProductList]);
  };

  return (
    <div className="HomePage">
      <div>
        SORT :<button onClick={() => handleSort(true)}>Low to High</button>
        <button onClick={() => handleSort(false)}>High to Low</button>
      </div>
      <h2 style={{ marginTop: "0" }}>Listing Products</h2>
      <div className="HomePage__listing">
        {products.map(({ id, title, Ideal_for, size, brand, price, image }) => (
          <div className="HomePage__card" key={id}>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>Ideal for : {Ideal_for}</p>
            <p>{brand}</p>
            <p>Size : {size}</p>
            <p>Price : INR : {price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
