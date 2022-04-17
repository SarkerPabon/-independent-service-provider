import Banner from "./Shared/Banner/Banner";

const Home = () => {
	return (
		<>
			<Banner />
			<div className='container my-5'>
				<section id='services'>
					<p className='text-uppercase text-info text-center'>What We Do</p>
					<h3 className='text-primary text-capitalize text-center display-6 text-bold'>
						Providing Medial Care For The Sickes In our Community
					</h3>
				</section>
			</div>
		</>
	);
};

export default Home;
