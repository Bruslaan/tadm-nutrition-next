'use client';

export function TextRevealDemo({ text }: { text: string }) {
  return (
    <section
      id="text-reveal"
      className="relative z-10 flex min-h-64 w-full items-center justify-center rounded-lg dark:bg-black"
    >
      <TextRevealByWord text={text} />
    </section>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    // @ts-ignores
    target: targetRef
  });
  const words = text.split(' ');

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
      <div className={'sticky top-0 h-[50%] w-full'}>
        <img
          src="/static/line1.svg"
          alt=""
          className="absolute inset-x-0 h-full w-full object-cover opacity-55"
        />
        <img
          src="/static/line2.svg"
          alt=""
          className="absolute inset-x-0 h-full w-full object-cover opacity-55"
        />
        <div className={'mx-auto flex h-full items-center bg-transparent px-[1rem]'}>
          <p
            ref={targetRef}
            className={
              'flex flex-wrap justify-center p-1 text-4xl font-bold md:p-8 md:text-8xl dark:text-white/20'
            }
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={'absolute opacity-10'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        // @ts-ignores
        className={'text-gray-900 dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  );
};
