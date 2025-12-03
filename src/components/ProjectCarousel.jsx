import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length <= 1) {
    return (
      <img 
        src={images[0]} 
        alt="Project" 
        className="w-full h-full object-cover"
      />
    );
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
      
      <img 
        src={images[currentIndex]} 
        alt={`Project view ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      
      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all"
        aria-label="Previous image"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-all"
        aria-label="Next image"
      >
        <ArrowRight size={20} />
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-[#1EE6B3] scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Contador */}
      <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}