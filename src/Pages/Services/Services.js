import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
	/* const services = useServices();
	console.log("Services Page: ", services); */

	// const services = useContext(DataContext);

	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				// console.log("Services: ", services);
			});
	}, []);

	return (
		<div className='container my-5'>
			<section id='services'>
				<p className='text-uppercase text-info text-center'>What We Do</p>
				<h3 className='text-primary text-capitalize text-center display-6 text-bold'>
					Providing Medial Care For The Sickes In our Community
				</h3>
				<div className='row my-5'>
					{services.map((service) => (
						<SingleService key={service.id} service={service} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Services;
