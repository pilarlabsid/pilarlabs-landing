/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                foundation: 'rgb(var(--color-foundation) / <alpha-value>)',
                calm: 'rgb(var(--color-calm) / <alpha-value>)',
                structural: 'rgb(var(--color-structural) / <alpha-value>)',
                precision: 'rgb(var(--color-precision) / <alpha-value>)',
                cyan: {
                    muted: '#98C1D9',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
