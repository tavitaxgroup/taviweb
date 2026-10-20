export default function AdminLoading() {
  return (
    <div className="p-6 md:p-8 max-w-[1440px] mx-auto space-y-6 bg-[#FAF9F6] min-h-full animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-5 w-48 bg-slate-200/80 rounded-lg" />
          <div className="h-3.5 w-72 bg-slate-200/50 rounded-md" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-28 bg-slate-200/70 rounded-lg" />
          <div className="h-9 w-32 bg-slate-900/15 rounded-lg" />
        </div>
      </div>

      {/* KPI Strip Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 border border-slate-200/70 space-y-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div className="h-3 w-24 bg-slate-200/70 rounded" />
            <div className="h-6 w-20 bg-slate-200/90 rounded-md" />
            <div className="h-2.5 w-32 bg-slate-100 rounded" />
          </div>
        ))}
      </div>

      {/* Main Content Card Skeleton */}
      <div className="bg-white rounded-2xl border border-slate-200/70 p-6 space-y-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="h-4 w-40 bg-slate-200/80 rounded" />
          <div className="h-8 w-56 bg-slate-100 rounded-lg" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map(row => (
            <div key={row} className="h-12 w-full bg-slate-50/90 rounded-xl border border-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
