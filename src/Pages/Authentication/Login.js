import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(email, password);
		await signInWithEmailAndPassword(email, password);
	};

	if (loading) {
		return <Loading />;
	}

	if (error) {
		toast.error(error.message, { theme: "colored" });
	}

	if (user) {
		console.log(user);
		// navigate(from, { replace: true });
		return <Navigate to={from} replace={true} />;
	}

	return (
		<div className='container'>
			<h1 className='text-center text-primary my-4'>Login</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto mb-5'>
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
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
