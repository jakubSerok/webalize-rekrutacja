import { getPayloadClient } from '../../lib/payload';

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
}

const HomePage = async () => {
  const payload = await getPayloadClient();

  const blogs = await payload.find({
    collection: 'blogs',
    limit: 3,
    where: {
      featured: {
        equals: true,
      },
    },
  });

  return (
    <div>
      <h1>Webalize - Strona Główna</h1>
      <p>Witaj na stronie głównej</p>

      {blogs.docs.length > 0 && (
        <section>
          <h2>Ostatnie artykuły</h2>
          <ul>
            {(blogs.docs as Blog[]).map((blog: Blog) => (
              <li key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default HomePage;
