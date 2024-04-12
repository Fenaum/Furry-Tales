"use client";
import React from "react";
import "./catDetails.css";
import { Cat } from "../../../../models/Cat";
import Image from "next/image";
import Icons from "../../../../../constants"

interface CardProps {
  cat: Cat;
  onClose(): void;
}

const CatDetails: React.FC<CardProps> = ({ cat, onClose }) => {

const personality = cat.personality.map((personalityTrait, index, array) => (
  <span key={personalityTrait}>
    {personalityTrait}
    {index < array.length - 1 ? ", " : ""}
  </span>
));
  return (
    <div className="CatDetails">
      {cat ? (
        <>
          <div className="CatDetails-card">
            <button className="CatDetails-close" onClick={onClose}>
              x
            </button>
            <div className="image-container">
              <button className="CatDetails-prev">
                <Icons.previous className="w-6 h-6" />
              </button>
              <Image
                src={cat.images[0]}
                alt={cat.name}
                width={200}
                height={200}
              />
              <button className="CatDetails-next">
                <Icons.next className="w-6 h-6" />
              </button>
            </div>
            <h1> {cat.name} </h1>
            <p>personality: {personality}</p>
            <p>{cat.bio}</p>
          </div>
        </>
      ) : (
        <p> loading </p>
      )}
    </div>
  );
};

export default CatDetails;
