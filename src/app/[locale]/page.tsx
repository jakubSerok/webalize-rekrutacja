import { BlogList } from '../../components/server';
import { getTranslations } from 'next-intl/server';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.welcome')}</p>

      <section>
        <h2>{t('home.latest_articles')}</h2>
        <BlogList options={{ limit: 3, featured: true }} />
      </section>
    </div>
  );
};

export default HomePage;
