import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const address = event.target.address.value;
		const phone = event.target.phone.value;

		console.log(name, email, address, phone);

		toast.success("We will contact you very soon", {
			theme: "colored",
			toastId: "success",
		});
	};

	return (
		<div className='container'>
			<div className='my-5'>
				<h1 className='text-center text-primary'>Thank you for choosing us.</h1>
				<p className='lead text-center'>Please fill up the below form</p>

				<form onSubmit={handleSubmit} className='w-50 mx-auto '>
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
					</div>
					<div className='mb-3'>
						<input
							type='text'
							className='form-control'
							name='address'
							id='address'
							placeholder='Enter address'
						/>
					</div>
					<div className='mb-3'>
						<input
							type='text'
							className='form-control'
							name='phone'
							id='phone'
							placeholder='Enter phone number'
						/>
					</div>

					<button type='submit' className='btn btn-primary'>
						Submit Info
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Checkout;
