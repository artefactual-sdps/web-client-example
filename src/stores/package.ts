import { api, client } from "@/client";
import { defineStore, acceptHMRUpdate } from "pinia";

export const usePackageStore = defineStore({
  id: "package",
  state: () => ({
    current: null as api.PackageShowResponseBody | null,
    packages: [] as Array<api.EnduroStoredPackageResponseBody>,
  }),
  getters: {},
  actions: {
    async fetchCurrent(id: string) {
      this.$reset();
      const packageId = +id;
      if (Number.isNaN(packageId)) {
        throw Error("Unexpected parameter");
      }
      this.current = await client.package.packageShow({ id: packageId });
    },
    async fetchPackages() {
      this.$reset();
      const resp = await client.package.packageList();
      this.packages = resp.items;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePackageStore, import.meta.hot));
}
