import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">

					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							From Ideas to Impact
							<br />
							<br />
							The Projects I Have Worked On
						</div>

						<div className="subtitle projects-subtitle">
							Throughout my career, I've been involved in a diverse range of projects,
							each representing a significant milestone in my journey. These projects are
							open to exploration, allowing anyone interested to delve into the work I've
							done. If you discover something that piques your interest or have
							suggestions for improvements or innovations, don't hesitate to examine the
							code and share your insights.
							<br />
							Collaboration is a cornerstone of progress, and I wholeheartedly embrace
							fresh ideas and constructive feedback. By working together, we can not only
							enhance our projects but also foster a vibrant environment of learning and
							growth. So, feel free to reach out, and let's embark on a journey of
							innovation and improvement together.
						</div>

						{/* <div className="projects-image">
							<img src="homepage.jpg" alt="Project" />
						</div> */}

						<div className="projects-list">
							<AllProjects />
						</div>
						</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
