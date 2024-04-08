// components/ui/Card/Card.tsx
import React from 'react';
import { Cat } from "../../../models/Cat";

interface CardProps {
 cat: Cat;
 onLike: () => void;
 onDisLike: () => void;
 onNext: () => void;
}

const Card: React.FC<CardProps> = ({ cat, onLike, onDisLike, onNext }) => {
  return (
    <div>
      <div className='card-details'>
        <h2>{cat.name}</h2>
        <p>{cat.color}</p>
        <p>{cat.age}</p>
        <p>{cat.breed}</p>
        <p>{cat.gender}</p>
      </div>
      <img src={cat.images[0]} alt={cat.name} />
      <div className='card-buttons'>
        <button onClick={onLike}>Like</button>
        <button onClick={onDisLike}>Dislike</button>
        <button onClick={onNext}>Next Cat</button>
      </div>
      </div>
  );
};

export default Card;