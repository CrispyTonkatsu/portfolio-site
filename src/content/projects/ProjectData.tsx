import type { ProjectCardProps } from "../../components/cards/ProjectCard";

export const projectData = new Map<string, ProjectCardProps>([
	["idol-on-duty", {
		projectName: "Idol On Duty",
		linkSection: (<>
			<a className="underline" href="https://games.digipen.edu/games/idol-on-duty">DigiPen</a>, <a className="underline" href="https://store.steampowered.com/app/5306710/Idol_On_Duty/">Steam</a>
		</>),
		teamName: "Backstage Crew",
		projectRoles: ["Tech Lead", "Gameplay Engineer", "Tools Development"],
		start: new Date(2025, 8),
		end: new Date(2026, 4),
		description: "Worked with an interdisciplinary 18 people team to develop an Unreal Engine 5 action game in 8 months.",
		projectPage: "idol-on-duty",
		images: [
			{ link: "https://games.digipen.edu/system/photos/14619/original/Idolonduty_Screenshot14.png", alt: "Final Cutscene" },
			{ link: "https://games.digipen.edu/system/photos/14616/original/Idolonduty_Screenshot08.png", alt: "Tutorial Content" },
			{ link: "https://games.digipen.edu/system/photos/14613/original/Idolonduty_Screenshot03.png", alt: "Metal Mode Combat" },
		],
	}],

	["hockey-stop", {
		projectName: "Hockey Stop",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine", "UI & Input Systems"],
		start: new Date(2025, 0),
		end: new Date(2025, 4),
		description: "Utilized the Non-Applicable Engine to develop a 2D platformer and improved the engine for better low-code workflows and performance.",
		projectPage: "/hockey-stop",
		// TODO: Add image
	}],

	["na-engine", {
		projectName: "Non-Applicable Engine",
		teamName: "Non-Applicable Studio",
		projectRoles: ["Producer", "Physics Engine", "Core-Systems Engineer"],
		start: new Date(2024, 8),
		end: new Date(2024, 11),
		description: "Developed a custom 2D game engine in a 4 people team with the goal of supporting physics-based platforming mechanics.",
		projectPage: "/non-applicable-engine",
		// TODO: Add image
	}]
]);
