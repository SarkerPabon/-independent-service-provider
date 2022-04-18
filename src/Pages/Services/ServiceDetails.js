import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../Provider/DataContextProvider";

const ServiceDetails = () => {
	const navigate = useNavigate();

	const [serviceInfo, setServiceInfo] = useState({});
	const { serviceId } = useParams();
	// console.log("Service ID: ", serviceId);

	const services = useContext(DataContext);
	console.log("Service Details: ", services, Array.isArray(services));

	useEffect(() => {
		const details = services.find(
			(service) => service.id === parseInt(serviceId)
		);
		setServiceInfo(details);
		// console.log("Service Info: ", serviceInfo);
	}, [services, serviceId]);

	return (
		<div className='container'>
			<h1 className='text-center text-primary my-4 text-muted'>
				Details About {serviceInfo?.title}
			</h1>
			<div className='row mb-5 align-items-center'>
				<div className='col-sm-12 col-md-6 mb-sm-3'>
					<h3 className='text-center display-5'>{serviceInfo?.title}</h3>
					<p className='lead'>{serviceInfo?.description}</p>
					<div className='d-flex justify-content-evenly align-items-center'>
						<span className='fs-3 mt-3'>Price: ${serviceInfo?.price}</span>
						<button
							onClick={() => navigate("/checkout")}
							className='btn btn-outline-primary d-block  mt-3 '
						>
							Book Now
						</button>
					</div>
				</div>
				<div className='col-sm-12 col-md-6'>
					<img src={serviceInfo?.img} alt='title' className='img-fluid' />
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
