<template>
  <div
    class="bg-login-bg flex relative h-screen md:h-screen w-full items-end justify-center bg-cover md:items-center md:after:absolute md:after:inset-0 md:after:w-full md:after:bg-black/20 md:after:content-['']"
  >
    <div
      class="md:z-50 relative flex h-screen w-full bg-gradient-to-b from-transparent via-black to-black opacity-[0.99] md:h-auto md:w-[26rem] md:rounded-xl md:bg-black"
    >
      <form
        v-if="isVisible"
        @submit.prevent="getResetLink()"
        class="w-full pt-[52%] px-6 md:h-full md:py-14 md:px-10"
      >
        <div class="w-full flex justify-start md:justify-center pb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            class="w-14 md:w-28 md:mb-8"
          />
        </div>

        <div class="pb-3">
          <label
            class="font-sans text-2xl md:text-2.5xl tracking-wider text-gray-100"
            >Reset password</label
          >
          <p class="pt-4 font-sans text-left text-sm tracking text-gray-400">
            Enter the email associate with your account and we'll send you an
            email with insructions to reset your password.
          </p>
        </div>

        <div class="py-5">
          <label for="email" class="ml-0.5 text-sm tracking-wider text-gray-400"
            >Email address</label
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            class="mt-2 w-full rounded border-none bg-gray-900 px-4 py-3 text-gray-300 outline-none ring-2 ring-gray-800 focus:ring-red-700"
            required
            autofocus
            v-model.lazy="email"
          />
        </div>

        <div class="text-red-500">
          <p v-if="isShow">
            {{ message }}
          </p>
        </div>

        <div class="w-full pt-6 pb-6">
          <button
            class="w-full rounded bg-red-700 py-3 text-base tracking-wider text-white hover:bg-red-800"
          >
            Reset Password
          </button>
        </div>

        <div class="pb-3 text-center tracking-wider">
          <router-link to="/" class="text-red-700">
            <span class="text-gray-400">Already Account ? </span>
            Sign In
          </router-link>
        </div>
      </form>

      <div
        v-else
        class="bg-black md:rounded-xl flex flex-col justify-center w-full px-4 h-[70%] md:h-[30rem] md:bottom-0 md:py-14 md:px-10"
      >
        <div class="w-full flex justify-center pt-10 pb-16 md:pb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            class="w-28 md:w-28 md:mb-8"
          />
        </div>
        <div class="flex justify-center items-center rounded-full pb-3">
          <img src="../assets/images/mail-box.png" alt="mailbox" />
        </div>
        <div class="text-center md:py-6">
          <p class="text-gray-400">
            Reset email has been sent to your {{ email }} follow the
            instructions to set new password.
          </p>
        </div>
        <div class="pt-14 pb-10 md:p-t10 text-center">
          <a
            href="https://www.gmail.com"
            class="bg-red-700 text-base tracking-wider text-white hover:bg-red-800 px-8 py-2.5 rounded-full leading-1 shadow-lg shadow-red-700/50"
            >Open mail</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { errorMessage } from "../firebase/fberrors";
import { forgotpassword } from "../firebase/firebase";

const store = useStore();
const email = ref("");
const isError = ref(false);
const message = ref("");
const isShow = ref(false);
const isVisible = ref(true);

const getResetLink = async () => {
  try {
    await forgotpassword(email.value);
    isShow.value = true;
    isVisible.value = false;
    setTimeout(() => {
      isShow.value = false;
    }, 2000);
  } catch (err) {
    isError.value = isShow.value = true;
    message.value = errorMessage(err.code);
    setTimeout(() => {
      isError.value = isShow.value = false;
    }, 2000);
    console.log(err);
  }
};
</script>

<style scoped>
.bg-image {
  background-image: url("");
}
</style>
