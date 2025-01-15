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
        screens: {
            mobile:'393px',
            tablet:'744px',
            desktop:'1440px'

        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            
            colors: {
                'dark-brown': '#23081C',
                'span-light-blue': '#92BBFF'
            },
        },
        
        

    },
    plugins: [],
};
