<script setup lang="ts">
import { usePackageStore } from "../stores/package";
import { useAsyncState } from "@vueuse/core";

const packageStore = usePackageStore();

const { execute, error } = useAsyncState(() => {
  return packageStore.fetchPackages();
}, null);

const retry = () => {
  if (execute) execute();
};
</script>

<template>
  <div class="demo">
    <h1>Packages</h1>

    <div v-if="error">
      An error occured!
      <pre>{{ error }}</pre>
      <button class="btn btn-danger" @click="retry">Retry</button>
    </div>

    <ul v-if="packageStore.packages">
      <li v-for="pkg in packageStore.packages" :key="pkg.id">
        <router-link :to="{ name: 'package', params: { id: pkg.id } }">
          Package <code>{{ pkg.aipId }}</code>
        </router-link>
        <br />Status: {{ pkg.status }}
      </li>
    </ul>

    <div v-if="!packageStore.packages.length">Not ready yet!</div>
  </div>
</template>
