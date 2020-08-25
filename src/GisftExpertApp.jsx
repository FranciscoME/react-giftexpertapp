import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One punch"]);
  //const categories = ["One punch","Samuray x","Dragon ball "]

  // const handleAdd=()=>{
  //     //setCategories(["Hunter", ...categories])
  //     setCategories(categories=>["Hunter",...categories])
  // }

  return (
    <>
      <h2>Hift Expert</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
}
