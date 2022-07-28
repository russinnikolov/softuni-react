import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext} from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
	const { loginHandler } = useContext(AuthContext);

	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		const {
			email,
			password,
		} = Object.fromEntries(new FormData(e.target));

		authService.login(email, password)
			.then(authData => {
				loginHandler(authData);
				navigate('/');
			})
			.catch(() => {
				navigate('/404');
			});
	};

	return(
		<>
			<section className="ud-page-banner">
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
											name="email"
											placeholder="Email/username"
										/>
									</div>
									<div className="ud-form-group">
										<input
											type="password"
											name="password"
											placeholder="*********"
										/>
									</div>
									<div className="ud-form-group">
										<button type="submit" className="ud-main-btn w-100">Login</button>
									</div>
								</form>
								<Link className="forget-pass" to="/">
									Forget Password?
								</Link>
								<p className="signup-option">
									Not a member yet? <Link to="/register"> Sign Up </Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login;