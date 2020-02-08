import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "duo",
  globalStyle: "src/global/variables.scss",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      includePaths: ["./node_modules"]
    })
  ]
};
