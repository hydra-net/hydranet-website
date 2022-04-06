const CardSkeleton = () => (
  <div className="animate-pulse rounded-md border border-brand-darker-blue bg-brand-blue shadow-lg">
    <div className="h-24 w-full rounded-t-md bg-slate-700" />
    <div className="px-4 pb-4">
      <div className="w-full space-y-6 py-1">
        <div className="mt-3 h-2 w-24 rounded bg-slate-700" />
        <div className="space-y-3">
          <div className="col-span-2 h-2 rounded bg-slate-700" />
          <div className="col-span-1 h-2 rounded bg-slate-700" />
        </div>
      </div>
    </div>
  </div>
);

export default CardSkeleton;
