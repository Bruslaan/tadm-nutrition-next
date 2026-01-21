export default function ArticleLoading() {
  return (
    <div className="mx-auto mb-8 mt-24 max-w-[768px] p-4">
      <div className="mb-6 h-12 w-3/4 animate-pulse rounded bg-neutral-200" />
      <div className="mb-8 h-[400px] animate-pulse overflow-hidden rounded-xl bg-neutral-200" />
      <div className="space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-200" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-neutral-200" />
      </div>
    </div>
  );
}
