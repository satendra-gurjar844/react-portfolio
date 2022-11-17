import React from 'react'

const Portfolio = () => {
  return (
    <>
    <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
				<div className="row grid">
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p1.jpg" alt="" />
							</div>
							<a href="images/p1.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png" /></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Square Box Mockup</h4>
							<div className="cat">Mockup</div>
						</div>                                         
					</div>
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p2.jpg" alt="" />
							</div>
							<a href="images/p2.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png"/></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Product Box Package Mockup</h4>
							<div className="cat">Mockup</div>
						</div>                                         
					</div>                            
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p3.jpg" alt=""/>
							</div>
							<a href="images/p3.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png"/></div>
								</div>
							</a> 

						</div>
						<div className="p-inner">
							<h4>Creative Package Design</h4>
							<div className="cat">Packaging</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p4.jpg" alt=""/>
							</div>
							<a href="images/p4.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png"/></div>
								</div>
							</a>                                
						</div> 
						<div className="p-inner">
							<h4>Packaging Brand</h4>
							<div className="cat">Packaging</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p5.jpg" alt=""/>
							</div>
							<a href="images/p5.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png"/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>Isometric 3D Extrusion</h4>
							<div className="cat">Typography</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p6.jpg" alt=""/>
							</div>
							<a href="images/p6.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt="images/preview.png"/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>White Space Photography</h4>
							<div className="cat">photography</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Portfolio