"use client";

import { useState, useEffect } from "react";
import { Cat } from "../../models/Cat";

export default function Card() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  async function getCat() {
    const response = await fetch("/api/cats/read");
    const catData = await response.json();
    console.log(catData);
    setCats(catData)
    setIsLoading(false);
    setCurrentCatIndex(Math.floor(Math.random() * catData.length));
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
  }

  useEffect(() => {
    getCat();

  }, []);

  function handleLike() {
    const updatedCat = {
      ...cats[currentCatIndex],
      swipes: [...cats[currentCatIndex].swipes, ]
    }
    updateCat(cats[currentCatIndex].id, updatedCat);
  }

  function handleDislike() {

  }

  function nextCat() {
     if (currentCatIndex === cats.length - 1) {
      setCurrentCatIndex(0);
    } else {
      setCurrentCatIndex(currentCatIndex + 1);
    }
  }

return (
  <div className="cat-card">
    {cats.length > 0 && !isLoading ? (
      <>
        <h2>{cats[currentCatIndex].name}</h2>
        <p>{cats[currentCatIndex].color}</p>
        <p>{cats[currentCatIndex].age}</p>
        <p>{cats[currentCatIndex].breed}</p>
        <p>{cats[currentCatIndex].gender}</p>
        {/* {cats[currentCatIndex]?.location && <p>{cats[currentCatIndex]?.location}</p>
        } */}
        <button onClick={handleLike}>Like</button>
        <button onClick={handleDislike}>Dislike</button>
        <button onClick={nextCat}>Next Cat</button>
      </>
    ) : (
      <div>
        <h2>Is loading</h2>
      </div>
    )}
  </div>
);
}
