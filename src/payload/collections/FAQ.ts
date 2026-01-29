import { CollectionConfig } from 'payload';

const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: ['ogólne', 'techniczne', 'cennik', 'integracje'],
      defaultValue: 'ogólne',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Kolejność wyświetlania',
      },
    },
  ],
};

export default FAQ;
