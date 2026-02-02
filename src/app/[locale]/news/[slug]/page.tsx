import { BlogPost } from '../../../../components/server';
import { getTranslations } from 'next-intl/server';

interface BlogPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogPageProps) => {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div>
      <BlogPost slug={slug} />
    </div>
  );
};

export default BlogPostPage;
