// components/ui/CardContainer/CardContainer.tsx
"use client"

import { useState, useEffect } from "react";
import { Cat } from "../../../models/Cat";
import Card from "./Card";

const CardContainer = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  async function getCat() {
    const response = await fetch("/api/cats/read");
    const catData = await response.json();
    setCats(catData);
    setIsLoading(false);
    setCurrentCatIndex(Math.floor(Math.random() * catData.length));
  }

  useEffect(() => {
    getCat();
  }, []);

  function handleLike() {
    // Implement your logic here
  }

  function handleDisLike() {
    // Implement your logic here
  }

  function nextCat() {
    if (currentCatIndex === cats.length - 1) {
      setCurrentCatIndex(0);
    } else {
      setCurrentCatIndex(currentCatIndex + 1);
    }
  }


  return (
    <div className="cat-container">
      {cats.length > 0 && !isLoading ? (
        <>
          <Card
            cat={cats[currentCatIndex]}
            onLike={handleLike}
            onNext={nextCat}
            onDisLike={handleDisLike}
          />
        </>
      ) : (
        <div>
          <h2>Is loading</h2>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
