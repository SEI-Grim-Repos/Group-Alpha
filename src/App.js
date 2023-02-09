//Import React
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
//Import Components
import Home from "./screens/Home/Home.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Signin from "./screens/Signin/Signin.jsx";
import SignOut from "./screens/Signout/Signout.jsx";
import Countries from "./components/Countries/Countries.jsx";
// Import CSS
import "./App.css";


function App() {
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([])
  const fooDataArray = [
    {
      title: "pizza",
      description: "Flour type 00, 850 grams,Fresh beer yeast, 1.5 grams",
      Countries: "italy",
      images: "https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2019/08/pizza-1200x675.jpg"
    },
    {
      title: "pasta",
      description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs",
      Countries: "bruh",
      images: "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl.jpg",
    },
    {
      title: "jdahsjkasdb",
      description: "dasdjsaodj",
      Countries: "bruh",
      images: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs",
    }
  ]

  useEffect(() => {
    // fetch("http://localhost:4000/foods")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     let fooodData = data.map((food, index) => {
    //       return {
    //         title: food.title,
    //         description: food.description,
    //         Countries: food.Countries,
    //         images: food.images,
    //       };
    //     });
    //     setFoodData(fooodData);
    //     setFilteredFoodData(fooodData);
    //   });
      setFoodData(fooDataArray);
      setFilteredFoodData(fooDataArray);
  }, []);

 
  return (
    <div className="app">
       
        <Routes>
          <Route path="/" element={<Home foodData={fooDataArray}/>} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-out" element={<SignOut />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/technology/:id" element={<Countries />} />
        </Routes>
    </div>
  );
}

export default App;