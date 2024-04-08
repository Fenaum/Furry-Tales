import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const storage = getStorage();

async function uploadCatPhoto(catId: string, photoFile: File) {
  // Create a storage reference
  const storageRef = ref(storage, `cats/${catId}/${photoFile.name}`);

  // Upload the file
  await uploadBytes(storageRef, photoFile);

  // Get the download URL
  const photoURL = await getDownloadURL(storageRef);

  return photoURL;
}

async function saveCatPhotoURL(catId: string, photoURL: string) {
  const catRef = doc(collection(db, "cats"), catId);
  await setDoc(catRef, { photoURL }, { merge: true });
}

export { uploadCatPhoto, saveCatPhotoURL };
