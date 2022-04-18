import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
	const { id, title, description, img } = service;

	/* const navigate = useNavigate();

	const handleServiceDetails = () => {
		navigate(`services/${id}`);
	}; */

	return (
		<div className='col-sm-12 col-md-4'>
			<Card>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title className='text-center'>{title}</Card.Title>
					<Card.Text>{description.slice(0, 150)}</Card.Text>
					<Link
						to={`/services/${id}`}
						variant='primary'
						className='d-block mx-auto btn btn-primary'
					>
						Details for Booking
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleService;
