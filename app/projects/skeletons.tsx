const BAR = "animate-pulse rounded bg-neutral-200";

export function StatsSkeleton() {
  return (
    <div className="mt-6 flex gap-12" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="space-y-2">
          <div className={`h-4 w-12 ${BAR}`} />
          <div className={`h-7 w-16 ${BAR}`} />
        </div>
      ))}
    </div>
  );
}
  
export function RowsSkeleton() {
  return (
    <div className="mt-8 space-y-4" aria-hidden="true">
      <div className={`h-10 w-80 ${BAR}`} />
      <div className="h-1"/>
      {[0, 1, 2, 3].map((i) => <div key={i} className={`h-7 w-50 ${BAR}`} />)}
    </div>
  );
}