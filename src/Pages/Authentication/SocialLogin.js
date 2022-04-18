import {
	useSignInWithGithub,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import github from "../../images/social/github.png";
import google from "../../images/social/google.png";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);
	const [signInWithGithub, githubUser, githubLoading, githubError] =
		useSignInWithGithub(auth);

	let errorElement;
	if (googleError || githubError) {
		errorElement = (
			<p className='text-danger'>
				Error: {googleError?.message} {githubError?.message}
			</p>
		);
	}

	if (googleLoading || githubLoading) {
		return <Loading />;
	}

	if (googleUser || githubUser) {
		return <Navigate to={from} replace={true} />;
	}

	return (
		<div className='w-50 mx-auto mt-0 mb-5'>
			<div className='d-flex align-items-center'>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-primary'
				></div>
				<p className='mx-3 pt-2'>or</p>
				<div
					style={{ height: "1px", width: "40%" }}
					className='bg-primary'
				></div>
			</div>
			<div>
				{errorElement}
				<button
					onClick={() => signInWithGoogle()}
					className='btn btn-info d-block mx-auto text-white my-2 px-3'
				>
					<img src={google} alt='logo' height='30px' />
					<span className='px-2'>Google Sign In</span>
				</button>
				<button
					onClick={() => signInWithGithub()}
					className='btn btn-info d-block mx-auto text-white my-2 px-3'
				>
					<img src={github} alt='logo' height='30px' />
					<span className='px-2'>Github Sign In</span>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
