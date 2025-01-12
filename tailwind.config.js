/** @type {import('tailwindcss').Config} */
// export default {
//     content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            screens: {
                'xl': '1440px',
            },
            colors: {
                'dark-brown': '#23081C',
                'span-light-blue': '#92BBFF'
            },
        },
    },
    plugins: [],
};
