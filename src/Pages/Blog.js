const Blog = () => {
	return (
		<div className='container'>
			<div className='row my-5'>
				<div className='col-sm-8 mx-auto'>
					<article>
						<h2 className='mb-3'>
							Q1) Difference between the authorization and authentication?
						</h2>
						<p className='lead'>
							Authentication is the process of verifying who is a consumer, on
							the ohterhand, authorization is the process of veryfing waht that
							particular or group of consumers have access to.
						</p>
						<p className='lead'>
							There are some significat differences between them. Firstly,
							authentication verifies the user where the authorization fixed
							what resources a user can access.
						</p>
						<p className='lead'>
							Secondly, In the authentication process, users or consumers are
							verified while the authorization process, users or persons are
							validated.
						</p>
						<p className='lead'>
							Thirdly, authntication process usually done before authorization,
							where another usually done after successfully authentication.
						</p>
					</article>
					<article>
						<h2 className='mb-3'>
							Q2) Why are you using firebase? What other options do you have to
							implement authentication?
						</h2>
						<p className='lead'>
							Firebase is a Backend-as-a-Service platform that provides some
							major and crucial functionalities to help with backend and
							frontend developers for their Android, iOS, Web or other platform.
						</p>
						<p className='lead'>
							Nowadays, it is maintained by Google which is a big giant
							technology company. But, previously, Firebase was developed by
							Envolve in 2011. Mr James Templon and Andrew Lee are the founder
							of that company. In 2012, Firebase became a separate company. In
							2014, Google purchased Firebase and until now it is managed by
							Google.
						</p>
						<p className='lead'>
							There are some other company and technology help us to
							authenticate, beside firebase. Top alternatives to Firebase
							authentication are given below
						</p>
						<ul>
							<li>
								<span className='fw-bold'>Sentry:</span> It's look like a
								firebase authentication. It aslo provides some ohter facilities
								like firebase.
							</li>
							<li>
								<span className='fw-bold'>Auth0</span> offers authentication
								facilities like Firebase
							</li>
							<li>
								<span className='fw-bold'>Passport :</span> Is is simple
								authentication. That's have huge social media authentications.
							</li>
							<li>
								<span className='fw-bold'>JSON Web Token (JWT):</span> it also
								provides authentication. It's a open source project.
							</li>
						</ul>
					</article>
					<article>
						<h2 className='mb-3'>
							Q3) What other services does firebase provide other than
							authentication?
						</h2>
						<p className='lead'>
							Firebase is a Backend-as-a-Service platform, which is maintained
							by Google that provides some major and crucial functionalities to
							help with backend and frontend developers for their Android, iOS,
							Web or other platform.
						</p>
						<p className='lead'>
							Beside authentication, Firebase have some other major facilites
							like storage, hosting, cloud messaging etc. Most of the major
							facilites short descriptions are given below
						</p>
						<ul>
							<li>
								<span className='fw-bold'>Firebase Database:</span> used to
								store users data. It has realtime database, so any updates in
								that data, is refected in real time
							</li>
							<li>
								<span className='fw-bold'>Firebase Cloud Firestore:</span> It's
								enhanced version of Google Realtime Database. Here datas are
								stored as key, value pair and here query is some kind of SQL in
								nature
							</li>
							<li>
								<span className='fw-bold'>Firebase Authentication:</span>{" "}
								provides authentication feature for mobile and web application.
								It has almost all social platform authentication include normal
								Email & Password base authtication.
							</li>
							<li>
								<span className='fw-bold'>Firebase Storage:</span> offers a
								service of storage. It supported almost all kind of image,
								audio, video, pdf, doc etc files for storing.
							</li>
							<li>
								<span className='fw-bold'>Firebase Hosting:</span> offers basic
								web hosting. It's offers also HTTPS and SSL as well
							</li>
							<li>
								<span className='fw-bold'>Firebase Colud Messaging:</span> used
								to send notification. Unfortunately, it's not free at all.
							</li>
						</ul>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Blog;
