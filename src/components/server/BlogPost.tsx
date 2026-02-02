import { getBlogBySlug, Blog } from '../../lib/api/blogs';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  slug: string;
  className?: string;
  locale?: string;
}

export const BlogPost = async ({
  slug,
  className,
  locale = 'pl',
}: BlogPostProps) => {
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className={className}>
      <header>
        <h1>{blog.title}</h1>
        <div
          style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}
        >
          <span>Kategoria: {blog.category}</span>
          {blog.publishedAt && (
            <span style={{ marginLeft: '1rem' }}>
              Data: {new Date(blog.publishedAt).toLocaleDateString('pl-PL')}
            </span>
          )}
        </div>
      </header>

      <main>
        <div>{blog.content}</div>
      </main>

      <footer
        style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #ddd',
        }}
      >
        <a
          href={`/${locale}/news`}
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >
          ← Wróć do listy artykułów
        </a>
      </footer>
    </article>
  );
};
