// components/Swipe.js
import { useState } from "react";
import Cat from "./Cat";

function Swipe({ cats }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipedCats, setSwipedCats] = useState([]);

  const swipeLeft = () => {
    setSwipedCats([...swipedCats, cats[currentIndex]]);
    setCurrentIndex(currentIndex + 1);
  };

  const swipeRight = () => {
    setCurrentIndex(currentIndex + 1);
  };

  if (currentIndex >= cats.length) {
    return <div>No more cats to swipe!</div>;
  }

  return (
    <div className="swipe">
      <Cat cat={cats[currentIndex]} />
      <button onClick={swipeLeft}>Swipe Left</button>
      <button onClick={swipeRight}>Swipe Right</button>
    </div>
  );
}

export default Swipe;
