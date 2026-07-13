export default function ProjectCard({ image, alt, title, description, offset = false }) {
  return (
    <div
      className={`bg-[#f9f9f9] p-4 group cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_24px_50px_rgba(0,82,204,0.18)] ${
        offset ? "md:mt-24" : ""
      }`}
    >
      <div className="bg-gray-200 aspect-[4/3] mb-6 overflow-hidden relative">
        <img alt={alt} className="w-full h-full object-cover" src={image} />
        <div className="absolute inset-0 bg-[#0052cc]/10 mix-blend-multiply" />
      </div>
      <div className="px-4 pb-8">
        <h3 className="text-4xl font-black text-[#0052cc] mb-6 leading-tight">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h3>
        <p className="text-[#0052cc] text-sm leading-relaxed opacity-80">{description}</p>
      </div>
    </div>
  );
}
