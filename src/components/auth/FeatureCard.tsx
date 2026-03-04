interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default">
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-white/40">{desc}</div>
      </div>
    </div>
  );
}
