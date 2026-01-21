import { BlogCardSkeleton } from '@/components/blog/BlogCardSkeleton';

export default function BlogLoading() {
  return (
    <main className="pb-16 pt-24">
      <h1 className="mx-auto mb-12 max-w-xl text-center text-xl md:text-6xl">KNOWLEDGE HUB</h1>
      <div className="mx-auto grid max-w-[900px] grid-cols-12 gap-y-5 p-4 md:gap-14">
        <BlogCardSkeleton spotlight />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </main>
  );
}
