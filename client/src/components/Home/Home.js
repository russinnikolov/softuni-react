import { Link } from "react-router-dom";


const Home = () => {
	return (
		<section className="ud-hero" id="home">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
							<h1 className="ud-hero-title">
								All your expenses summed up in one place
							</h1>
							<p className="ud-hero-desc">
								Multidisciplinary Web Template Built with Your Favourite
								Technology - HTML Bootstrap, Tailwind and React NextJS.
							</p>
							<ul className="ud-hero-buttons">
								<li>
									<Link to="https://links.uideck.com/play-bootstrap-download"
									   target="_blank" className="ud-main-btn ud-white-btn">
										Download Now
									</Link>
								</li>
								<li>
									<Link to="https://github.com/uideck/play-bootstrap" rel="nofollow noopener"
									   target="_blank" className="ud-main-btn ud-link-btn">
										Learn More <i className="lni lni-arrow-right"></i>
									</Link>
								</li>
							</ul>
						</div>
						<div
							className="ud-hero-brands-wrapper wow fadeInUp"
							data-wow-delay=".3s"
						>
							{/*<img src="assets/images/hero/brand.svg" alt="brand"/>*/}
						</div>
						<div className="ud-hero-image wow fadeInUp" data-wow-delay=".25s">
							<img src="assets/images/hero/hero-image.svg" alt="hero"/>
							<img
								src="assets/images/hero/dotted-shape.svg"
								alt="shape"
								className="shape shape-1"
							/>
							<img
								src="assets/images/hero/dotted-shape.svg"
								alt="shape-2"
								className="shape shape-2"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);

}

export default Home;