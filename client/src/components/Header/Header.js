import {Router, Route, Link} from "react-router-dom";



const Header = () => {
	return (
		<header className="ud-header">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<nav className="navbar navbar-expand-lg">
							<a className="navbar-brand" href="index.html">
								<img src="assets/images/logo/logo.svg" alt="Logo"/>
							</a>
							<button className="navbar-toggler">
								<span className="toggler-icon"> </span>
								<span className="toggler-icon"> </span>
								<span className="toggler-icon"> </span>
							</button>

							<Router>
								<div className="navbar-collapse">
									<ul id="nav" className="navbar-nav mx-auto">
										<li className="nav-item">
											<Link className="ud-menu-scroll" to="#home">Home</Link>
										</li>

										<li className="nav-item">
											<a className="ud-menu-scroll" href="#about">About</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="#pricing">Pricing</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="#team">Team</a>
										</li>
										<li className="nav-item">
											<a className="ud-menu-scroll" href="#contact">Contact</a>
										</li>
										<li className="nav-item nav-item-has-children">
											<a href="javascript:void(0)"> Pages </a>
											<ul className="ud-submenu">
												<li className="ud-submenu-item">
													<a href="about.html" className="ud-submenu-link">
														About Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="pricing.html" className="ud-submenu-link">
														Pricing Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="contact.html" className="ud-submenu-link">
														Contact Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="blog.html" className="ud-submenu-link">
														Blog Grid Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="blog-details.html" className="ud-submenu-link">
														Blog Details Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="login.html" className="ud-submenu-link">
														Sign In Page
													</a>
												</li>
												<li className="ud-submenu-item">
													<a href="404.html" className="ud-submenu-link">404 Page</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</Router>

							<div className="navbar-btn d-none d-sm-inline-block">
								<a href="login.html" className="ud-main-btn ud-login-btn">
									Sign In
								</a>
								<a className="ud-main-btn ud-white-btn" href="javascript:void(0)">
									Sign Up
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);

}

export default Header;