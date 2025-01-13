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
        extend: {
            fontFamily: { roboto: ['Roboto', 'sans-serif'] },
            height: { 
                '119.89px': '119.89px',
                '181px': '181px',
                '17px': '17px',
                '109px': '109px',
                '417px': '417px',
                '108px': '108px',
                '300.5px': '300.5px',
                '130.95px': '130.95px',
                '36px': '36px',
                '50px': '50px',
                '73px': '73px',
            
             },
            width: { 
                '115.36px': '115.36px', 
                '174.16px': '174.16px',
                '401px': '401px',
                '410px': '410px',
                '21.84px': '21.84px',
                '375px': '375px',
                '126px': '126px',
                '109px': '109px',
                '300px': '300px',
                '50px': '50px',
                '69px': '69px',
                '582px': '582px',
            },
            gap: { 
                '69px': '69px',
                '59px': '59px',

             },
        }

    },
    plugins: [],
};
