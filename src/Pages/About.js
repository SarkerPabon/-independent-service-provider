import avatar from "../images/avatar.svg";
const About = () => {
	return (
		<div className='container'>
			<h1 className='text-center text-primary my-4 text-muted'>About Me</h1>
			<div className='row mb-5 justify-content-between align-items-center'>
				<div className='col-sm-12 col-md-6 mb-sm-3'>
					<h3 className='text-center display-5'>
						Hi, I’m Pabon Sarker. Nice to meet you.
					</h3>
					<p className='lead mt-4'>
						Since beginning my journey as a developer nearly 6 months ago, I've
						already learned HTML5, CSS, CSS3, Bootstrap, Tailwind, React,
						Context API. I'm quietly confident, naturally curious, and
						perpetually working on improving other topic like
						React-Redux-Toolkit, Node, Express, MongoDB. I want to be a
						full-stack developer
					</p>
				</div>
				<div className='col-sm-12 col-md-6'>
					<img src={avatar} alt='title' className='img-fluid d-block mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default About;
