interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-[#F46A6A] mb-4 group-hover:bg-[#F46A6A] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
