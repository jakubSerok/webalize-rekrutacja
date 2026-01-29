import { getPayloadClient } from '../../../lib/payload';

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  publishedAt: string;
}

const NewsListPage = async () => {
  const payload = await getPayloadClient();

  const blogs = await payload.find({
    collection: 'blogs',
    sort: '-publishedAt',
    limit: 10,
  });

  return (
    <div>
      <h1>Blog / News</h1>
      <p>Wszystkie artykuły</p>

      {blogs.docs.length > 0 ? (
        <div>
          {(blogs.docs as Blog[]).map((blog: Blog) => (
            <article key={blog.id} style={{ marginBottom: '2rem' }}>
              <h2>{blog.title}</h2>
              <p>Kategoria: {blog.category}</p>
              <p>
                Data: {new Date(blog.publishedAt).toLocaleDateString('pl-PL')}
              </p>
              {blog.excerpt && <p>{blog.excerpt}</p>}
            </article>
          ))}
        </div>
      ) : (
        <p>Brak artykułów do wyświetlenia.</p>
      )}
    </div>
  );
};

export default NewsListPage;
