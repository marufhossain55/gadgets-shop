import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = () => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  return <div>AuthProvider</div>;
};
export default AuthProvider;
