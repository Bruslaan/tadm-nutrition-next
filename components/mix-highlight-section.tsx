import Link from 'next/link';

const MixHighlightSection = ({
  title,
  description,
  linkText,
  linkHref,
  lang
}: {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  lang: string;
}) => {
  return (
    <section id="mix-highlight" className="relative">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {/* Container */}
      <div className="z-10 mx-auto w-full max-w-7xl px-4 py-12 md:px-2 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl">{title}</h2>
          <p className="max-w-4xl text-xl leading-relaxed text-gray-700">{description}</p>
          <Link
            href={linkHref}
            className="mt-14 inline-flex w-fit items-center rounded-full bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-neutral-800"
          >
            {linkText}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MixHighlightSection;
