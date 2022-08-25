<script setup lang="ts">
import { usePackageStore } from "../stores/package";
import { useAsyncState } from "@vueuse/core";
import { useRoute } from "vue-router";

const packageStore = usePackageStore();
const route = useRoute();

useAsyncState(packageStore.fetchCurrent(route.params.id.toString()), null);
</script>

<template>
  <div class="demo" v-if="packageStore.current">
    <h2>
      Package <code>{{ packageStore.current.aipId }}</code>
    </h2>
    <pre>{{ packageStore.current }}</pre>
    <router-link :to="{ name: 'demo' }">&laquo; Back </router-link>
  </div>
</template>

<style>
small {
  margin-top: -10px;
  font-size: 1rem;
}
</style>
