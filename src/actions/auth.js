import { firebase, googleAuthProvider } from "../firebase/firebase";
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});
