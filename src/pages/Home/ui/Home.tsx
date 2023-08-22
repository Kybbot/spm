import { FC } from "react";

const Home: FC = () => {
	return (
		<section className="home">
			<div className="main__container">
				<div className="home__container">
					<div className="home__about">
						<h1 className="home__title">Welcome</h1>
						<p className="home__text">
							SPM Investment Group’s website is designed and built for our private clients and their
							individual specific needs.
						</p>
						<div className="home__icons">
							<p className="home__icon" aria-hidden="true">
								<svg width="62" height="62" focusable="false" aria-hidden="true">
									<use xlinkHref="/icons.svg#advise" />
								</svg>
								Advise
							</p>
							<p className="home__icon" aria-hidden="true">
								<svg width="60" height="51" focusable="false" aria-hidden="true">
									<use xlinkHref="/icons.svg#portfolio" />
								</svg>
								Live Portfolio
							</p>
							<p className="home__icon" aria-hidden="true">
								<svg width="45" height="60" focusable="false" aria-hidden="true">
									<use xlinkHref="/icons.svg#documents" />
								</svg>
								Documents
							</p>
						</div>
					</div>
					<div className="home__details">
						<h2 className="home__subtitle">Market and Performance</h2>
						<ul className="home__list">
							<li className="home__text">SPM Live Portfolio – User Instructions</li>
							<li className="home__text">Reserve Bank of Australia – Minutes from 6 June 2023</li>
							<li className="home__text">SPM Market Commentary – Dec 2022</li>
							<li className="home__text">SPM Performance Paper – March 2023</li>
							<li className="home__text">SPM Federal Budget Summary – May 2023</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
