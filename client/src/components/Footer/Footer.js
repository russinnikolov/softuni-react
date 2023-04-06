import { Link } from "react-router-dom";


const Footer = () => {
	return (
		<footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
			<div className="shape shape-1">
				<img src="assets/images/footer/shape-1.svg" alt="shape"/>
			</div>
			<div className="shape shape-2">
				<img src="assets/images/footer/shape-2.svg" alt="shape"/>
			</div>
			<div className="shape shape-3">
				<img src="assets/images/footer/shape-3.svg" alt="shape"/>
			</div>
			<div className="ud-footer-widgets">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="ud-widget">
								<Link to="/" className="ud-footer-logo">
									<img src="assets/images/logo/logo.svg" alt="logo"/>
								</Link>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="ud-widget">
								<h5 className="ud-widget-title">About Us</h5>
								<ul className="ud-widget-links">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="ud-footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<ul className="ud-footer-bottom-left">
								<li>
									<Link to="/policy">Privacy policy</Link>
								</li>
								<li>
									<Link to="/terms">Terms of service</Link>
								</li>
							</ul>
						</div>
						<div className="col-md-4">
							<p className="ud-footer-bottom-right" id="credits">
								Designed and Developed by <a href="https://github.com/russinnikolov" target="_blank" rel="nofollow">Rusin Nikolov</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;