import FAQ from './faq-question';

const FaqPage = () => {
  // FAQs array
  const faqs = [
    {
      question: 'How this theme is different from others in market?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
    },
    {
      question: 'What is your policy on distribution of Devjoy assets?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
    },
    {
      question: 'How can I contribute to Devjoy?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
    },
    {
      question: 'What other themes do you have?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna'
    }
  ];

  return (
    <section id="faq" className="relative min-h-screen w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="relative z-10 mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-screen-xl justify-center px-4">
          <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight dark:text-white md:text-4xl xl:text-5xl">
            What our Customers think
          </h1>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12">
            {faqs.map((faq, index) => (
              <FAQ faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
