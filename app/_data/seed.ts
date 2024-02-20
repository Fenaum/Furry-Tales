import * as admin from "firebase-admin";
import * as serviceAccount from "./furry-tales-35c76-firebase-adminsdk-rxs77-462600353b.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

   async function seedCats() {
     const cats = [
       { name: "Whiskers", breed: "Tabby", age: 2, color: "Black" },
       { name: "Fluffy", breed: "Siamese", age: 3, color: "White" },
       // ... more cats
     ];

     const batch = db.batch();

     cats.forEach((cat, index) => {
       const catRef = db.collection("Cats").doc();
       batch.set(catRef, cat);
     });

     await batch.commit();
   }

   seedCats().catch(console.error);