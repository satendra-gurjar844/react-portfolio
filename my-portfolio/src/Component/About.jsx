import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
        <section className="site-section" id="section-about">
		<div className="container">
			<div className="row mb-5 align-items-center">
				<div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
					<img src={"images/IMG_0292.JPG"} alt="SatendraImage" className="img-fluid"/>
				</div>
				<div className="col-lg-5 pl-lg-5">
					<div className="section-heading">
						<h2>About <strong>Me</strong></h2>
					</div>
					<p className="lead">5+ years experience in development and revelavant 1.5 experience in React Development with hands on experience in identifing web-based user interactions along with desiging & implementing high responsive user interface componenet by developing react concept.</p>
					<p className="mb-5  ">Proficient in writing high-quality code, and writing application interface code via javascript and ReactJS workflows. Adopt and monitoring and maintaining front-end performance and troubleshooting & debugging the same to boister overall performance.</p>

					<p>
						<Link to={"/contact"} className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</Link>&nbsp;
						<Link to={"../Resume_Satendra_PHP_4.docx"} className="btn btn-secondary px-4 py-2 btn-sm">Download CV</Link>
					</p>
				</div>
			</div>


		</div>
	</section>
    </>
  )
}

export default About