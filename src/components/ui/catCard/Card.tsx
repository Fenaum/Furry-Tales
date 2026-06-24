// components/ui/Card/Card.tsx
import React from "react";
import { Cat } from "../../../model/Cat";
import Image from "next/image";
import "./card.css";
import Icons from "../../../../constants";

interface CardProps {
  cat: Cat;
  onLike: () => void;
  handlePrevious: () => void;
  onNext: () => void;
}

const Card: React.FC<CardProps> = ({ cat, onLike, handlePrevious, onNext }) => {
  return (
    <div className="cat-card">
      <div className="image-container">
        <Image
          src={cat.images[0]}
          alt={cat.name}
          width={500}
          height={500}
          layout="responsive"
          className="card-image"
        />
      </div>
      <div className="card-details">
        <div>
          <p className="card-kicker">Available from breeder</p>
          <h2>
            {cat.name}, {cat.age}
          </h2>
          <p className="card-subtitle">{cat.gender} · {cat.breed}</p>
          <p className="card-tagline">{cat.personality?.[0] || cat.color} · {cat.weight}kg</p>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={handlePrevious} aria-label="Previous cat">
          <Icons.backwardIcon className="h-8 w-8" />
        </button>
        <button onClick={onLike} className="primary-card-button" aria-label="View cat details">
          <Icons.likeIcon className="h-12 w-12" />
        </button>
        <button onClick={onNext} aria-label="Next cat">
          <Icons.fowardIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Card;
