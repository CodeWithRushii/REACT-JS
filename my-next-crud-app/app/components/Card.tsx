type CardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function Card({ title, description, emoji }: CardProps) {
  return (
    <div className="group relative max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
      
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />

      <div className="relative p-6 bg-white rounded-2xl z-10">
        
        {/* Emoji */}
        <div className="w-12 h-12 mb-4 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl">
          {emoji}
        </div>

        <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-800 group-hover:text-blue-700 transition-colors">
          {title}
        </h5>

        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>

        <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Manage <span>→</span>
        </div>
      </div>
    </div>
  );
}