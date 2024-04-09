// components/ui/Card/Card.tsx
import React from "react";
import { Cat } from "../../../models/Cat";
import Image from "next/image";
import "./CatCard.css";
import Icons from "../../../../constants"

interface CardProps {
  cat: Cat;
  onLike: () => void;
  onDisLike: () => void;
  onNext: () => void;
}

const Card: React.FC<CardProps> = ({ cat, onLike, onDisLike, onNext }) => {
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
        <h2>{cat.name}, {cat.age}</h2>
        <p>
          {cat.gender} {cat.breed}
        </p>
      </div>
      <div className="card-buttons">
        <button onClick={onDisLike}>
          <Icons.backwardIcon className="h-8 w-8" />
        </button>
        <button onClick={onLike}>
          <Icons.likeIcon className="h-10 w-10" />
        </button>
        <button onClick={onNext}>
          <Icons.fowardIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Card;
