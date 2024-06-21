/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content()
    ],
    theme: {
        extend: {
            colors: {
                nav_item_bg: "#81373A",
                logo: "#81373A"
            },
            screens: {
                xs: "475px",
                mlg: "900px",
            }
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;
