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
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Can I cancel at anytime?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Yes, you can cancel anytime no questions are asked while you cancel but we would
                highly appreciate if you will give us some feedback.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                My team has credits. How do we use them?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Once your team signs up for a subscription plan. This is where we sit down, grab a
                cup of coffee and dial in the details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                How does Preline's pricing work?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Our subscriptions are tiered. Understanding the task at hand and ironing out the
                wrinkles is key.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                How secure is Preline?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Protecting the data you trust to Preline is our first priority. This part is really
                crucial in keeping the project in line to completion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Do you offer discounts?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We've built in discounts at each tier for teams. The time has come to bring those
                ideas and plans to life.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                What is your refund policy?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We offer refunds. We aim high at being focused on building relationships with our
                clients and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
