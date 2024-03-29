import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebaseKey";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const useCollection = (collectionName: string, whereQuery?: any) => {
  const [snapData, setSnapData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(false);
      const colRef = collection(db, collectionName);
      let q: any = colRef;
      if (whereQuery)
        q = query(
          colRef,
          where(whereQuery.field, whereQuery.option, whereQuery.value)
        );
      const unsubscribe = onSnapshot(q, (snapshot: { docs: any[] }) => {
        let resultActive: any = [];
        snapshot.docs.forEach((doc: { data: () => any }) => {
          resultActive.push({ ...doc.data() });
        });

        setSnapData(resultActive);
        setLoading(true);
      });
      return () => unsubscribe();
    })();
  }, [collectionName]);
  const createUserData = async (data: any) => {
    setLoading(false);
    try {
      await addDoc(collection(db, collectionName), data);
      setLoading(true);
    } catch (error) {
      console.log("error", error);
    }
  };
  const userSignIn = async (email: string, pass: string) => {
    setLoading(false);
    let userId = "";
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      userId = user.user.uid;
      setLoading(true);
      alert("Sign in Success");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    snapData,
    createUserData,
    loading,
    userSignIn,
  };
};
