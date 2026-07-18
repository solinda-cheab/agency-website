import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/portfolio/ProjectCard";
import { seoData } from "../config/seoData";
import { projects as staticProjects } from "../api/projects";
import { getPortfolioStories } from "../api/storyblok";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Pull projects from Storyblok. If the space/content type isn't set up
  // yet, isn't reachable, or returns nothing, we fall back to the local
  // static project list so the page never breaks.
  const { data: storyblokProjects, isLoading } = useQuery({
    queryKey: ["portfolio-stories"],
    queryFn: getPortfolioStories,
    staleTime: 5 * 60 * 1000,
  });

  const projects =
    storyblokProjects && storyblokProjects.length > 0 ? storyblokProjects : staticProjects;

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category).filter(Boolean))],
    [projects]
  );

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <Container style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <SEO config={seoData.portfolio} />
      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="w-full work-grid-bg text-white py-20 px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle number="03" title="Our Work" className="mb-10" />

          {/* Category filter — new feature */}
          <div className="mb-16 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  activeFilter === category
                    ? "border-[#ff7e1a] bg-[#ff7e1a] text-white"
                    : "border-white/30 text-white/80 hover:border-white hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          ) : (
            <p className="text-white/70">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </Container>
  );
}

export default Portfolio;
