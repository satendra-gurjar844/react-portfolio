import React from 'react'

const Resume = () => {
  return (
    <>
    <section className="site-section " id="section-resume">
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
					<div className="section-heading text-center">
						<h2>My <strong>Resume</strong></h2>
					</div>
				</div>
				<div className="col-md-6">
					<h2 className="mb-5">Education</h2>
					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> 2009 - 2013</span>
						<h3>Bachelor's in Information Technology</h3>
						<p>I have completed my B.Tech in IT with first grade (66%) and completed multiple assignment with high energy.</p>
						<span className="school">RGPV University</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> 2008</span>
						<h3>Intermediate In PCM (10+2)</h3>
						<p>Grade: 60%</p>
						<span className="school">MP Board</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> 2006</span>
						<h3>High Schooling (10th)</h3>
						<p>Grade: 68%</p>
						<span className="school">MP Board</span>
					</div>

					
				</div>
				<div className="col-md-6">


					<h2 className="mb-5">Experience</h2>
					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> Dec 2018 - Present</span>
						<h3>Debox Global</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
						<span className="school">Senior PHP Developer</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> June 2017 - Dec 2018</span>
						<h3>WebChrome Net</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
						<span className="school">PHP Developer</span>
					</div>

					<div className="resume-item mb-4">
						<span className="date"><span className="icon-calendar"></span> Dec 2014 - May 2017</span>
						<h3>Chetu India Inc.</h3>
						<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
						<span className="school">Technical Support Engineer</span>
					</div>


				</div>
			</div>
		</div>
	</section>
</>
  )
}

export default Resume