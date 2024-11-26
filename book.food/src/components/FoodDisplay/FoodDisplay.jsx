import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodITem/FoodItem";

const FoodDisplay = ({ category }) => {
    
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-displayp-list">
        {food_list.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} descripstion={item.descripstion} price={item.price} image={item.image} />
          }
        
      })}
      </div>
    </div>
  );
};

export default FoodDisplay;
