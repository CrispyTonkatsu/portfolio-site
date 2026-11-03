import { Link } from "react-router-dom";
import { format, formatDistanceStrict } from "date-fns";
import type React from "react";

export class ProjectCardImage {
  link?: string
  alt?: string
}

export interface ProjectCardProps {
  // Project Info
  projectName: string,
  linkSection?: React.ReactNode,
  teamName: string,
  projectRoles: string[],
  start: Date
  end: Date
  description: string,
  // Visual Info
  images?: ProjectCardImage[]
  // Website info
  projectPage: string
};

export default function ProjectCard({ projectName, linkSection = undefined, teamName, projectRoles, start, end, description, images = undefined, projectPage = '' }: ProjectCardProps) {
  const readMoreButton = (projectPage == "" ?
    null
    : (<Link
      to={projectPage}
      className="btn btn-accent btn-outline w-full md:w-auto"
    >
      Read More
    </Link>)
  );

  const dateFormat = "y-MMM";
  const startString = format(start, dateFormat);
  const endString = format(end, dateFormat);

  const durationString = formatDistanceStrict(end, start, {
    unit: "month",
    roundingMethod: "ceil"
  });

  return (
    <div className="flex flex-col h-3/5 md:flex-row">
      <div className="flex-2 flex flex-col bg-base-100 p-4 md:p-8">

        <div className="flex flex-row justify-between w-full">
          <div className="text-2xl text-primary font-bold italic">
            {projectName}
          </div>

          <div className="text-secondary text-xs md:text-lg place-self-center">
            {linkSection}
          </div>
        </div>

        <div className="flex flex-row text-xs md:text-lg text-info font-light">
          <div className="flex-1 text-start">
            {teamName}
          </div>

          <div className="flex-2 italic text-end">
            {startString} - {endString} ({durationString})
          </div>

        </div>

        <div className="flex flex-col md:flex-row md:gap-4 py-2">
          {
            // className="font-light text-xs md:text-sm">
            projectRoles.map(role => {
              return (
                <div
                  key={role}
                  className="badge badge-ghost text-sm text-accent badge-sm p-2 mt-2">
                  {role}
                </div>
              );
            })
          }
        </div>

        <div>{description}</div>

        <div className="hidden md:flex mt-auto pt-4 place-content-end">
          {readMoreButton}
        </div>
      </div>

      {
        images ?
          <div className="flex-1 flex flex-col p-4 gap-2 bg-base-100/50">
            <div className="carousel carousel-center">
              {
                images.map(image => {
                  return (
                    <div
                      id={image.link}
                      className="carousel-item w-full"
                      key={image.link}>
                      <img
                        src={image.link}
                        alt={image.alt}
                      />
                    </div>
                  );
                })
              }
            </div>
            {
              images.length > 1 ?
                <div className="flex flex-row w-full justify-center gap-2">
                  {
                    images.map((image, index) => {
                      return (
                        <a
                          href={"#" + image.link} className="btn btn-circle btn-neutral btn-xs"
                          key={image.link} >
                          {index + 1}
                        </a>
                      );
                    })
                  }
                </div>
                : null
            }
          </div>
          : null
      }

      <div className="inline md:hidden bg-base-100/50 p-2">
        {readMoreButton}
      </div>
    </div >
  );
}
