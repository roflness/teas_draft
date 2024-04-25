import React from "react";

function article_1() {
	return {
		date: "30 September 2020",
		title: "Power Your Drive for Fleets",
		description:
			"Power Your Drive for Fleets helps fleet owners and operators reduce operating costs, eliminate emissions, and simplify vehicle maintenance by transitioning to electric vehicles. The program connects fleets with resources, fleet-friendly charging rates, and financial incentives to easily and cost-effectively design and install the charging infrastructure needed to power medium- and heavy-duty electric fleets.",
		keywords: [

		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="homepage-article-title">Electrification Timeline</div>

					<div className="paragraph">SDG&E works with fleets from the initial infrastructure planning stage through to design, construction, and ongoing site maintenance.</div>
					<img
						src="https://www.sdge.com/sites/default/files/inline-images/ElectrificationTimeline_2.jpg"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
