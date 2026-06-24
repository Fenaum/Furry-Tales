"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AvailabilityStatus, Cat } from "../../model/Cat";

type BreedFallback = {
  description: string;
  characteristics: string[];
  healthNotes: string[];
  parents: NonNullable<Cat["parents"]>;
};

const breedFallbacks: Record<string, BreedFallback> = {
  Bengal: {
    description:
      "Bengals are athletic, bright cats with striking coats and a high need for daily play. They often do best with enrichment, climbing space, and people who enjoy an interactive companion.",
    characteristics: ["Athletic", "High enrichment needs", "Confident", "Patterned coat"],
    healthNotes: ["Ask about heart screening", "Review recent parasite prevention"],
    parents: {
      mother: "Saffron",
      father: "Atlas",
      notes: "Both parents are social, active cats with clear annual wellness checks.",
    },
  },
  "Maine Coon": {
    description:
      "Maine Coons are large, gentle cats known for steady temperaments and social confidence. They are often affectionate without being demanding and can adapt well to busy homes.",
    characteristics: ["Large frame", "Gentle", "Social", "Dense coat"],
    healthNotes: ["Ask about HCM screening", "Coat care should be discussed"],
    parents: {
      mother: "Willow",
      father: "Timber",
      notes: "Parents are selected for size, calm temperament, and confident handling.",
    },
  },
  Persian: {
    description:
      "Persians are calm, affectionate cats with plush coats and a relaxed pace. They tend to prefer predictable routines, soft spaces, and regular grooming.",
    characteristics: ["Calm", "Affectionate", "Low activity", "Long coat"],
    healthNotes: ["Discuss eye care", "Confirm grooming routine and breathing history"],
    parents: {
      mother: "Pearl",
      father: "Sterling",
      notes: "Parents have calm temperaments and are comfortable with daily grooming.",
    },
  },
  Ragdoll: {
    description:
      "Ragdolls are affectionate, people-oriented cats with a relaxed body language and soft coat. They usually thrive in homes that want a gentle, social companion.",
    characteristics: ["Gentle", "People-oriented", "Soft coat", "Relaxed"],
    healthNotes: ["Ask about cardiac screening", "Confirm litter and diet transition"],
    parents: {
      mother: "Mabel",
      father: "Finn",
      notes: "Both parents are handled daily and known for steady, affectionate temperaments.",
    },
  },
  Siamese: {
    description:
      "Siamese cats are vocal, loyal, and highly social. They often bond closely with their people and appreciate homes that can offer attention and mental stimulation.",
    characteristics: ["Vocal", "Social", "Clever", "People-focused"],
    healthNotes: ["Ask about dental history", "Review vaccination records"],
    parents: {
      mother: "Cleo",
      father: "Nico",
      notes: "Parents are social, talkative, and comfortable around household activity.",
    },
  },
  Snowshoe: {
    description:
      "Snowshoes are social, expressive cats with playful energy and a distinctive pointed look. They usually enjoy interaction and can be a good match for engaged families.",
    characteristics: ["Playful", "Expressive", "Social", "Pointed coat"],
    healthNotes: ["Review wellness exam notes", "Ask about socialization history"],
    parents: {
      mother: "June",
      father: "Theo",
      notes: "Parents are friendly, curious cats raised around regular household sounds.",
    },
  },
  Sphynx: {
    description:
      "Sphynx cats are warm, curious, and highly people-oriented. Their coat type means they need specific skin care, warmth, and regular bathing routines.",
    characteristics: ["Warm-seeking", "Curious", "Outgoing", "Low coat coverage"],
    healthNotes: ["Discuss skin care", "Ask about cardiac screening"],
    parents: {
      mother: "Dottie",
      father: "Milo",
      notes: "Parents are outgoing cats with documented skin care and wellness routines.",
    },
  },
  Tabby: {
    description:
      "Tabby describes a coat pattern rather than a single breed, so personality can vary. This profile's temperament and parent notes are the strongest match signals.",
    characteristics: ["Patterned coat", "Adaptable", "Curious", "Companionable"],
    healthNotes: ["Review vaccination records", "Ask about early socialization"],
    parents: {
      mother: "Hazel",
      father: "Oliver",
      notes: "Parents are healthy companion cats with friendly, curious temperaments.",
    },
  },
};

const defaultFallback: BreedFallback = {
  description:
    "This cat's breed profile is still being completed by the breeder. Use the temperament, parent notes, and health records here to decide whether to start a conversation.",
  characteristics: ["Companion", "Breeder listed", "Profile in progress"],
  healthNotes: ["Request full veterinary records", "Confirm vaccination schedule"],
  parents: {
    mother: "Mother profile pending",
    father: "Father profile pending",
    notes: "Ask the breeder for parent temperament, health testing, and registration details.",
  },
};

const fallbackImage = "/images/Cat-Banner.jpg";

function getBreedFallback(breed: string) {
  return breedFallbacks[breed] ?? defaultFallback;
}

