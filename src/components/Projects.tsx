import ProjectCard, { type ProjectCardProps } from "../components/cards/ProjectCard";
import { projectData } from "../content/projects/ProjectData";

export interface ProjectsProps {
  selectedProjects?: string[]
};

export default function Projects({ selectedProjects }: ProjectsProps) {
  const toDisplay: ProjectCardProps[] = (
    selectedProjects ?
      selectedProjects.flatMap(project => {
        const data = projectData.get(project);
        return data ? [data] : [];
      })
      : Array.from(projectData.values())
  );

  return (
    <div className="flex flex-col min-h-1/2 place-content-center mt-8">
      {
        toDisplay.map((project: ProjectCardProps) => {
          const output = (
            <div
              className="py-2"
              key={project.projectName} >
              <ProjectCard
                {...project}
              />
            </div>
          );

          return output;
        })
      }
    </div>
  );
}
