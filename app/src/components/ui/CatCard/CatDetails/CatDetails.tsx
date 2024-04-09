"use client";
import React from "react";
import "./CatDetails.css";
import { Cat } from "../../../../models/Cat";
import Image from "next/image";

interface CardProps {
  cat: Cat;
  onClose(): void;
}

const CatDetails: React.FC<CardProps> = ({ cat, onClose }) => {
  return (
    <div className="CatDetails">
      {cat ? (
        <>
          <div className="CatDetails-card">
            <button className="CatDetails-close" onClick={onClose}>
              x
            </button>
            <div className="image-container">
              <button className="CatDetails-prev">Prev</button>
              <Image
                src={cat.images[0]}
                alt={cat.name}
                width={200}
                height={200}
              />
              <button className="CatDetails-next">Next</button>
            </div>
            <h1> {cat.name} </h1>
            <p> {cat.personality} </p>
          </div>
        </>
      ) : (
        <p> loading </p>
      )}
    </div>
  );
};

export default CatDetails;
