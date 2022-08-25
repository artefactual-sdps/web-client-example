import * as api from "./openapi-generator";
import * as runtime from "./openapi-generator/runtime";

// This may be outdate, see the original client for more details:
// https://github.com/artefactual-sdps/enduro/blob/main/dashboard/src/client.ts.

export interface Client {
    package: api.PackageApi;
}

function getPath(): string {
    const base = "/api";
    const location = window.location;
    const path =
      location.protocol +
      "//" +
      location.hostname +
      (location.port ? ":" + location.port : "") +
      base +
      (location.search ? location.search : "");

    return path.replace(/\/$/, "");
  }

  function createClient(): Client {
    const path = getPath();
    const config: api.Configuration = new api.Configuration({ basePath: path });
    return {
      package: new api.PackageApi(config),
    };
  }

  const client = createClient();

  export { api, runtime, client };
