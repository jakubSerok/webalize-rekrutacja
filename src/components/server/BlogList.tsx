import { getBlogs, BlogListOptions, Blog } from '../../lib/api/blogs';

interface BlogListProps {
  options?: BlogListOptions;
  className?: string;
}

export const BlogList = async ({ options, className }: BlogListProps) => {
  const blogs = await getBlogs(options);

  if (!blogs.docs.length) {
    return <p className={className}>Brak artykułów do wyświetlenia</p>;
  }

  return (
    <div className={className}>
      {(blogs.docs as Blog[]).map((blog) => (
        <article
          key={blog.id}
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <h2>{blog.title}</h2>
          <div
            style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '0.5rem',
            }}
          >
            <span>Kategoria: {blog.category}</span>
            {blog.publishedAt && (
              <span style={{ marginLeft: '1rem' }}>
                Data: {new Date(blog.publishedAt).toLocaleDateString('pl-PL')}
              </span>
            )}
          </div>
          {blog.excerpt && <p>{blog.excerpt}</p>}
        </article>
      ))}
    </div>
  );
};
