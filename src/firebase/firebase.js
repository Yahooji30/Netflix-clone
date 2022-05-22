import appConfig from "../firebase/fbConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User State : ", user);
  }
});

export const signin = async (data) => {
  let email = data.email;
  let password = data.password;
  const result = await signInWithEmailAndPassword(auth, email, password);
  const { user } = result;
  console.log("User ID : ", user.uid);
  console.log(user);
};

export const signout = async () => {
  await signOut(auth);
  console.log("LogOut Successfully");
};

export const forgotpassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};
