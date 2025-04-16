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
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/basics',
        'getting-started/first-level',
        'getting-started/publishing',
      ],
    },
    {
      type: 'category',
      label: 'Map Design Guide',
      items: [
        'map-design/intro',
        'map-design/interface',
        'map-design/gestures',
        'map-design/patterns',
        'map-design/environment',
        'map-design/advanced-patterns',
        'map-design/storytelling',
        'map-design/difficulty',
        'map-design/optimization',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Features',
      items: [
        'advanced-features/custom-assets',
        'advanced-features/scripting',
        'advanced-features/performance',
        'advanced-features/exporting',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/workshops',
        'community/showcase',
        'community/events',
        'community/spotlights',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
  ],
};

export default sidebars;
