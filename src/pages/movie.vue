<template>
  <Nav />
  <div v-if="movie">
    <div
      class="w-full h-[91vh] flex flex-col md:flex-row text-white relative overflow-hidden"
    >
      <div class="">
        <img
          :src="imagePath"
          alt="bg"
          class="md:h-full md:absolute md:-right-6"
        />
        <div
          class="absolute md:hidden w-full h-10 bg-gradient-to-t from-[#0E1013] to-transparent bottom-0"
        ></div>
      </div>

      <div
        class="relative md:bg-gradient-to-r from-[#0E1013] via-[rgba(14,16,19,0.9942)] to-transparent w-full md:w-[60%] h-full z-50 flex md:items-center px-5 md:px-16"
      >
        <div class="space-y-3 md:space-y-8">
          <div class="w-full md:w-[70%] flex flex-col gap-y-3">
            <h1 class="text-3xl md:text-5xl font-semibold">
              {{ movie.title }}
            </h1>
          </div>

          <div class="flex space-x-2">
            <div
              class="divide-gray-800 space-x-6 md:space-x-4 flex items-center"
            >
              <div class="flex items-center space-x-2">
                <svg
                  class="_22qEau"
                  viewBox="0 0 33 16"
                  height="16"
                  width="33"
                  role="img"
                  style="height: 16; width: 33"
                  aria-hidden="true"
                >
                  <title>Logo Imdb Outline</title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="16"
                  >
                    <title>Logo Imdb Outline</title>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M29.652719 1.0977341c.772758 0 1.396822.618987 1.396822 1.3842208V13.518051c0 .765681-.624064 1.384221-1.396822 1.384221H3.3468573c-.7721217 0-1.3965678-.61854-1.3965678-1.384221V2.4819549c0-.7652338.6244461-1.3842208 1.3965678-1.3842208zm0-.2977341H3.3468573C2.4112479.8 1.65 1.5544797 1.65 2.4819549V13.518051C1.65 14.44553 2.4112479 15.2 3.3468573 15.2H29.652719c.935822 0 1.697281-.75447 1.697281-1.681949V2.4819549C31.35 1.5544797 30.588541.8 29.652719.8"
                    ></path>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M5.9317148 3.8610473v8.3986877h2.1976434V3.8610473H5.9317148m6.8886832 0-.509286 3.9246344-.312287-2.1332276c-.094387-.6837788-.180593-1.2824555-.266926-1.7914068H8.8811102v8.3986877h1.9266258l.0083-5.5445848.809278 5.5445848h1.37198l.772121-5.6666451.0042 5.6666451h1.92209V3.8610473h-2.875228m6.293065 8.3986877c.525819 0 .92022-.02858 1.183331-.08554.258321-.05682.480586-.154532.657089-.301228.176503-.14276.304105-.34196.373904-.594322.07376-.252529.114737-.756987.114737-1.5103496V6.820831c0-.7939403-.03292-1.3269684-.07786-1.5997796-.049309-.2687531-.172528-.517211-.369803-.7365515-.193015-.2203229-.480587-.3789146-.854491-.4763373-.373905-.0978426-.99002-.1471153-2.053784-.1471153h-1.639203v8.3986877zm.02077-6.884012c.08593.048988.143712.1263976.168596.2361392.02444.1058216.03688.3499397.03688.7287133v3.252332c0 .5621415-.03688.9041015-.111069 1.0304995-.07391.125978-.266799.186867-.583326.186867V5.2985972c.238248 0 .402308.024214.488917.077124m3.056013-1.5146587v8.3986745h1.980062l.139641-.533456c.17644.215833.373693.374428.591317.484593.218069.105683.538367.158594.788549.158594.345353 0 .649055-.08944.899702-.272683.254866-.178879.415344-.394866.481095-.639265.06982-.248166.102696-.622608.102696-1.123561V7.9773197c0-.5088167-.0085-.8388767-.03288-.9934102-.020971-.1546716-.090788-.3136849-.201475-.4767616-.115055-.1625009-.275067-.2886238-.489066-.3784902-.217771-.089447-.467931-.134372-.76006-.134372-.250182 0-.574868.049407-.792619.1511671-.213554.097434-.410807.2480424-.587246.4476398V3.8610643Zm2.863486 6.3632735c0 .402993-.02099.663486-.06198.769169-.04087.106244-.217772.158596-.353345.158596-.131184 0-.217771-.04843-.262708-.154113-.04084-.101899-.06575-.338048-.06575-.708568V8.0708145c0-.3829736.02035-.6191066.05761-.7168021.04103-.09351.127285-.1423599.254399-.1423599.135742 0 .316081.057235.36195.1629234.04494.109746.06982.3419696.06982.6962386v2.1535215"
                    ></path>
                  </svg>
                </svg>
                <span class="text-lg">8.9</span>
              </div>

              <span class="text-lg">{{ minuteToHour }}</span>
              <span class="text-lg">{{ getYear }}</span>

              <span class="ring-1 ring-gray-600 px-1.5 rounded">{{
                movie.certification
              }}</span>
            </div>
          </div>

          <p class="md:w-[72%] text-md md:text-lg overflow-y-scroll">
            {{ movie.overview }}
          </p>

          <div class="flex items-center space-x-5">
            <router-link
              to="/"
              class="px-10 py-2.5 bg-[#d81f26] rounded flex items-center gap-x-2 shadow-lg shadow-[#d81f26]/40"
              title="Watch"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xl">Play</span>
            </router-link>
            <router-link
              to="/"
              class="p-2.5 bg-[#d53439] rounded-full flex justify-center items-center gap-x-2 shadow-lg shadow-[#d81f26]/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </router-link>
            <router-link
              to="/"
              class="w-10 h-10 bg-[#d53439] rounded-full flex justify-center items-center gap-x-2 shadow-lg shadow-[#d81f26]/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <div
        class="absolute w-full md:h-60 bottom-0 bg-gradient-to-t from-[#0E1013] to-transparent"
      ></div>

      <div class="md:absolute inset-0"></div>
    </div>
  </div>
