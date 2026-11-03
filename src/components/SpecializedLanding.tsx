import { Navigate, useParams } from "react-router-dom";
import Projects from "../components/Projects";
import { useRef } from "react";
import JumperFab from "./JumperFab";
import Bio from "./Bio";
import tempImg from "../content/contact-pic.jpg"
import Webcart from "./apps/Webcart";

class SpecializedLandingData {
  bio: React.ReactNode
  highlight: React.ReactNode
  projects?: string[]
}

const landingPages = new Map<string, SpecializedLandingData>([
  ["sim", {
    bio: (<Bio title="Simulation Engineer" />),
    highlight: (<img
      src={tempImg}
    />),
    projects: ["idol-on-duty", "hockey-stop"]
  }],

  ["personal", {
    bio: (<Bio title="Personal Page" />),
    highlight: (<Webcart />),
  }],
]);

export default function SpecializedLanding() {
  const { type } = useParams();

  const pageData = landingPages.get(type ?? "");

  if (pageData == undefined) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row py-4">
        <div className="flex-1 text-left bg-base-200 p-4">
          <div className="text-xl md:text-3xl">
            Hello, I'm
            <div className="btn-link text-info font-bold">
              <a href="https://www.linkedin.com/in/edgar-donoso-mansilla" className="inline-flex items-center gap-2">
                Edgar Jose Donoso Mansilla
              </a>
            </div>
          </div>

          <div className="flex-1 text-left">
            {pageData.bio}
          </div>
        </div>

        <div className="flex-1 pt-4 md:pt-0">
          {pageData.highlight}
        </div>
      </div>

      {
        pageData.projects ?
          <HighlightProjects projects={pageData.projects} />
          : null
      }
    </div>
  );
}

interface HighlightProjectsProps {
  projects: string[]
}

function HighlightProjects({ projects }: HighlightProjectsProps) {
  const targetSectionRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="">
      <JumperFab
        targetSectionRef={targetSectionRef}
      />

      <div className="divider divider-start">
        <button
          className="btn btn-ghost text-4xl text-primary italic font-bold"
          ref={targetSectionRef}
          onClick={
            () => {
              targetSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        >
          Projects
        </button>
      </div>

      <Projects selectedProjects={projects} />
    </div>
  );
}
