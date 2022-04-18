import { Card } from "react-bootstrap";

const SingleCare = ({ care }) => {
	const { title, description, img } = care;

	return (
		<div className='col-sm-12 col-md-4'>
			<Card>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title className='text-center'>{title}</Card.Title>
					<Card.Text>{description.slice(0, 150)}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default SingleCare;
