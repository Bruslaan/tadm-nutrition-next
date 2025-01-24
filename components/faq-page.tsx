'use client';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={` ${className}`}>{children}</div>;
};

const CardContent = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

// @ts-ignore
export const FAQItem = ({ question, answer }: { question?: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg bg-white p-4 text-left transition-colors duration-200 hover:bg-gray-50"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 transform' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="rounded-b-lg bg-gray-50 p-4 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions. Each service is customized to meet your specific needs and goals.'
    },
    {
      question: 'How can I get started?',
      answer:
        "Getting started is easy! Simply reach out through our contact form or schedule a free consultation. We'll discuss your project requirements and provide you with a detailed proposal."
    },
    {
      question: 'What are your pricing plans?',
      answer:
        'Our pricing varies depending on project scope and requirements. We offer flexible packages to accommodate different budgets and needs. Contact us for a personalized quote.'
    },
    {
      question: 'How long does a typical project take?',
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take several months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: 'Do you offer support after project completion?',
      answer:
        'Yes! We provide ongoing support and maintenance services to ensure your project continues to run smoothly. Our support packages can be tailored to your specific needs.'
    },
    {
      question: 'What technologies do you work with?',
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack based on your project's specific requirements."
    }
  ];

  // Split FAQ items into two columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midPoint);
  const rightColumnFAQs = faqData.slice(midPoint);

  return (
    <section id="faq">
      <Card className="mx-auto w-full max-w-6xl">
        <CardContent>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and processes
            </p>
          </div>

          {/* Mobile view: Single column */}
          <div className="space-y-4 md:hidden">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Desktop view: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6">
            {/* Left column */}
            <div className="space-y-4">
              {leftColumnFAQs.map((faq, index) => (
                <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-4">
              {rightColumnFAQs.map((faq, index) => (
                <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQ;
