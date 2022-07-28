import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {

	const { user } = useContext(AuthContext);

	return (
		<header className="ud-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<nav className="navbar navbar-expand-lg">
							<Link className="navbar-brand" to="/">
								<img src="assets/images/logo/logo.svg" alt="Logo" />
							</Link>
							<button className="navbar-toggler">
								<span className="toggler-icon"> </span>
								<span className="toggler-icon"> </span>
								<span className="toggler-icon"> </span>
							</button>

							<div className="navbar-collapse">
								<ul id="nav" className="navbar-nav mx-auto">
									<li className="nav-item">
										<Link className="ud-menu-scroll" to="/">Home</Link>
									</li>

									<li className="nav-item">
										<Link className="ud-menu-scroll" to="/about">About</Link>
									</li>
									<li className="nav-item">
										<Link className="ud-menu-scroll" to="/contact">Contact</Link>
									</li>
								</ul>
							</div>

							<div className="navbar-btn d-none d-sm-inline-block">
								<Link to="/login" className="ud-main-btn ud-login-btn">
									Sign In
								</Link>
								<Link className="ud-main-btn ud-white-btn" to="/register">
									Sign Up
								</Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);

}

export default Header;