import { useEffect, useState } from "react";

export const useServices = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return services;
};
