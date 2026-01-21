import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-8">
      <h1 className="my-4 text-8xl font-bold">404</h1>
      <h2 className="my-4 text-xl md:text-3xl">Article Not Found</h2>
      <p className="my-8 text-center text-xl text-neutral-600">
        The article you are looking for does not exist.
      </p>
      <Link
        href="/blog"
        className="rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-neutral-800"
      >
        Return to Blog
      </Link>
    </div>
  );
}
