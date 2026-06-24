"use client";
import React from "react";
import "./catDetails.css";
import { Cat } from "../../../../model/Cat";
import Image from "next/image";
import Icons from "../../../../../constants";

interface CardProps {
  cat: Cat;
  onClose(): void;
}

const CatDetails: React.FC<CardProps> = ({ cat, onClose }) => {
  const personality = cat.personality?.join(", ") || "Unknown";
  const characteristics = cat.characteristics?.join(", ") || "N/A";
  const healthNotes = cat.healthNotes?.join(" · ") || "No additional health notes.";

  return (
    <div className="CatDetails">
      {cat ? (
        <>
          <div className="CatDetails-card">
            <button className="CatDetails-close" onClick={onClose}>
              Close
            </button>
            <div className="CatDetails-image">
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
            <div className="CatDetails-content">
              <p className="CatDetails-kicker">{cat.breed} profile</p>
              <h1>{cat.name}</h1>
              <p className="CatDetails-meta">
                {cat.gender} · {cat.age} years · {cat.color}
              </p>
              <div className="CatDetails-summary">
                <p><strong>Breed:</strong> {cat.breed}</p>
                <p><strong>Weight:</strong> {cat.weight} kg</p>
                <p><strong>Traits:</strong> {personality}</p>
              </div>
              <div className="CatDetails-grid">
                <div className="CatDetails-section">
                  <h2>Breed description</h2>
                  <p>{cat.breedDescription || "This breed is known for its friendly and affectionate personality."}</p>
                </div>
                <div className="CatDetails-section">
                  <h2>Parent lineage</h2>
                  <p>Mother: {cat.parents?.mother || "Unknown"}</p>
                  <p>Father: {cat.parents?.father || "Unknown"}</p>
                  {cat.parents?.notes && <p>{cat.parents.notes}</p>}
                </div>
              </div>
              <div className="CatDetails-section">
                <h2>Health & characteristics</h2>
                <p>{healthNotes}</p>
                <p><strong>Additional notes:</strong> {characteristics}</p>
              </div>
              <p>{cat.bio}</p>
              <button className="CatDetails-inquiry">Start breeder inquiry</button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default CatDetails;