function getCatImage(cat: Cat) {
  return cat.images?.find((image) => image && image.trim().length > 0) ?? fallbackImage;
}

function getVaccinationSummary(cat: Cat) {
  const entries = Object.entries(cat.vaccinations ?? {});
  const completed = entries.filter(([, isComplete]) => isComplete).length;

  if (entries.length === 0) {
    return "Vaccination records pending";
  }

  return `${completed}/${entries.length} vaccinations recorded`;
}

export default function ExploreDeck() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCats() {
      try {
        const response = await fetch("/api/cats/read");

        if (!response.ok) {
          throw new Error("Unable to load cats");
        }

        const catData = (await response.json()) as Cat[];
        setCats(catData);
      } catch {
        setError("We could not load explore profiles right now.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCats();
  }, []);

  const currentCat = cats[currentCatIndex];

  const profile = useMemo(() => {
    if (!currentCat) {
      return null;
    }

    const fallback = getBreedFallback(currentCat.breed);

    return {
      breedDescription: currentCat.breedDescription ?? fallback.description,
      characteristics:
        currentCat.characteristics?.length ? currentCat.characteristics : fallback.characteristics,
      healthNotes: currentCat.healthNotes?.length ? currentCat.healthNotes : fallback.healthNotes,
      parents: currentCat.parents ?? fallback.parents,
    };
  }, [currentCat]);

  function showPreviousCat() {
    setCurrentCatIndex((index) => (index === 0 ? cats.length - 1 : index - 1));
  }

  function showNextCat() {
    setCurrentCatIndex((index) => (index === cats.length - 1 ? 0 : index + 1));
  }

  if (isLoading) {
    return (
      <section className="explore-shell">
        <div className="explore-empty-state">
          <PawPrint aria-hidden="true" />
          <h1>Loading explore profiles</h1>
          <p>Gathering available cats and breeder details.</p>
        </div>
      </section>
    );
  }

  if (error || !currentCat || !profile) {
    return (
      <section className="explore-shell">
        <div className="explore-empty-state">
          <PawPrint aria-hidden="true" />
          <h1>No profiles available</h1>
          <p>{error || "There are no cats ready to explore yet."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="explore-shell" aria-label="Explore available cats">
      <div className="explore-header">
        <div>
          <p className="explore-kicker">Explore</p>
          <h1>Find a cat with the full story.</h1>
        </div>
        <div className="explore-count">
          {currentCatIndex + 1} / {cats.length}
        </div>
      </div>

      <div className="explore-layout">
        <article className="profile-card">
          <div className="profile-photo">
            <Image
              src={getCatImage(currentCat)}
              alt={currentCat.name}
              fill
              sizes="(max-width: 900px) 100vw, 430px"
              priority
            />
            <div className="profile-photo-overlay">
              <span>{currentCat.availabilityStatus ?? AvailabilityStatus.Available}</span>
              <h2>
                {currentCat.name}, {currentCat.age}
              </h2>
              <p>
                {currentCat.gender} {currentCat.breed} · {currentCat.color}
              </p>
            </div>
          </div>

          <div className="profile-actions" aria-label="Profile controls">
            <button type="button" onClick={showPreviousCat} aria-label="Previous profile">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" className="profile-like-button" aria-label="Favorite profile">
              <Heart aria-hidden="true" />
            </button>
            <button type="button" onClick={showNextCat} aria-label="Next profile">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </article>

        <div className="profile-details">
          <section className="profile-section profile-bio">
            <div className="profile-section-heading">
              <Sparkles aria-hidden="true" />
              <h2>About {currentCat.name}</h2>
            </div>
            <p>{currentCat.bio}</p>
            <div className="quick-facts">
              <span>{currentCat.weight} kg</span>
              <span>{getVaccinationSummary(currentCat)}</span>
              <span>
                <MapPin aria-hidden="true" />
                Breeder listed
              </span>
            </div>
          </section>

          <section className="profile-section">
            <div className="profile-section-heading">
              <PawPrint aria-hidden="true" />
              <h2>Personality and Characteristics</h2>
            </div>
            <div className="trait-grid">
              {[...(currentCat.personality ?? []), ...profile.characteristics].map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </section>

          <section className="profile-section">
            <div className="profile-section-heading">
              <Users aria-hidden="true" />
              <h2>Parents</h2>
            </div>
            <div className="parent-grid">
              <div>
                <span>Mother</span>
                <strong>{profile.parents.mother}</strong>
              </div>
              <div>
                <span>Father</span>
                <strong>{profile.parents.father}</strong>
              </div>
            </div>
            {profile.parents.notes && <p>{profile.parents.notes}</p>}
          </section>

          <section className="profile-section">
            <div className="profile-section-heading">
              <ShieldCheck aria-hidden="true" />
              <h2>{currentCat.breed} Breed Notes</h2>
            </div>
            <p>{profile.breedDescription}</p>
            <div className="health-list">
              {profile.healthNotes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
