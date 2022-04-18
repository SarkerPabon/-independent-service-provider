import { useRef } from "react";
import {
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
	// const navigate = useNavigate();
	const emailRef = useRef();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

	const handleSubmit = async (event) => {
		event.preventDefault();
		event.stopPropagation();

		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(email, password);
		await signInWithEmailAndPassword(email, password);
	};

	if (loading) {
		return <Loading />;
	}

	if (error) {
		toast.error(error.message, { theme: "colored", toastId: "error.message" });
	}

	if (user) {
		console.log(user);
		// navigate(from, { replace: true });
		return <Navigate to={from} replace={true} />;
	}

	const resetPassword = async (event) => {
		event.stopPropagation();
		const email = emailRef.current.value;
		console.log(email);

		if (email) {
			await sendPasswordResetEmail(email);
			toast.success("Email Sent", { theme: "colored", toastId: "emailSucces" });
			console.log("email success");
		} else {
			toast.error("Enter the email adress", {
				theme: "colored",
				toastId: "emailError",
			});
		}
	};

	return (
		<div className='container'>
			<h1 className='text-center text-primary my-2'>Login</h1>
			<form onSubmit={handleSubmit} className='w-50 mx-auto'>
				<div className='mb-3'>
					<input
						ref={emailRef}
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

				<p className='lead mt-3 mb-0 text-center'>
					New here? &nbsp;
					<Link
						to='/register'
						className='text-decoration-none text-primary fw-bold'
					>
						Registration?
					</Link>
				</p>

				<p className='lead mt-0 pt-0 text-center'>
					Reset Password?
					<button
						to='/register'
						className='btn btn-link text-decoration-none text-primary fw-bold fs-5 mb-1'
						onClick={resetPassword}
					>
						Sent Email?
					</button>
				</p>
			</form>
			<ToastContainer />
			<SocialLogin />
		</div>
	);
};

export default Login;
