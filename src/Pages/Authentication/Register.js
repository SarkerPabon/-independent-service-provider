import React from "react";

const Register = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(name, email, password);
	};

	return (
		<div className='container'>
			<h1 className='text-center text-primary my-4'>Registration</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto mb-5'>
				<div className='mb-3'>
					<input
						type='text'
						className='form-control'
						name='name'
						id='name'
						placeholder='Enter name'
					/>
				</div>
				<div className='mb-3'>
					<input
						type='email'
						className='form-control'
						name='email'
						id='email'
						placeholder='Enter email'
					/>
					<div id='email' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<input
						type='password'
						className='form-control'
						name='password'
						id='password'
						placeholder='Enter password'
					/>
					<div id='email' className='form-text'>
						Passport length must be six characters
					</div>
				</div>
				<div className='mb-3 form-check'>
					<input type='checkbox' className='form-check-input' id='checkout' />
					<label className='form-check-label' htmlFor='exampleCheck1'>
						Accept Genius Terms & Conditions
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
