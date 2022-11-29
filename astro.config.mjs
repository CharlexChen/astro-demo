import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [
        {
            name: 'chr:printKeyword',
            hooks: {
                ['astro:server:setup']: function (options) {
                    console.log(12123, options);
                }
            }
        },
    ]
});
