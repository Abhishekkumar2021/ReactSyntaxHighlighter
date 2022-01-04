import React from "react";
import "./dropdown.css";

export default function Dropdown({ onChange, data }) {
	const Capitalize = (string) => string[0].toUpperCase() + string.substring(1);
	return (
		<select className="dropdown" onChange={onChange}>
			{Object.keys(data)
				.sort()
				.map((theme, index) => {
					return (
						<option key={index} value={theme}>
							{Capitalize(theme)}
						</option>
					);
				})}
		</select>
	);
}
