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
    'welcome',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/creating-your-symphoni',
      ],
    },
    'composer-interface',
    {
      type: 'category',
      label: 'Create Maps',
      items: [
        'map/mapstart',
        'map/adding-notes',
        'map/editing-notes',
        'map/maptips',
      ],
    },
    {
      type: 'category',
      label: 'Create Visuals',
      items: [
        'visual/visualstart',
        'visual/adding-notes',
        'visual/editing-notes',
        'visual/visualtips',
      ],
    },
    'saving',
    'uploading',
    'controls',
    'faq',
  ],
};

export default sidebars;
