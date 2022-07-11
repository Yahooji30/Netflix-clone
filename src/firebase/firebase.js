import appConfig from "../firebase/fbConfig";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User State : ", user);
  }
});
