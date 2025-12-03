import { useState, useEffect } from 'react';
import IconTech from './IconTech.jsx';
import { iconMap } from '../data/iconMap.ts';

export default function ProjectsFilter({ projects: allProjects }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  // Filtrar proyectos cuando cambien los filtros
  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project =>
        selectedFilters.some(filter => 
          project.technologies.includes(filter)
        )
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilters, allProjects]);

  const toggleFilter = (tech) => {
    setSelectedFilters(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const resetFilters = () => {
    setSelectedFilters([]);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const cardTechs = JSON.parse(card.dataset.technologies || '[]');
      const shouldShow = selectedFilters.length === 0 || 
                        selectedFilters.some(filter => cardTechs.includes(filter));
      card.style.display = shouldShow ? 'block' : 'none';
    });
  }, [selectedFilters]);

  return (
    <div className="mb-8">
      {/* Filtros activos */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={resetFilters}
          className="px-4 py-2 rounded-lg border border-[#1EE6B3] text-[#1EE6B3] hover:bg-[#1EE6B3]/10 transition-all"
        >
          {selectedFilters.length === 0 ? "Todos" : "Mostrar todos"}
        </button>
        
        {selectedFilters.map(tech => (
          <button
            key={tech}
            onClick={() => toggleFilter(tech)}
            className="active-filter-btn px-3 py-2 rounded-lg border border-[#1EE6B3] bg-[#1EE6B3]/20 text-white flex items-center gap-2 transition-all hover:bg-[#1EE6B3]/30"
          >
            <IconTech name={tech} size={16} className="text-current" />
            <span className="text-sm">{tech}</span>
            <span className="text-lg hover:text-red-400 ml-2">×</span>
          </button>
        ))}
      </div>

      {/* Dropdown */}
      <div className="relative mb-8 inline-block">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-[#1EE6B3] hover:text-[#1EE6B3] transition-all"
        >
          + Filtrar tecnologías
        </button>
        
        {showDropdown && (
          <div className="absolute z-50 bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-xl p-4 mt-2 w-72 grid grid-cols-5 gap-3 shadow-2xl">
            {Object.keys(iconMap).map(tech => (
              <button
                key={tech}
                onClick={() => {
                  toggleFilter(tech);
                  setShowDropdown(false);
                }}
                className="p-2 rounded-lg border border-gray-700 hover:border-[#1EE6B3] hover:scale-110 transition-all"
                title={tech}
              >
                <IconTech name={tech} size={24} className="mx-auto text-gray-300" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Contador */}
      <p className="text-gray-400 mb-6">
        {filteredProjects.length} de {allProjects.length} proyectos
      </p>
    </div>
  );
}