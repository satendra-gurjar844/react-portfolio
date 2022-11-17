import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="site-footer">
		<div class="container">

			<div class="row mb-5">
				<p class="col-12 text-center">
				
					Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart text-danger" aria-hidden="true" ></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
					
				</p>
			</div>
			
			<div class="row mb-5">
				<div class="col-md-12 text-center">
					<p>
						<a href="#" class="social-item"><span class="icon-facebook2"></span></a>
						<a href="#" class="social-item"><span class="icon-twitter"></span></a>
						<a href="#" class="social-item"><span class="icon-instagram2"></span></a>
						<a href="#" class="social-item"><span class="icon-linkedin2"></span></a>
						<a href="#" class="social-item"><span class="icon-vimeo"></span></a>
					</p>
				</div>
			</div>
			
		</div>
	</footer>


    </>
  )
}

export default Footer