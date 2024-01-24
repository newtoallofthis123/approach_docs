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
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: 'Getting Started',
                            link: '/guides/getting-started/',
                        },
                    ],
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
