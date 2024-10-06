'use client';
import { useState } from 'react';

const FAQ = ({ faq }: { faq: { question: string; answer: string } }) => {
  const { question, answer } = faq;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-2xl text-gray-600 dark:text-neutral-400">{isOpen ? '-' : '+'}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">{question}</h3>
      </div>
      {isOpen && <p className="mt-2 pl-5 text-gray-600 dark:text-neutral-400">{answer}</p>}
    </div>
  );
};

export default FAQ;
