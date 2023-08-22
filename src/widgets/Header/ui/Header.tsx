import { FC } from "react";
import { NavLink } from "react-router-dom";

import { navItems } from "../config/navItems";

export const Header: FC = () => {
	const items = navItems["client"];

	return (
		<header className="header">
			<div className="header__container">
				<img src="/logo.png" alt="SPM" className="header__logo" width={190} height={75} />
				<div className="header__wrapper">
					<nav className="header__nav">
						<ul className="header__list">
							{items.map((item) => (
								<li className="header__item" key={item.link}>
									<NavLink to={item.link} className="header__link">
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<div className="header__line"></div>
					<button type="button" className="header__btn">
						Log out
					</button>
				</div>
			</div>
		</header>
	);
};
