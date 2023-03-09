import { defineConfig } from "vite"
import suidPlugin from "@suid/vite-plugin"
import solidPlugin from "vite-plugin-solid"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
  plugins: [
    suidPlugin(),
    solidPlugin(),
    legacy({
      targets: ["chrome < 60", "edge < 15", "Firefox<59"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      polyfills: [
        "es.symbol",
        "es.array.filter",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.for-each",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all",
      ],
      modernPolyfills: ["es.string.replace-all"],
    }),
  ],
})
