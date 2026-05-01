type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500/20">
      {children}
    </div>
  );
}
