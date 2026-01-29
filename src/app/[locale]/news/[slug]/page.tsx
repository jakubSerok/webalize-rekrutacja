import { getPayloadClient } from '../../../../lib/payload';
import { notFound } from 'next/navigation';

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  publishedAt: string;
  excerpt?: string;
}

interface BlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const BlogPostPage = async ({ params }: BlogPageProps) => {
  const payload = await getPayloadClient();

  const blog = await payload.find({
    collection: 'blogs',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  if (!blog.docs.length) {
    notFound();
  }

  const blogPost = blog.docs[0] as Blog;

  return (
    <div>
      <article>
        <header>
          <h1>{blogPost.title}</h1>
          <div>
            <p>Kategoria: {blogPost.category}</p>
            <p>
              Data: {new Date(blogPost.publishedAt).toLocaleDateString('pl-PL')}
            </p>
          </div>
        </header>

        <main>
          <div>{blogPost.content}</div>
        </main>
      </article>
    </div>
  );
};

export default BlogPostPage;
