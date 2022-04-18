import { createContext, useEffect, useState } from "react";

export const DataContext = createContext([]);

const DataContextProvider = ({ children }) => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<DataContext.Provider value={services}>{children}</DataContext.Provider>
	);
};

export default DataContextProvider;
