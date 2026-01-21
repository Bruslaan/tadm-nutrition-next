export function BlogCardSkeleton({ spotlight }: { spotlight?: boolean }) {
  const columns = spotlight ? 'col-span-12' : 'md:col-span-6 col-span-12';

  return (
    <div
      className={`relative h-[15rem] animate-pulse overflow-hidden rounded-xl bg-neutral-200 md:h-[23rem] ${columns}`}
    >
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="mb-2 h-8 w-3/4 rounded bg-neutral-300" />
        <div className="h-4 w-1/4 rounded bg-neutral-300" />
      </div>
    </div>
  );
}
