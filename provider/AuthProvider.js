import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth} from "../firebase/useFirebase";
import Login from "@/pages/signin";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isUser, setUser] = useState(false);
  const [checking, setChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  console.log(auth?.currentUser?.uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Log-out success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthContext.Provider
      value={{ isUser, logout, currentUser }}
    >
      {!checking && !isUser ? (
          <Login />
        ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
