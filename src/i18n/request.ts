import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    locale: locale || 'pl',
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
