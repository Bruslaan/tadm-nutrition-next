'use client';
import FloatingIcon from './floating-icon';

export function TextRevealDemo() {
  return (
    <div className="relative z-10 flex min-h-64 w-full items-center justify-center rounded-lg dark:bg-black">
      <TextRevealByWord text="Empowering the brightest minds to unlock their ultimate potential" />
    </div>
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
        <div className={'mx-auto flex h-full items-center bg-transparent px-[1rem]'}>
          <p
            ref={targetRef}
            className={
              'flex flex-wrap justify-center p-10 text-4xl font-bold dark:text-white/20 md:p-8 md:text-8xl'
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
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        // @ts-ignores
        className={'text-black dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  );
};
