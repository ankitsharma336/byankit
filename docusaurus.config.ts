import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'By Ankit',
  tagline: 'Helping engineering students learn better through teaching, research, and AI.',
  favicon: 'img/favicon.ico',
   clientModules: [
    require.resolve('./src/client/security.ts'),
   ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ankitsharma336.github.io',
    baseUrl: '/byankit/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ankitsharma336', // Usually your GitHub org/user name.
  projectName: 'byankit', // Usually your repo name.
  trailingSlash: false,
  

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'learn',
          
          
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],   
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'By Ankit',
      logo: {
        alt: 'My Site Logo',
          src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {
          href: 'https://github.com/ankitsharma336/byankit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
         {
      title: 'Learn',
      items: [
        {
          label: 'Transportation',
          to: '/learn/transportation/intro',
        },
        {
          label: 'Geotechnical',
          to: '/learn/geotechnical/intro',
        },
        {
          label: 'AI',
          to: '/learn/Artificial_intelligence/intro',
        },
      ],
    },
       
    {
      title: 'Professional',
      items: [
        {
          label: 'About',
          to: '/about',
        },
        {
          label: 'Research',
          to: '/learn/research/intro',
        },
        {
          label: 'Contact',
          to: '/contact',
        },
      ],
    },

    {
      title: 'Connect',
      items: [
       
        {
          label: 'Email',
          href: 'mailto:ankitsharma336@gmail.com',
        },
        {
          label: 'Linkedin',
          href: 'https://www.linkedin.com/in/ankitsharma336/',
        },
      ],
    },  
    {
      title: 'By Ankit',
      items: [
        {
          label: ' Empowering Civil Engineering education through teaching, research, and innovation.',
          to : '/',
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Dr. Ankit Sharma • Made with ❤️`,
    },


  prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
