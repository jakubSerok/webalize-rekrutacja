import { FAQSection } from '../../../components/server';
import { getTranslations } from 'next-intl/server';

interface FAQPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const FAQPage = async ({ params }: FAQPageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div>
      <h1>{t('faq.title')}</h1>
      <FAQSection options={{}} showCategories={true} />
    </div>
  );
};

export default FAQPage;
