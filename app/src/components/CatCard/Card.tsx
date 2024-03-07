"use client";

import { useState, useEffect } from "react";
import Cat from "../../models/Cat";

export default function Card() {
  const [cat, setCat] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  async function getCat() {
    const response = await fetch("/api/cats/read");
    const catData = await response.json();
    console.log(catData);
  }

  async function updateCat(id: string, data: Cat) {
    const response = await fetch(`/api/cats/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const catData = await response.json();
    console.log(catData);
    return updateCat;
  }

  useEffect(() => {
    getCat();

  }, []);

  function handleLike() {

  }

  function handleDislike() {

  }

  function nextCat() {
     if (currentCatIndex === cat.length - 1) {
      setCurrentCatIndex(0);
    } else {
      setCurrentCatIndex(currentCatIndex + 1);
    }
  }

  return (
    <div className="cat-card">
      <h2>hello world</h2>
      <img></img>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <button onClick={nextCat}>Next Cat</button>      
    </div>
  );
}
