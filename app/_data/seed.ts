import * as admin from "firebase-admin";
import * as serviceAccount from "./furry-tales-35c76-firebase-adminsdk-rxs77-462600353b.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

async function seedCats() {
  console.log("Deleting all existing cats...");
  const catsSnapshot = await db.collection("Cats").get();
  const deletePromises = catsSnapshot.docs.map((doc) => doc.ref.delete());
  await Promise.all(deletePromises);
  console.log("All existing cats have been deleted.");

  console.log("Seeding   10 new unique cats...");
  const cats = [
    {
      name: "Whiskers",
      breed: "Tabby",
      age: 2,
      color: "Black",
      weight: 5,
      gender: "Male",
      personality: ["Playful", "Curious"],
      vaccinations: { vaccine1: true, vaccine2: false },
      owner: "John Doe",
      images: ["/images/tabby-cat.jpeg", "/images/tabby-cat2.jpeg"],
    },
    {
      name: "Fluffy",
      breed: "Siamese",
      age: 3,
      color: "White",
      weight: 4,
      gender: "Female",
      personality: ["Affectionate", "Calm"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Jane Smith",
      images: [
        "/images/siamese-cat.webp",
        "/images/siamese-cat2.jpeg",
      ],
    },
    {
      name: "Sparkle",
      breed: "Bengal",
      age: 1,
      color: "Gold",
      weight: 3,
      gender: "Female",
      personality: ["Energetic", "Curious"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Alice",
      images: [
        "/images/bengal-ca.jpeg", "/images/bengal-cat2.jpeg",
      ],
    },
    {
      name: "Bolt",
      breed: "Maine Coon",
      age: 4,
      color: "Blue",
      weight: 10,
      gender: "Male",
      personality: ["Lazy", "Friendly"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Bob",
      images: [
        "/images/main-coon-cat2.webp", "/images/maine-coon-cat.webp",
      ],
    },
    {
      name: "Patches",
      breed: "Ragdoll",
      age: 2,
      color: "Brown",
      weight: 6,
      gender: "Female",
      personality: ["Lazy", "Affectionate"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Charlie",
      images: [
        "/images/ragdoll-cat.jpeg", "/images/ragdoll-cat2.jpeg",
      ],
    },
    {
      name: "Daisy",
      breed: "Sphynx",
      age: 1,
      color: "White",
      weight: 4,
      gender: "Female",
      personality: ["Playful", "Curious"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Diana",
      images: [
        "/images/sphynx-cat.jpeg", "/images/sphynxcat-2.webp",
      ],
    },
    {
      name: "Misty",
      breed: "Persian",
      age: 5,
      color: "Silver",
      weight: 7,
      gender: "Female",
      personality: ["Independent", "Lazy"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Eva",
      images: ["/images/persian-cat.webp", "/images/persian-cat2.jpeg"]
    },
    {
      name: "Rex",
      breed: "Ragdoll",
      age: 3,
      color: "Black",
      weight: 8,
      gender: "Male",
      personality: ["Affectionate", "Calm"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Frank",
      images: [],
    },
    {
      name: "Snowball",
      breed: "Snowshoe",
      age: 2,
      color: "White",
      weight: 6,
      gender: "Female",
      personality: ["Playful", "Curious"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Grace",
      images: [
        "/images/snowshoe-cat.jpeg", "/images/snowshow-cat2.jpeg",
      ],
    },
    {
      name: "Tigger",
      breed: "Maine Coon",
      age: 4,
      color: "Orange",
      weight: 12,
      gender: "Male",
      personality: ["Energetic", "Friendly"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Harry",
      images: [""],
    },
    {
      name: "Luna",
      breed: "Siamese",
      age: 6,
      color: "Blue",
      weight: 9,
      gender: "Female",
      personality: ["Affectionate", "Calm"],
      vaccinations: { vaccine1: true, vaccine2: true },
      owner: "Ivy",
      images: [""],
    },
    // ... more unique cats
  ];

  const batch = db.batch();
  cats.forEach((cat, index) => {
    const catRef = db.collection("Cats").doc();
    batch.set(catRef, cat);
  });

  await batch.commit();
  console.log("10 new unique cats have been seeded.");
}

seedCats().catch(console.error);