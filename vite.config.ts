import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      imports: [
        "react",
        "ahooks",
        "react-router-dom",
        {
          "react-redux": ["useDispatch", "useSelector"],
          "react-hook-form": ["useForm", "useController", "Controller", "FormProvider", "useFormContext"],
          classnames: [["default", "cx"]],
          lodash: ["isEmpty", "includes", "delay"],
          uuid: ["v4"],
          "react-hot-toast": ["toast"],
        },
      ],
      defaultExportByFilename: true,
      eslintrc: {
        enabled: true,
      },
      include: [/\.[tj]sx?$/],
      dts: "./src/auto-imports.d.ts",
    }),
  ],
  clearScreen: false,
});
