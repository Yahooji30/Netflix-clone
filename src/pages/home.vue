<template>
  <div class="">
    <Row
      title="Netflix Originals"
      :url="request.fetchNetflixOriginals"
      :isLarge="true"
    ></Row>
    <Row title="Netflix Hindi" :url="request.fetchNetflixHindi"></Row>
    <Row title="Netflix Originals" :url="request.fetchNetflixOriginals"></Row>
    <Row title="Netflix Hindi" :url="request.fetchNetflixHindi"></Row>
    <Row></Row>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import request from "../constant";

const Row = defineAsyncComponent(() => import("../components/row.vue"));
</script>
