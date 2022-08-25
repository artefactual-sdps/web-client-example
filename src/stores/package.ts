import { api, client } from "@/client";
import { defineStore, acceptHMRUpdate } from "pinia";

export const usePackageStore = defineStore({
  id: 'package',
  state: () => ({
    packages: [] as Array<api.EnduroStoredPackageResponseBody>,
  }),
  getters: {},
  actions: {
    async fetchPackages() {
      const resp = await client.package.packageList();
      this.packages = resp.items;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePackageStore, import.meta.hot));
}
