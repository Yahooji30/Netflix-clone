<template>
  <div
    class="md:bg-signup-bg flex relative h-screen md:h-screen w-full items-end justify-center bg-cover md:items-center md:after:absolute md:after:inset-0 md:after:w-full md:after:bg-black/20 md:after:content-['']"
  >
    <div
      class="md:z-50 flex h-screen w-full bg-gradient-to-b from-transparent via-black to-black opacity-[0.99] md:h-auto md:w-[26rem] md:rounded-xl md:bg-black"
    >
      <form
        @submit.prevent="signUpMethod()"
        class="w-full pt-[15%] px-6 md:h-full md:py-14 md:px-10"
      >
        <div class="w-full flex justify-center md:justify-center pb-10 md:pb-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
            class="w-32 md:w-28 md:mb-8"
          />
        </div>
        <div class="pb-0">
          <h1
            class="font-sans text-3xl tracking-wider text-gray-100 text-center"
          >
            Unlimited movies, TV shows and more.
          </h1>
        </div>
        <div class="text-red-500 pt-3">
          <p v-if="isError">{{ error }}</p>
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
          />
        </div>
        <div class="pb-3">
          <label
            for="password"
            class="ml-0.5 text-sm tracking-wider text-gray-400"
            >Password</label
          >
          <div class="relative mt-2 flex">
            <input
              :type="isHide ? 'password' : 'text'"
              name="password"
              id="password"
              placeholder="********"
              class="w-full rounded border-none bg-gray-900 px-4 py-3 text-gray-300 outline-none ring-2 ring-gray-800 focus:ring-red-700"
              required
            />
            <a
              class="absolute flex items-center top-0 bottom-0 right-0 rounded-r bg-gray-900 px-4 tracking-wider text-red-600 cursor-pointer select-none"
              @click="isHide = !isHide"
              id="showhidebutton"
            >
              {{ isHide ? "Show" : "Hide" }}
            </a>
          </div>
        </div>

        <div class="w-full pt-6 pb-6">
          <button
            class="w-full rounded bg-red-700 py-3 text-base tracking-wider text-white hover:bg-red-800"
          >
           Create Account
          </button>
        </div>
        <div class="pb-3 text-center tracking-wider">
          <router-link to="/login" class="text-red-700"
            ><span class="text-gray-400">Already Account ? </span>Sign In
          </router-link>
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

</script>
