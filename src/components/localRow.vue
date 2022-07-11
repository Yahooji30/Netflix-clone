<template>
  <div class="w-full py-1">
    <div>
      <h2
        class="text-white font-semibold text-xl tracking-wide md:text-2xl pl-[20px] md:pl-[45px] py-5"
      >
        {{ title }}
      </h2>
    </div>
    <div class="poster_row flex gap-3 md:gap-4 overflow-x-scroll">
      <router-link
        v-for="movie in movies"
        :key="movie.id"
        :class="[
          isLarge
            ? 'h-[200px] md:h-[250px] min-w-[133px] md:min-w-[166px] first:ml-[20px] md:first:ml-[45px] last:mr-[20px] md:last:mr-[45px] rounded hover:scale-105 ease-in-out duration-300'
            : 'h-[110px] md:h-[125px] min-w-[195px] md:min-w-[222px] first:ml-[20px] md:first:ml-[45px] rounded',
        ]"
        :to="`/movie/${movie.id}`"
      >
        <img
          :src="
            IMG.cdnURL +
            IMG.baseURL +
            [isLarge ? movie.poster_path : movie.backdrop_path] +
            IMG.transformIMG
          "
          :alt="movie.title"
          class="rounded"
        />
      </router-link>

      <!-- <img
        v-for="movie in movies"
        :key="movie.id"
        :src="
          IMG.cdnURL +
          IMG.baseURL +
          [isLarge ? movie.poster_path : movie.backdrop_path] +
          IMG.transformIMG
        "
        :alt="movie.title"
        :class="[
          isLarge
            ? 'h-[200px] md:h-[250px] first:ml-[20px] md:first:ml-[45px] last:mr-[20px] md:last:mr-[45px] rounded'
            : 'h-[110px] md:h-[125px] first:ml-[20px] md:first:ml-[45px]  rounded',
        ]"
      /> -->
    </div>
  </div>
</template>

<script async setup>
import { onBeforeMount, onMounted, ref } from "vue";
// import instance from "../axios";
import { IMG } from "../constant";
import axios from "axios";

const props = defineProps({
  title: String,
  isLarge: {
    type: Boolean,
    default: false,
  },
});

const { title, isLarge } = props;
const movies = ref(null);

async function fetchData() {
  console.log("call");
  const response = await axios.get("http://localhost:5500/movie");
  console.log("Res : ", response);
  movies.value = response.data;
}
try {
  await fetchData();
} catch (error) {
  console.log(error);
}

// onMounted(() => {});
</script>

<style scoped>
.poster_row::-webkit-scrollbar {
  display: none;
}
</style>
