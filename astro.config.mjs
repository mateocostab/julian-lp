import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel';

const env = loadEnv('', process.cwd(), 'STORYBLOK');
const token = env.STORYBLOK_DELIVERY_API_TOKEN || process.env.STORYBLOK_DELIVERY_API_TOKEN;

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: token,
      bridge: true,
      apiOptions: {},
      components: {
        page: 'storyblok/Page',
        hero_section: 'storyblok/HeroSection',
        metrics_section: 'storyblok/MetricsSection',
        problem_section: 'storyblok/ProblemSection',
        modules_section: 'storyblok/ModulesSection',
        speaker_section: 'storyblok/SpeakerSection',
        calendly_section: 'storyblok/CalendlyBlok',
        faq_section: 'storyblok/FaqSection',
      },
    }),
  ],
  output: 'server',
  adapter: vercel(),
});
