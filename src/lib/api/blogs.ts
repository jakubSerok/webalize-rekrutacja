import { getPayloadClient } from '../payload';
import type { Where } from 'payload/types';
 
export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  image?: {
    id: string;
    alt: string;
    url: string;
    width: number;
    height: number;
    filename: string;
    mimeType: string;
    filesize: number;
    createdAt: string;
    updatedAt: string;
  };
}
 
export interface BlogListOptions {
  limit?: number;
  page?: number;
  category?: string;
  featured?: boolean;
  sort?: string;
}
 
export const getBlogs = async (options: BlogListOptions = {}) => {
  const payload = await getPayloadClient();
 
  const {
    limit = 10,
    page = 1,
    category,
    featured,
    sort = '-publishedAt'
  } = options;
 
  const where: Where = {};
 
  if (category) {
    where.category = { equals: category };
  }
 
  if (featured !== undefined) {
    where.featured = { equals: featured };
  }
 
  const blogs = await payload.find({
    collection: 'blogs',
    limit,
    page,
    sort,
    where,
  });
 
  return blogs;
};
 
export const getBlogBySlug = async (slug: string) => {
  const payload = await getPayloadClient();
 
  const blog = await payload.find({
    collection: 'blogs',
    where: {
      slug: { equals: slug },
    },
  });
 
  return blog.docs[0] as Blog | null;
};
 
export const getBlogCategories = async () => {
  const payload = await getPayloadClient();
 
  const blogs = await payload.find({
    collection: 'blogs',
    limit: 1000,
  });
 
  const categories = [...new Set(
    (blogs.docs as Blog[]).map(blog => blog.category)
  )];
 
  return categories;
};
 