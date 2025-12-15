/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./dist/**/*.html"
    ],
    darkMode: 'class', // We will force dark mode mostly, or use system. Prompt says "ONLY DARK MOOD VERSION".
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Outfit"', 'sans-serif'],
                mono: ['"Space Grotesk"', 'monospace'], // Using Space Grotesk for numbers/headers as requested style
                display: ['"Space Grotesk"', 'sans-serif'],
            },
            colors: {
                // Custom premium dark palette
                background: '#050505', // Almost black
                surface: {
                    50: '#121212',
                    100: '#1A1A1A',
                    200: '#262626',
                    300: '#404040',
                },
                primary: {
                    DEFAULT: '#F97316', // Orange-500 muted
                    muted: '#C2410C',
                },
                border: '#27272a', // Zinc 800
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
