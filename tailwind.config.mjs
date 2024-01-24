import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = {
    200: '#e8c285',
    600: '#8d6300',
    900: '#442d00',
    950: '#322000',
};
const gray = {
    100: '#f4f7f9',
    200: '#e8eff4',
    300: '#bcc3ca',
    400: '#7f8d9a',
    500: '#4d5a65',
    700: '#2d3a44',
    800: '#1c2832',
    900: '#13191e',
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};
