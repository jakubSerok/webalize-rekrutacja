import dotenv from 'dotenv';
import { getPayloadClient } from './lib/payload';
import type { Blog } from './lib/api/blogs';
import type { FAQ } from './lib/api/faq';

dotenv.config();

const seedData = async () => {
  const payload = await getPayloadClient();

  const blogs: Omit<Blog, 'id'>[] = [
    {
      title: 'Wprowadzenie do Next.js 16',
      slug: 'wprowadzenie-do-nextjs-16',
      content: `
# Wprowadzenie do Next.js 16

Next.js 16 to najnowsza wersja popularnego frameworka React, która przynosi wiele usprawnień i nowych funkcji.

## Główne nowości

1. **App Router** - w pełni serwerowy routing
2. **Server Components** - komponenty renderowane po stronie serwera
3. **Turbopack** - nowe narzędzie do budowania aplikacji
4. **Ulepszone performance** - szybsze ładowanie stron

## Podsumowanie

Next.js 16 to znaczący krok naprzód w rozwoju frameworka, warto go wypróbować w nowych projektach.
      `.trim(),
      excerpt: 'Poznaj najnowszą wersję Next.js 16 i jej główne funkcje.',
      category: 'technologie',
      publishedAt: new Date('2024-01-15').toISOString(),
      featured: true,
    },
    {
      title: 'Payload CMS v3 - Nowe możliwości',
      slug: 'payload-cms-v3-nowe-mozliwosci',
      content: `
# Payload CMS v3 - Nowe możliwości

Payload CMS w wersji 3 wprowadza rewolucyjne zmiany w zarządzaniu treścią.

## Kluczowe zmiany

- **Nowy Admin Panel** - bardziej intuicyjny interfejs
- **Lepsze TypeScript** - pełne typowanie
- **Ulepszone API** - prostsze i szybsze zapytania
- **Nowe pola** - więcej opcji dla deweloperów

## Integracja z Next.js

Payload CMS v3 idealnie współpracuje z Next.js 16, co czyni go doskonałym wyborem dla nowoczesnych aplikacji webowych.
      `.trim(),
      excerpt:
        'Odkryj nowe funkcje Payload CMS v3 i jego integrację z Next.js.',
      category: 'biznes',
      publishedAt: new Date('2024-01-20').toISOString(),
      featured: true,
    },
    {
      title: 'Internacjonalizacja w Next.js',
      slug: 'internacjonalizacja-w-nextjs',
      content: `
# Internacjonalizacja w Next.js

Tworzenie wielojęzycznych aplikacji w Next.js nigdy nie było prostsze.

## Narzędzia i18n

- **next-intl** - potężna biblioteka do tłumaczeń
- **Middleware** - automatyczne przekierowania językowe
- **Server Components** - tłumaczenia po stronie serwera

## Implementacja

Implementacja i18n w Next.js 16 z App Router jest prosta i wydajna dzięki wbudowanym mechanizmom.
      `.trim(),
      excerpt:
        'Jak skutecznie zaimplementować tłumaczenia w aplikacji Next.js.',
      category: 'technologie',
      publishedAt: new Date('2024-01-25').toISOString(),
      featured: false,
    },
    {
      title: 'Optymalizacja wydajności React',
      slug: 'optymalizacja-wydajnosci-react',
      content: `
# Optymalizacja wydajności React

Jak sprawić by aplikacje React działały szybciej i sprawniej.

## Techniki optymalizacji

1. **React.memo** - memoizacja komponentów
2. **useMemo** - cache wyników obliczeń
3. **useCallback** - cache funkcji
4. **Code splitting** - dzielenie kodu na części

## Przykłady praktyczne

Pokażemy konkretne przykłady optymalizacji w realnych projektach.
      `.trim(),
      excerpt: 'Praktyczne techniki optymalizacji aplikacji React.',
      category: 'marketing',
      publishedAt: new Date('2024-02-01').toISOString(),
      featured: false,
    },
    {
      title: 'Payload CMS vs Strapi - Porównanie',
      slug: 'payload-cms-vs-strapi-porownanie',
      content: `
# Payload CMS vs Strapi - Porównanie

Wybór odpowiedniego CMS to kluczowa decyzja w projekcie.

## Payload CMS

**Zalety:**
- Konfiguracja w kodzie
- Pełne TypeScript
- Elastyczność
- Niski learning curve

**Wady:**
- Mniejsza społeczność
- Mniej gotowych rozszerzeń

## Strapi

**Zalety:**
- Duża społeczność
- Wiele pluginów
- Dojrzały produkt

**Wady:**
- Konfiguracja przez UI
- Mniej typowany kod

## Podsumowanie

Payload CMS jest idealny dla deweloperów ceniących kontrolę i kod, Strapi dla tych którzy wolą gotowe rozwiązania.
      `.trim(),
      excerpt: 'Szczegółowe porównanie Payload CMS i Strapi - który wybrać?',
      category: 'biznes',
      publishedAt: new Date('2024-02-05').toISOString(),
      featured: true,
    },
  ];

  // Przykładowe FAQ
  const faqs: Omit<FAQ, 'id'>[] = [
    {
      question: 'Czym jest Next.js?',
      answer:
        'Next.js to framework oparty na React, który umożliwia tworzenie nowoczesnych aplikacji webowych z renderowaniem po stronie serwera (SSR), statycznym generowaniem (SSG) i wieloma innymi funkcjami.',
      category: 'ogólne',
      order: 1,
    },
    {
      question: 'Jakie są główne zalety Payload CMS?',
      answer:
        'Payload CMS oferuje konfigurację w kodzie, pełne wsparcie dla TypeScript, elastyczność w projektowaniu struktur danych, prosty interfejs admina i doskonałą integrację z nowoczesnymi frameworkami jak Next.js.',
      category: 'ogólne',
      order: 1,
    },
    {
      question: 'Jak zaimplementować tłumaczenia w Next.js?',
      answer:
        'W Next.js 16 z App Router można użyć biblioteki next-intl. Wystarczy skonfigurować middleware, dodać pliki tłumaczeń i używać hooka useTranslations() w komponentach.',
      category: 'techniczne',
      order: 1,
    },
    {
      question: 'Czym różni się App Router od Pages Router?',
      answer:
        'App Router to nowy system routingu w Next.js 13+, który opiera się na serwerowych komponentach React, oferuje lepsze performance, bardziej intuicyjną strukturę plików i wbudowane wsparcie dla layoutów.',
      category: 'techniczne',
      order: 2,
    },
    {
      question: 'Jak połączyć Payload CMS z Next.js?',
      answer:
        'Payload CMS można połączyć z Next.js przez API. Należy skonfigurować klienta Payload, stworzyć endpointy API i używać ich w komponentach serwerowych Next.js do pobierania danych.',
      category: 'integracje',
      order: 1,
    },
    {
      question: 'Jakie są najlepsze praktyki SEO w Next.js?',
      answer:
        'Najlepsze praktyki SEO w Next.js to: używanie Server Components dla dynamicznej treści, generowanie statycznych stron dla treści statycznych, optymalizacja metadanych, używanie Next.js Image i implementacja struktury danych.',
      category: 'techniczne',
      order: 1,
    },
    {
      question: 'Jak debugować aplikacje Next.js?',
      answer:
        'Next.js oferuje wbudowane narzędzia deweloperskie, React Developer Tools, Next.js DevTools, a także możliwość debugowania przez VS Code z rozszerzeniami do debugowania Node.js.',
      category: 'techniczne',
      order: 1,
    },
    {
      question: 'Jak optymalizować wydajność w Next.js?',
      answer:
        'Optymalizacja w Next.js obejmuje: code splitting, lazy loading komponentów, optymalizację obrazów przez Next.js Image, caching strategii i korzystanie z Server Components dla redukcji JavaScript po stronie klienta.',
      category: 'techniczne',
      order: 1,
    },
  ];

  try {
    console.log('🌱 Rozpoczynanie seedowania danych...');

    // Czyszczenie istniejących danych
    console.log('🗑️ Czyszczenie istniejących danych...');
    await payload.delete({
      collection: 'blogs',
      where: {}, // usuń wszystkie
    });
    await payload.delete({
      collection: 'faq',
      where: {}, // usuń wszystkie
    });

    // Dodawanie blogów
    console.log('📝 Dodawanie blogów...');
    for (const blog of blogs) {
      await payload.create({
        collection: 'blogs',
        data: blog,
      });
      console.log(`✅ Dodano blog: ${blog.title}`);
    }

    // Dodawanie FAQ
    console.log('❓ Dodawanie FAQ...');
    for (const faq of faqs) {
      await payload.create({
        collection: 'faq',
        data: faq,
      });
      console.log(`✅ Dodano FAQ: ${faq.question}`);
    }

    console.log('🎉 Seedowanie zakończone pomyślnie!');
    console.log(`📊 Dodano ${blogs.length} blogów i ${faqs.length} FAQ`);
  } catch (error) {
    console.error('❌ Błąd podczas seedowania:', error);
    process.exit(1);
  }
};

// Uruchomienie seedowania
seedData();
