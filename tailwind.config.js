/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
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
            
             },
            width: { 
                '115.36px': '115.36px', 
                '174.16px': '174.16px',
                '401px': '401px',
                '410px': '410px',
                '21.84px': '21.84px',
                '375px': '375px',
                
            },
        }

    },
    plugins: [],
};
