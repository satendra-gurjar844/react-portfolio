import React from 'react'

const Profile = () => {

    const styleObject = {
        "backgroundImage":"url(images/IMG-20200920-WA0002.jpg)"
    }

  return (
    <>
    <section className="site-hero" style={styleObject} id="section-home" data-stellar-background-ratio="0.5">
		<div className="container">
			<div className="row intro-text align-items-center justify-content-center">
				<div className="col-md-10 text-center pt-5">

					<h1 className="site-heading site-animate">Hello, I'm <strong className="d-block">Satendra Gurjar</strong></h1>
					<strong className="d-block text-white text-uppercase letter-spacing">Front-End Developer</strong>

				</div>
			</div>
		</div>
	</section> 
    </>
  )
}

export default Profile