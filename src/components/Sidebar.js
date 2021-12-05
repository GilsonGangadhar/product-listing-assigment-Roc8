import React, { useEffect, useState } from "react";
import "./sidebar.scss";
// import Data from "../data.json";

function Sidebar({changeFilters}) {
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [Gender, setGender] = useState([]);


  useEffect(() => {
    changeFilters({type: 'size', value: size});
  }, [size])

  useEffect(() => {
    changeFilters({type: 'brand', value: brand});
  }, [brand])


  useEffect(() => {
    changeFilters({type: 'gender', value: Gender});
  }, [Gender])

  const handleSize = (e) => {
    if (size.includes(e.target.value)) {
      setSize((prevState) => prevState.filter((x) => x !== e.target.value));
    } else {
      setSize([...size, e.target.value]);
    }
  };

  const handleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand((prevState) => prevState.filter((y) => y !== e.target.value));
    } else {
      setBrand([...brand, e.target.value]);
    }
  };

  const handleGender = (e) => {
    if (Gender.includes(e.target.value)) {
      setGender((prevState) =>
        prevState.filter((item) => item != e.target.value)
      );
    } else {
      setGender([...Gender, e.target.value]);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__contents">
        <div className="sidebar__size">
          <h4>Size</h4>
          {["S", "M", "L", "XL", "XXL"].map((item, i) => (
            <div className="sidebar__sizeContents" key={i}>
              <p>{item}</p>
              <input type="checkbox" value={item} onChange={handleSize} />
            </div>
          ))}
        </div>

        <div className="sidebar__brand">
          <h4>Brands</h4>
          {["Roadster", "Under Armour", "Seven Rocks", "Puma"].map(
            (brand, i) => (
              <div className="sidebar__brandContents" key={i}>
                <p>{brand}</p>
                <input type="checkbox" value={brand} onChange={handleBrand} />
              </div>
            )
          )}
        </div>

        <div className="sidebar__Gender">
          <h4>Ideal For</h4>
          {["Male", "Female", "Kids"].map((gender, i) => (
            <div className="sidebar__GenderContents" key={i}>
              <p>{gender}</p>
              <input type="checkbox" value={gender} onChange={handleGender} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
