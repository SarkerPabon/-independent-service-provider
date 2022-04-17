import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleService = ({ service }) => {
	const { id, title, description, img } = service;

	const navigate = useNavigate();

	return (
		<div className='col-sm-12 col-md-4'>
			<Card>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title className='text-center'>{title}</Card.Title>
					<Card.Text>{description.slice(0, 150)}</Card.Text>
					<Button
						onClick={() => navigate(`/services/${id}`)}
						variant='primary'
						className='d-block mx-auto'
					>
						Details for Booking
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleService;