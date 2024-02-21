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
      images: ["image1.jpg"],
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
      images: ["image2.jpg"],
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