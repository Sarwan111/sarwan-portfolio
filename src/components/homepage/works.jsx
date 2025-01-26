import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Professional Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src = "https://media.bitsol.tech/wp-content/uploads/2022/04/logo-3.png"
								alt="bitsol"
								className="work-image"
							/>
							<div className="work-title">Bitsol Technologies</div>
							<div className="work-subtitle">
								DevOps Engineer 
							</div>
							<div className="work-duration">Aug 2024 - Present</div>
						</div>
						<div className="work">
							<img
								src = "https://avatars.githubusercontent.com/u/25608508?s=280&v=4"
								alt="xgrid"
								className="work-image"
							/>
							<div className="work-title">Xgrid Solutions Limited</div>
							<div className="work-subtitle">
								Software Engineer - II (DevOps)
							</div>
							<div className="work-duration">May 2022 - July 2024</div>
						</div>
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ex7qcHhmJZPX9KnPKKZTJ6548kMpQvY1GQjpBbgB&s"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">SkipQ</div>
							<div className="work-subtitle">
								DevOps Trainee
							</div>
							<div className="work-duration"> Feb 2021 - May 2022</div>
						</div>

						<div className="work">
							<img
								src="https://files.startupranking.com/startup/thumb/553757_d6fe1a614fd7f6045d8c023d627eaca534aed93c_the-ideators_l.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Ideators Digital</div>
							<div className="work-subtitle">
								Junior DevOps Engineer
							</div>
							<div className="work-duration">Feb 2021 - Feb 2022</div>
						</div>
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qgcr880bodBhyDYRykObOymMsrVuLkjpc5W3rKbX4A&s"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">IFFCO Pakistan LTD</div>
							<div className="work-subtitle">
								Android Developer - Intern
							</div>
							<div className="work-duration">Nov 2020 - Jan 2021</div>
						</div>
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
