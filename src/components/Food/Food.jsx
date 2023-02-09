//Import React
import React from "react";
//Import CSS
import "./food.css";

export default function Countries(props) {
  const foods = props.foods?.map((food, index) => {
    return (
      <div className="food" key={index}>
        <div className="food-description">
          <p className="food-title">{food.title}</p>
          <p className="food-description-text">{food.description}</p>
         
         
        </div>
        <img src={food.images} alt="" />
      
      </div>
    );
});
return <div className="foods-list-main">{foods}</div>;
}