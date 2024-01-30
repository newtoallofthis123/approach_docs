import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Approach',
            social: {
                github: 'https://github.com/TheApproach/Appoarch',
                twitter: 'https://twitter.com/ClabornGaret',
            },
            customCss: ['./src/base.css'],
            sidebar: [
                {
                    label: 'Guides',
                    autogenerate: {
                        directory: 'guides',
                    }
                },
                {
                    label: 'Reference',
                    autogenerate: {
                        directory: 'reference',
                    },
                },
            ],
        }),
        tailwind(),
    ],
});
