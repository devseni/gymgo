import { Oswald } from 'next/font/google';
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            xs: "375px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1400px",
        },

        backgroundImage: {
            hero: "url(/assets/img/hero/bg.jpg)",
            membership: "url(/assets/img/membership/bg.jpg)",
        },

        extend: {
            colors: {
                primary: {
                    default: "#333",
                    100: "#484848",
                    200: "#151515",
                    // 300: "#111",
                    300: "#0f172a",
                },
                // accent: "#d4000d",
                accent: "#ea580c",
            },
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                pathway: ["pathway extreme", "sans-serif"],
                roboto: ["robot", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
