/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                customBlue: "#d8e5ee"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
