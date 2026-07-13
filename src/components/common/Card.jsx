export default function Card({ icon: Icon, title, description, isEdge = false }) {
  return (
    <div
      className={`bg-[#d1f2eb] border-l ${
        isEdge ? "border-r" : ""
      } border-[#0052cc] border-t-4 border-t-[#0052cc] border-dashed p-6 sm:p-10 flex flex-col h-full min-h-[320px] sm:min-h-[400px] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,82,204,0.16)]`}
    >
      <div className="absolute top-4 left-4 w-2 h-2 bg-[#0052cc]" />
      <div className="self-end mb-12">
        {Icon && <Icon className="w-16 h-16 text-[#0052cc]" />}
      </div>
      <div className="mt-auto">
        <h3 className="card-title text-3xl text-[#0052cc] mb-4">{title}</h3>
        <p className="text-[#0052cc] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
