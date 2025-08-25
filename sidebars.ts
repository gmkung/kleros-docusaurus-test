import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'faq',
    'governance',
    'pnk-token',
    'media-coverage',
    {
      type: 'category',
      label: 'Products',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Court',
          items: [
            'products/court/index',
            'products/court/juror-tutorial',
            'products/court/famous-cases'
          ],
        },
        {
          type: 'category',
          label: 'Curate',
          items: [
            'products/curate/index',
            'products/curate/tutorial'
          ],
        },
        'products/escrow',
        'products/proof-of-humanity'
      ],
    },
    {
      type: 'category',
      label: 'Developer',
      collapsed: true,
      items: [
        'developer/index',
        'developer/arbitration-standard'
      ],
    },
    {
      type: 'category',
      label: 'Quizzes',
      collapsed: true,
      items: [
        'quizzes/juror-quiz',
        'quizzes/developer-quiz',
        'quizzes/proof-of-humanity-quiz'
      ],
    }
  ],
};

export default sidebars;
