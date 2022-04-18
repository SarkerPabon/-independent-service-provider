import { useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Register = () => {
	const [agree, setAgree] = useState(false);

	// const navigate = useNavigate();

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

	const [updateProfile] = useUpdateProfile(auth);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		// console.log(name, email, password);
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName: name });
	};

	if (loading) {
		return <Loading />;
	}

	if (error) {
		toast.error(error.message, { theme: "colored" });
	}

	if (user) {
		console.log(user);
		// navigate("/home");
		return <Navigate to='/home' />;
	}

	return (
		<div className='container'>
			<h1 className='text-center text-primary my-4'>Registration</h1>
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
					<input
						onClick={() => setAgree(!agree)}
						type='checkbox'
						className='form-check-input'
						id='checkout'
					/>
					<label
						className={`form-check-label ${agree ? "" : "text-danger"} `}
						htmlFor='exampleCheck1'
					>
						Accept Genius Terms & Conditions
					</label>
				</div>
				<button type='submit' className='btn btn-primary' disabled={!agree}>
					Register
				</button>
				<p className='lead mt-3 text-center'>
					Already Registered?{" "}
					<Link
						to='/login'
						className='text-decoration-none text-primary fw-bold'
					>
						Login?
					</Link>
				</p>
			</form>
			<ToastContainer />
			<SocialLogin />
		</div>
	);
};

export default Register;
