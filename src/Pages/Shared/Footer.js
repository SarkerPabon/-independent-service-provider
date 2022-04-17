import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className='bg-primary text-white py-5'>
			<div className='container'>
				<div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
					<h3>ToothCare</h3>
					<p className='mb-1 my-3 my-md-0'>
						&copy;sarkerpabon {new Date().getFullYear()} | all right reserved{" "}
					</p>
					<p className='mb-1 my-3 my-md-0'>
						<span className='mx-2'>
							<FaGithub />
						</span>
						<span className='mx-2'>
							<FaTwitter />
						</span>
						<span className='mx-2'>
							<FaInstagram />
						</span>
						<span className='mx-2'>
							<FaYoutube />
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
