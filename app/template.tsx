export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 animate-[route-arrive_450ms_ease-out_both] motion-reduce:animate-none">
      {children}
    </div>
  );
}
