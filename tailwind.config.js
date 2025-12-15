/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./dist/**/*.html"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Outfit"', 'sans-serif'],
                mono: ['"Space Grotesk"', 'monospace'],
                display: ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                background: '#050505',
                surface: {
                    50: '#121212',
                    100: '#1A1A1A',
                    200: '#262626',
                    300: '#404040',
                },
                primary: {
                    DEFAULT: '#F97316',
                    muted: '#C2410C',
                },
                border: '#27272a',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
