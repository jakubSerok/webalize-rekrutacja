import { getFAQs, FAQListOptions, FAQ } from '../../lib/api/faq';

interface FAQSectionProps {
  options?: FAQListOptions;
  className?: string;
  showCategories?: boolean;
}

export const FAQSection = async ({
  options,
  className,
  showCategories = true,
}: FAQSectionProps) => {
  const faqs = await getFAQs(options);

  if (!faqs.docs.length) {
    return <p className={className}>Brak FAQ do wyświetlenia</p>;
  }

  if (showCategories) {
    // Grupowanie FAQ po kategoriach
    const faqsByCategory = (faqs.docs as FAQ[]).reduce(
      (acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
      },
      {} as Record<string, FAQ[]>
    );

    return (
      <div className={className}>
        {Object.entries(faqsByCategory).map(([category, items]) => (
          <section key={category} style={{ marginBottom: '2rem' }}>
            <h2>{category}</h2>
            <div>
              {items.map((faq) => (
                <div key={faq.id} style={{ marginBottom: '1rem' }}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {(faqs.docs as FAQ[]).map((faq) => (
        <div key={faq.id} style={{ marginBottom: '1rem' }}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};
