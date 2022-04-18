import { useEffect, useState } from "react";
import SingleCare from "./SingleCare";

const Cares = () => {
	const [cares, setCares] = useState([]);

	useEffect(() => {
		fetch("/care.json")
			.then((res) => res.json())
			.then((data) => {
				setCares(data);
				// console.log("Cares: ", data);
			});
	}, []);

	return (
		<div className='container my-5'>
			<section id='services'>
				<h3 className='text-primary text-capitalize text-center display-6 text-bold'>
					What You Can Do with us now
				</h3>
				<div className='row my-5'>
					{cares.map((care) => (
						<SingleCare key={care.id} care={care} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Cares;
