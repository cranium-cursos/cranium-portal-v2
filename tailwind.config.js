/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000", // Black
                primary: "#10C1B4", // Turquesa
                secondary: "#153D84", // Azul-Royal
                cranium: {
                    "azul-marinho": "#1E4853",
                    "turquesa": "#10C1B4",
                    "azul-royal": "#153D84",
                    "azul-diamante": "#A5B8E3",
                },
                // Retaining top-level access for convenience
                "azul-royal": "#153D84",
                "azul-diamante": "#A5B8E3",
                "intermediario": "#0D8C86", // Deep teal for strong gradient contrast
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
            },
        },
    },
    plugins: [],
}
