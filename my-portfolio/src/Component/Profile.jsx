import React from 'react'

const Profile = () => {

    const styleObject = {
        "background-image":"url(images/IMG-20200920-WA0002.jpg)"
    }

  return (
    <>
    <section class="site-hero" style={styleObject} id="section-home" data-stellar-background-ratio="0.5">
		<div class="container">
			<div class="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">

					<h1 class="site-heading site-animate">Hello, I'm <strong class="d-block">Satndra Singh Gurjar</strong></h1>
					<strong class="d-block text-white text-uppercase letter-spacing">Front-End Developer</strong>

				</div>
			</div>
		</div>
	</section> 
    </>
  )
}

export default Profile