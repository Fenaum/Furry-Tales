"use client"
import { db } from "../../../firebase/firebaseConfig"
import { collection, setDoc, doc }
 from "firebase/firestore"

async function testSetDoc() {
    const testCollection = collection(db, "Test");
    try {
        await setDoc(doc(testCollection, "test2"), {
            email: "test@test.com"
        })
    } catch (error) {
        console.log(error)
    }
}

export default function TestButton() {


    return (
        <div>
            <button onClick={testSetDoc}>Test</button>
        </div>
    )
}