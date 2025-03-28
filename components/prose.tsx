import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={clsx(
        'prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline prose-a:hover:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mx-auto max-w-6xl text-base leading-7 text-black dark:text-white',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
