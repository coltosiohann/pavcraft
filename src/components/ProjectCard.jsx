export default function ProjectCard({ project }) {
  const img = project.imagePrimary || project.imageAfter;

  return (
    <div className="group relative overflow-hidden bg-surface-container-low">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={img}
          alt={project.nameRo}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>

      {/* Info */}
      <div className="p-6 border-t border-surface-container-high">
        <span className="font-micro-label text-micro-label text-mid-gray uppercase tracking-widest block mb-2">
          {project.type}
        </span>
        <h3 className="font-ui-heading text-ui-heading text-pure-white mb-1">
          {project.nameRo}
        </h3>
        <div className="flex items-center gap-6 mt-3">
          <div>
            <p className="font-micro-label text-micro-label text-mid-gray">SUPRAFAȚĂ</p>
            <p className="font-ui-heading text-ui-heading text-pure-white text-sm">{project.area}</p>
          </div>
          <div>
            <p className="font-micro-label text-micro-label text-mid-gray">MATERIAL</p>
            <p className="font-ui-heading text-ui-heading text-pure-white text-sm">{project.material}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
