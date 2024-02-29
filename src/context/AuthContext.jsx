import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../fireBase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const auth = getAuth();
  const createUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      return user;
    } else {
      throw new Error("Sign up error occurs");
    }
  };

  const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      return user;
    } else {
      throw new Error("Sign in error occurs");
    }
  };

  return (
    <AuthContext.Provider value={createUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
