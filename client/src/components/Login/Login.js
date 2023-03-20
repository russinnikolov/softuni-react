import {useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import {useLocalStorage} from "../../hooks/useLocalStorage";

import { AuthContext} from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import PublicLayout from "../Layout/PublicLayout";

const Login = () => {
	const { loginHandler } = useContext(AuthContext);

	const navigate = useNavigate();

	const [user, setUser] = useState(localStorage.auth || {});
	const [store, setStore] = useLocalStorage()
	//
	// const loginHandler = (userData) => {
	// 	setUser(userData);
	// 	localStorage.setItem('auth', JSON.stringify({"userName": userData.userName, "accessToken": userData.accessToken}));
	// };

	const logoutHandler = () => {
		setUser({});
		localStorage.clear();
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const {
			userName,
			password,
		} = Object.fromEntries(new FormData(e.target));

		authService.login(userName, password)
			.then(authData => {
				loginHandler(authData);
				navigate('/');
			});
	};

	return(
		<PublicLayout>
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
											type="text"
											name="userName"
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
		</PublicLayout>
	);
}

export default Login;