import React from 'react';
import { Link } from 'react-router-dom';

import style from './Landing.module.css';
import FadeIn from 'react-fade-in';

function Landing() {
	return (
		<div className={style.landingContainer}>
			<FadeIn className={style.landingItems}>
				<Link to="/programming">
					<p className={style.linkText}>Programming</p>
				</Link>

				<Link to="photo">
					<p className={style.linkText}>Photo & Video</p>
				</Link>

				<Link to="/about">
					<p className={style.linkText}>About Me</p>
				</Link>
			</FadeIn>
		</div>
	);
}

export default Landing;
