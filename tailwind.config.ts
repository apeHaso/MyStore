import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#0b1020", panel: "#141b2d", accent: "#59e3bb" } } },
  plugins: []
};
export default config;