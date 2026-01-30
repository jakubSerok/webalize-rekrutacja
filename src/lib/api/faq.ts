import { getPayloadClient } from '../payload';
 
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order?: number;
}
 
export interface FAQListOptions {
  category?: string;
  limit?: number;
}
 
export const getFAQs = async (options: FAQListOptions = {}) => {
  const payload = await getPayloadClient();
 
  const { category, limit } = options;
 
  const where: { category?: { equals: string } } = {};
 
  if (category) {
    where.category = { equals: category };
  }
 
  const faqs = await payload.find({
    collection: 'faq',
    limit: limit || 1000,
    sort: 'order',
    where,
  });
 
  return faqs;
};
 
export const getFAQByCategory = async (category: string) => {
  return getFAQs({ category });
};
 
export const getFAQCategories = async () => {
  const payload = await getPayloadClient();
 
  const faqs = await payload.find({
    collection: 'faq',
    limit: 1000,
  });
 
  const categories = [...new Set(
    (faqs.docs as FAQ[]).map(faq => faq.category)
  )];
 
  return categories;
};