import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebaseKey";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const userSignIn = async (email: string, pass: string) => {
  let userId = "";
  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    userId = user.user.uid;
    console.log("userId", userId);
    alert("Sign in Success");
  } catch (error) {
    console.log(error);
  }
};

export const useCollection = (collectionName: string) => {
  const [snapData, setSnapDataActive] = useState<any[]>();
  const [snapDataDeactive, setSnapDataDeactive] = useState<any[]>();

  useEffect(() => {
    (async() => {
      const colRef = collection(db, collectionName);
      const unsubscribe = onSnapshot(colRef, (snapshot) => {
        let resultActive: any = [];
        let resultDeactive: any = [];
        snapshot.docs.forEach((doc) => {
          if(doc.data().status === undefined){
            
          } else if (doc.data().status === "deavtive") {
            resultDeactive.push({ ...doc.data() });
          } else
          resultActive.push({ ...doc.data() });
        });
        setSnapDataActive(resultActive);
        setSnapDataDeactive(resultDeactive);
        console.log("resultActive", resultActive);
        console.log("resultDeactive", resultDeactive);
      });
      return () => unsubscribe();
    })();
  }, [collectionName]);
  const createUserData = async (data: any) => {
    try {
      await addDoc(collection(db, "users"), data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    snapData,
    snapDataDeactive,
    createUserData
  };
};
// export const createUserData = async (data: any) => {
//   try {
//     await addDoc(collection(db, "users"), data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// export const createUserData = async (collectionName:string, data: any) => {
//   try {
//     await addDoc(collection(db, collectionName), data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
