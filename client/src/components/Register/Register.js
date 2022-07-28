import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";


const Register = () => {
	const { loginHandler } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const email = formData.get('email');
		const password = formData.get('password');
		const confirmPassword = formData.get('confirm-password');

		if(password !== confirmPassword)
			return;

		authService.register(email, password)
			.then(authData => {
				loginHandler(authData);
				navigate('/');
			})
			.catch(() => {
				navigate('/404');
			});
	}


	return (
		<>
			<section className="ud-page-banner">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ud-banner-content">
								<h1>Register Page</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="ud-login">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ud-login-wrapper">
								<div className="ud-login-logo">
									<img src="assets/images/logo/logo-2.svg" alt="logo"/>
								</div>
								<form className="ud-login-form" onSubmit={onSubmit}>
									<div className="ud-form-group">
										<input
											type="email"
											id="email"
											name="email"
											placeholder="Email"
										/>
									</div>
									<div className="ud-form-group">
										<input
											type="password"
											id="password"
											name="password"
											placeholder="*********"
										/>
									</div>
									<div className="ud-form-group">
										<input
											type="password"
											name="confirm-password"
											id="confirm-password"
											placeholder="*********"
										/>
									</div>
									<div className="ud-form-group">
										<button type="submit" className="ud-main-btn w-100">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Register;