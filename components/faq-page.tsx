'use client';
import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useState } from 'react';

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

export type AccordionContent = {
  questions: string;
  content: string[];
};

export const Accordions = ({ accordionContent }: { accordionContent: AccordionContent[] }) => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };

  return (
    <div>
      {accordionContent.map((accordion, index) => {
        return (
          <FAQItem
            clicked={() => handleClick(index)}
            isOpen={openedIndex === index}
            key={accordion.questions}
            question={accordion.questions}
            answer={accordion?.content?.map((item, index) => (
              <p className="mb-3" key={index}>
                {item}
              </p>
            ))}
          />
        );
      })}
    </div>
  );
};

export const FAQItem = ({
  question,
  answer,
  isOpen,
  clicked
}: {
  question?: string;
  answer: string | ReactNode;
  isOpen: boolean;
  clicked: () => void;
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={clicked}
        className="flex w-full items-center justify-between rounded-lg bg-gray-50 p-4 text-left transition-colors duration-200 hover:bg-gray-50"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`ml-4 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 transform' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="rounded-b-lg bg-gray-50 p-4 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const FAQSection = ({
  title,
  items
}: {
  title: string;
  items: { question: string; answer: string }[];
}) => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };

  // Split FAQ items into two columns
  const midPoint = Math.ceil(items.length / 2);
  const leftColumnFAQs = items.slice(0, midPoint);
  const rightColumnFAQs = items.slice(midPoint);

  return (
    <section id="faq" className="relative mt-48 min-h-screen">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <Card className="mx-auto w-full max-w-6xl">
        <CardContent>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">{title}</h2>
          </div>

          {/* Mobile view: Single column */}
          <div className="space-y-4 md:hidden">
            {items.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openedIndex === index}
                clicked={() => handleClick(index)}
              />
            ))}
          </div>

          {/* Desktop view: Two columns */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-6">
            {/* Left column */}
            <div className="space-y-4">
              {leftColumnFAQs.map((faq, index) => (
                <FAQItem
                  key={`left-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openedIndex === index}
                  clicked={() => handleClick(index)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-4">
              {rightColumnFAQs.map((faq, index) => {
                // Calculate the actual index in the full array
                const actualIndex = index + midPoint;
                return (
                  <FAQItem
                    key={`right-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openedIndex === actualIndex}
                    clicked={() => handleClick(actualIndex)}
                  />
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQSection;
