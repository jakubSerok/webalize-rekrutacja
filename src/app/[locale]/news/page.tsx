import { BlogList } from '../../../components/server';
import { getTranslations } from 'next-intl/server';

interface NewsListPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const NewsListPage = async ({ params }: NewsListPageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div>
      <h1>{t('news.title')}</h1>
      <p>{t('news.all_articles')}</p>
      <BlogList options={{ limit: 10, sort: '-publishedAt' }} />
    </div>
  );
};

export default NewsListPage;
