import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                blue: {
                    terciary: "#617C8D",
                    secundary: "#0174BE",
                    primary: "#0C356A",
                },
                red: {
                    primary: "#CA0156",
                },
                megb: {
                    yellow: "#EEA917",
                },
            },
        },
    },

    plugins: [forms],
};
