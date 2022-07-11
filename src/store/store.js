import { createStore } from "vuex";
import appConfig from "../firebase/fbConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth();

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signIn(context, data) {
      let email = data.email;
      let password = data.password;
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      context.commit("setUser", user);
      console.log("User ID : ", user.uid);
      console.log(user);
    },
    async signOut(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
    async forgotPassword(context, email) {
      await sendPasswordResetEmail(auth, email);
    },
  },
});

export default store;
