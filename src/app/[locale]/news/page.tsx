import { BlogList } from '../../../components/server';
import { getTranslations } from 'next-intl/server';

interface NewsListPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<{
    category?: string;
  }>;
}

const NewsListPage = async ({ params, searchParams }: NewsListPageProps) => {
  const { locale } = await params;
  const { category } = await searchParams;
  const t = await getTranslations({ locale });

  const options = category
    ? { limit: 10, sort: '-publishedAt', category }
    : { limit: 10, sort: '-publishedAt' };

  return (
    <div>
      <h1>{t('news.title')}</h1>
      <p>{t('news.all_articles')}</p>

      {category && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
          }}
        >
          <span>
            Filtr: <strong>{category}</strong>
          </span>
          <a
            href={`/${locale}/news`}
            style={{
              marginLeft: '1rem',
              color: '#0070f3',
              textDecoration: 'none',
            }}
          >
            Wyczyść filtr
          </a>
        </div>
      )}

      <BlogList options={options} locale={locale} />
    </div>
  );
};

export default NewsListPage;
