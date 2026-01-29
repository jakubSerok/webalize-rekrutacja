import { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description: 'Tekst alternatywny dla SEO',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Podpis obrazka',
      },
    },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
      },
      {
        name: 'large',
        width: 1200,
        height: 900,
      },
    ],
  },
};

export default Media;
