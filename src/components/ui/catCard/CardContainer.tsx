// components/ui/CardContainer/CardContainer.tsx
"use client";

import { useState, useEffect } from "react";
import { Cat } from "../../../model/Cat";
import Card from "./Card";
import CatDetails from "./catDetails/CatDetails";

const CardContainer = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [moreInfo, setMoreInfo] = useState(false);

  async function getCat() {
    const response = await fetch("/api/cats/read");
    const catData = await response.json();
    setCats(catData);
    setIsLoading(false);
    if (catData.length > 0) {
      setCurrentCatIndex(Math.floor(Math.random() * catData.length));
    }
  }

  useEffect(() => {
    getCat();
  }, []);

  function handleLike() {
    // Implement your logic here
    setMoreInfo(!moreInfo);
  }

  function handleClose() {
    // Implement your logic here
    setMoreInfo(false);
  }

  function handlePrevious() {
    if (currentCatIndex === 0) {
      setCurrentCatIndex(cats.length - 1);
    } else {
      setCurrentCatIndex(currentCatIndex - 1);
    }
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
            handlePrevious={handlePrevious}
          />
          {moreInfo && (
            <CatDetails onClose={handleClose} cat={cats[currentCatIndex]} />
          )}
        </>
      ) : (
        <div className="cat-card-loading">
          <h2>Loading breeder cats...</h2>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
