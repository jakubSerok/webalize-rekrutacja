import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import path from 'path';
import Blogs from './collections/Blogs';
import FAQ from './collections/FAQ';
import Media from './collections/Media';
import Users from './collections/Users';

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Blogs, FAQ, Media, Users],
  globals: [],
  typescript: {
    outputFile: path.resolve(__dirname, 'types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
});
