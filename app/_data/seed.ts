import * as admin from "firebase-admin";
import * as serviceAccount from "./path-to-your-service-account-file.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();
