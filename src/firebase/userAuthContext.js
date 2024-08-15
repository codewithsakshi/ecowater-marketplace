// import React, {
//   ReactNode,
//   useEffect,
//   useState,
//   useContext,
//   createContext,
// } from "react";
// import {auth} from './firebase'
// import {
//   Auth,
//   UserCredential,
//   User,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   signOut,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   function signUpViaEmailPass(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }

//   function signInViaEmailPass(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   function resetPasswordViaEmail(email) {
//     return sendPasswordResetEmail(auth, email);
//   }

//   function logOut() {
//     return signOut(auth);
//   }

//   useEffect(() => {
//     const unsubsrcibe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return unsubsrcibe;
//   }, []);

//   const values = {
//     signUpViaEmailPass,
//     user,
//     signInViaEmailPass,
//     resetPasswordViaEmail,
//     auth,
//   };
//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };
