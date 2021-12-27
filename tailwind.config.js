/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [require('@tailwindcss/forms')],
};
