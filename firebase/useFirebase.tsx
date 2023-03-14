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
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
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
    alert("Sign in Success");
  } catch (error) {
    console.log(error);
  }
};

export const useCollection = (collectionName: string, whereQuery?: any) => {
  const [snapData, setSnapData] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const colRef = collection(db, collectionName);
      let q=colRef;
      if (whereQuery)
        q = query(
          colRef,
          where(whereQuery.field, whereQuery.option, whereQuery.value)
        );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        let resultActive: any = [];
        let resultDeactive: any = [];
        snapshot.docs.forEach((doc) => {resultActive.push({ ...doc.data() })} );
       
        setSnapData(resultActive);
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
  const getData = () => {
    (async () => {
      const colRef = collection(db, collectionName);
      const unsubscribe = onSnapshot(colRef, (snapshot) => {
        let resultDeactive: any = [];
        snapshot.docs.forEach((doc) => {
          resultDeactive.push({ ...doc.data() });
        });
      });
      return () => unsubscribe();
    })();
  };

  return {
    snapData,
    createUserData,
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
