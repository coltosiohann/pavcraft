import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/produse/${product.id}`}
      className="group flex flex-col items-center cursor-pointer text-center"
    >
      {/* Circular Image Container */}
      <div className="relative mb-8">
        <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-neutral-800 bg-surface-container shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-ferrari-red group-hover:scale-105 group-hover:rotate-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-near-black border border-neutral-800 rounded-full flex items-center justify-center shadow-xl transform translate-x-2 translate-y-2 group-hover:-translate-y-1 group-hover:border-ferrari-red transition-all duration-300">
          <span className="material-symbols-outlined text-pure-white group-hover:text-ferrari-red transition-colors">
            arrow_forward
          </span>
        </div>
      </div>

      {/* Text Info */}
      <div>
        <h3
          className="text-pure-white mb-2"
          style={{
            fontFamily: "'Bodoni Moda', 'Cinzel', serif",
            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
            fontWeight: 600,
            letterSpacing: '0',
          }}
        >
          {product.name}
        </h3>
        <p className="font-micro-label text-xs sm:text-sm text-neutral-400 uppercase tracking-[0.15em] mb-1">
          {product.dimensions} • {product.finish}
        </p>
        <p className="font-micro-label text-[10px] sm:text-xs text-neutral-500 uppercase tracking-[0.2em]">
          {product.collection}
        </p>
      </div>
    </Link>
  );
}
