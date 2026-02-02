import { getBlogCategories } from '../../lib/api/blogs';

interface FooterProps {
  currentLocale?: string;
  className?: string;
}

export const Footer = async ({
  currentLocale = 'pl',
  className,
}: FooterProps) => {
  const categories = await getBlogCategories();

  return (
    <footer
      className={className}
      style={{
        marginTop: '3rem',
        padding: '2rem 0',
        borderTop: '1px solid #ddd',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}
        >
          <div>
            <h4>Webalize</h4>
            <p>Profesjonalne rozwiązania dla Twojego biznesu</p>
          </div>

          <div>
            <h4>Blog</h4>
            {categories.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {categories.map((category) => (
                  <li key={category} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href={`/${currentLocale}/news?category=${category}`}
                      style={{ textDecoration: 'none', color: '#666' }}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h4>Linki</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href={`/${currentLocale}/faq`}
                  style={{ textDecoration: 'none', color: '#666' }}
                >
                  FAQ
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href={`/${currentLocale}/news`}
                  style={{ textDecoration: 'none', color: '#666' }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#666' }}>
          <p>&copy; 2026 Webalize. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};
