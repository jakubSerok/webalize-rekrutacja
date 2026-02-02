import { getBlogCategories } from '../../lib/api/blogs';
import { locales } from '../../i18n';
import { getTranslations } from 'next-intl/server';

interface NavigationProps {
  currentLocale?: string;
  className?: string;
}

export const Navigation = async ({
  currentLocale = 'pl',
  className,
}: NavigationProps) => {
  const categories = await getBlogCategories();
  const t = await getTranslations({ locale: currentLocale });

  const navItems = [
    { href: `/${currentLocale}`, label: t('nav.home') },
    { href: `/${currentLocale}/news`, label: t('nav.news') },
    { href: `/${currentLocale}/faq`, label: t('nav.faq') },
  ];

  return (
    <nav className={className}>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '1rem',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          {categories.length > 0 && (
            <li style={{ position: 'relative' }}>
              <span style={{ padding: '0.5rem 1rem', color: '#666' }}>
                {t('nav.categories')}:
              </span>
              {categories.slice(0, 3).map((category) => (
                <a
                  key={category}
                  href={`/${currentLocale}/news?category=${category}`}
                  style={{
                    textDecoration: 'none',
                    color: '#666',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.9rem',
                    marginLeft: '0.5rem',
                  }}
                >
                  {category}
                </a>
              ))}
            </li>
          )}
        </div>

        {/* Przełącznik języków */}
        <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: '#666' }}>
            {t('nav.language')}:
          </span>
          {locales.map((locale) => (
            <a
              key={locale}
              href={`/${locale}`}
              style={{
                textDecoration: locale === currentLocale ? 'underline' : 'none',
                color: locale === currentLocale ? '#333' : '#666',
                fontWeight: locale === currentLocale ? 'bold' : 'normal',
                padding: '0.25rem 0.5rem',
                borderRadius: '3px',
                fontSize: '0.9rem',
              }}
            >
              {locale.toUpperCase()}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};
