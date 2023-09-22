import {ProjectCard} from "@/components";
import {Slide, Slider, Typography} from "@/components/ui";
import {ScreenWidth} from "@/lib/constants";
import {Project} from "@prisma/client";
import {FC} from "react";

interface Props {
	projects: Project[];
}

const ProjectSlider: FC<Props> = ({projects}) => {
	if (projects.length === 0) {
		return <Typography>No projects yet.</Typography>;
	}

	return (
		<Slider
			spaceBetween={16}
			breakpoints={{
				[ScreenWidth.PHONE]: {
					slidesPerView: 2.2
				},
				[ScreenWidth.SM_PHONE]: {
					slidesPerView: 1.2
				}
			}}>
			{projects.map(project => (
				<Slide key={project.id}>
					<ProjectCard project={project} />
				</Slide>
			))}
		</Slider>
	);
};

export default ProjectSlider;
