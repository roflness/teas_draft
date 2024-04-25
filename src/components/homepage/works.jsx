import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBook}
				title="Terms to Know"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Average power</div>
							<div className="work-subtitle">
							The average amount of power that your fleet requires at any given time while charging
							</div>
						</div>

						<div className="work">
							<div className="work-title">Charge rate</div>
							<div className="work-subtitle">
							The rate at which a battery can charge, measured in kilowatts (kW)
							</div>
						</div>
						<div className="work">
							<div className="work-title">Charging window</div>
							<div className="work-subtitle">
							The period of time in your fleet's duty cycle when vehicles can charge, measured in hours
							</div>
						</div>
						<div className="work">
							<div className="work-title">Duty cycle</div>
							<div className="work-subtitle">
							The portion of time during which a vehicle is operated
							</div>
						</div>
						<div className="work">
							<div className="work-title">EVSE</div>
							<div className="work-subtitle">
							Electric vehicle supply equipment, or the charger unit
							</div>
						</div>
						<div className="work">
							<div className="work-title">kWh</div>
							<div className="work-subtitle">
							Kilowatt-hour, the unit of measure for electrical energy
							</div>
						</div>
						<div className="work">
							<div className="work-title">Load profile</div>
							<div className="work-subtitle">
							The amount(s) of power that a fleet requires on an hourly basis over the course of a day
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;