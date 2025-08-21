import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default {
  // Configuration de Rollup
  input: {
    app: "src/app.ts",
    commentForm: "src/scripts/commentForm.ts",
    navBar: "src/scripts/navBar.ts",
  },
  output: [
    {
      dir: "public/js",
      format: "esm",
      sourcemap: !isProduction,
    },
  ],
  plugins: [
    typescript({
      compilerOptions: { module: "esnext" },
      outDir: "public/js",
    }),
    isProduction &&
      terser({
        compress: { drop_console: true },
      }),
  ],
};
