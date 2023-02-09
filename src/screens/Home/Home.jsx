//Import Modules
import React from "react";
//Import Components
import Food from "../../components/Food/Food.jsx";
//Import Context
//Import CSS
import "./home.css";
//Export Home Function
export default function Home({foodData}) {
 
  return (
    <div className="home-container">
      <img src="/image/bg-home_4.png" className="home-banner-img" alt="" />
      <div>
        <Food foods={foodData} />
      </div>
    </div>
  );
}