</template>
<!-- http://localhost:5500/movie/690957 -->

<script>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Nav from "../components/nav.vue";
import { IMG } from "../constant";
// `https://api.themoviedb.org/3/tv/${route.params.id}?api_key=7c3694f7091568494a23fa2760980b77`
// "https://api.themoviedb.org/3/movie/564147?api_key=7c3694f7091568494a23fa2760980b77"

export default {
  setup() {
    const movie = ref(null);
    const route = useRoute();

    console.log("Params : ", route.params.id);
    axios
      .get(`http://localhost:5500/movie/${route.params.id}`)
      .then((response) => {
        console.log(response.data);
        movie.value = response.data;
      })
      .catch((err) => console.log(err));

    const imagePath = computed(() => {
      return IMG.baseURL + movie.value.backdrop_path;
    });
    const minuteToHour = computed(() => {
      let h = Math.floor(movie.value.runtime / 60);
      let m = movie.value.runtime % 60;
      let hours = h > 0 ? `${h}h` : "";
      let minutes = m > 0 ? `${m}min` : "";
      return `${hours}  ${minutes}`;
    });

    const getYear = computed(() => {
      let data = movie.value.release_date.split("-");
      console.log(data);
      return data[0];
    });

    return {
      movie,
      imagePath,
      minuteToHour,
      getYear,
    };
  },
  components: { Nav },
};
</script>

<style scoped>
.animation-class {
  animation: nfLoader-spin 0.7s linear infinite;
  /* -webkit-animation: nfLoader-spin 1.1s linear infinite, 1 !important */
}

@keyframes nfLoader-spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.bgg {
  background: linear-gradient(
    to right,
    #181818 10%,
    rgba(24, 24, 24, 0.98) 20%,
    rgba(24, 24, 24, 0.97) 25%,
    rgba(24, 24, 24, 0.95) 35%,
    rgba(24, 24, 24, 0.94) 40%,
    rgba(24, 24, 24, 0.92) 45%,
    rgba(24, 24, 24, 0.09) 50%,
    rgba(24, 24, 24, 0.87) 55%,
    rgba(24, 24, 24, 0.82) 60%,
    rgba(24, 24, 24, 0.75) 65%,
    rgba(24, 24, 24, 0.63) 70%,
    rgba(24, 24, 24, 0.45) 75%,
    rgba(24, 24, 24, 0.27) 80%,
    rgba(24, 24, 24, 0.15) 85%,
    rgba(24, 24, 24, 0.08) 90%,
    rgba(24, 24, 24, 0.03) 95%,
    rgba(24, 24, 24, 0) 100%
  );
}
</style>
