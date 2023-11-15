/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

import {nextui} from "@nextui-org/react";

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [nextui()]

}

//require('flowbite/plugin'),
export default config
