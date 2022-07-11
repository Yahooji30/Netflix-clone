<template>
  <div class="w-full py-1">
    <div>
      <div
        class="bg-zinc-700 movie-titile-skeleton h-5 w-44 md:w-56 font-semibold text-xl tracking-wide md:text-2xl ml-[20px] md:ml-[45px] py-4 my-5 rounded"
      >

      </div>
    </div>
    <div class="w-full flex gap-3 md:gap-4 overflow-x-scroll">
      <div v-for="index in 8" :key="index"
        class="movie-skeleton h-[200px] md:h-[250px] min-w-[133px] md:min-w-[166px] bg-zinc-900 first:scroll-ml-12 md:first:ml-[45px] md:ladt:mr-[45px] first:ml-[20px] last:mr-[20px] rounded"
      ></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.movie-titile-skeleton {
  animation: pulse-bg 1.5s infinite;
}
.movie-skeleton {
  animation: pulse-bg 1.5s infinite;
}
/* #18181b  #27272a #18181b*/
@keyframes pulse-bg {
  0% {
    background-color: #202124;
  }
  50% {
    background-color: #282A2D;
  }
  100% {
    background-color: #202124;
  }
}
/* #3f3f46 */
</style>
