<template>
  <div class="">
    <Nav />
    <Suspense>
      <Row
        title="Netflix Originals"
        :url="request.fetchNetflixOriginals"
        :isLarge="true"
      ></Row>
      <template #fallback>
        <fallback />
      </template>
    </Suspense>

    <Suspense>
      <Row
        title="Netflix Hindi"
        :url="request.fetchNetflixHindi"
        :isLarge="true"
      ></Row>
      <template #fallback>
        <fallback />
      </template>
    </Suspense>

    <Suspense>
      <LocalRow title="South indian" :isLarge="true"></LocalRow>
      <template #fallback>
        <fallback />
      </template>
    </Suspense>

    <Suspense>
      <Row title="Netflix Hindi" :url="request.fetchNetflixHindi"></Row>
      <template #fallback>
        <fallback />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import request from "../constant";
import fallback from "../components/fallback.vue";
import Nav from "../components/nav.vue";

const Row = defineAsyncComponent(() => import("../components/row.vue"));
const LocalRow = defineAsyncComponent(() =>
  import("../components/localRow.vue")
);
</script>
