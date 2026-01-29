import { getPayloadClient } from '../../../lib/payload';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order?: number;
}

const FAQPage = async () => {
  const payload = await getPayloadClient();

  const faqs = await payload.find({
    collection: 'faq',
    sort: 'order',
  });

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
    <div>
      <h1>FAQ - Najczęściej Zadawane Pytania</h1>

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

      {faqs.docs.length === 0 && <p>Brak FAQ do wyświetlenia.</p>}
    </div>
  );
};

export default FAQPage;
