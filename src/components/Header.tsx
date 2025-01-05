export const Header = () => {
    // const menuDisplay = () => {
        // document.getElementById("nav_grid").style.display == "none" ? document.getElementById("nav_grid").style.display = "block" : document.getElementById("nav_grid").style.display = "none";
    // }
    return (
        <div id="nav">
 			<div id="logo" onClick={() => window.location.href='/'}></div>
 			<div id="mini">
                {/* <!-- onClick="getElementById('nav_grid').style.display = 'block'"--> */}
					<span>
					<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="0000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
					</span>
			</div>
 			<div id="nav_grid">
 				<div>
 					<ul>
 					<li className="big_nav_link" onClick={() => window.location.href='/'}>Home</li> 
 					<li className="big_nav_link">Products
						<div className="dropdown">
				            <span id ="prod"><a  href=''>All Products</a>
				            	<div className="subproducts">
								    <a href=''>All Products (A - Z)</a>
								    {/* <!--<a href=''><br/> </a>
								    <a href=''><br/> </a>--> */}
								    <a href=""> Accessories, Attachments & Implements</a>
								    <a href="">Application Equipment</a>
								    <a href="">Backhoes</a>
								    <a href="">Cutters & Shredders</a>
								    <a href="">Engines</a>
								    <a href="">Utility Vehicles</a>
								    <a href="">Hay & Forage</a>
								    <a href="">Harvesting</a>
								    <a href="">Home & Workshop Products</a>
								    <a href="">Loaders</a>
								    <a href="">Mowers</a>
								    <a href="">Planting Equipment</a>
								    <a href="">AGRO AI</a>
								    <a href="">Scraper Systems</a>
								    <a href="">Seeding Equipment</a>
								    <a href="">Sprayers</a>
								    <a href="">Tillage</a>
								    <a href="">Tractors</a>
								</div>
							</span>
				            <br/>
				            <a href="">Lawns and Gardens</a>
				            <br/>
				            <a href="">Electronics</a><br/>
				            <a href="">Construction</a><br/>
				            <a href="">  Crop Care</a><br/>
				            <a href="">Engines</a><br/>
				            <a href="">Rental Sales</a><br/>
				            <a href="">Attachments</a><br/> 
				            <a href="">Used Equipment</a>
				        </div>
 					</li>
        			<li className="big_nav_link">Finance
        				<div className="dropdown">
					        <a href="#hjkl">OX Finance</a><br/>
					        <a href="#ljk;">Special Discount Finance</a>
				        </div>
    				</li>
    				<li className="big_nav_link">Parts and Services
    					 <div className="dropdown">
					        <span><a href="">Parts</a>
						        <div className="">
						            <a href="">Maintenance parts</a>
						            <a href="">Engines</a>
						            <a href="">Construction</a>
						            <a href="">Tractors</a>
						            <a href="">Combine Harvestors</a>
						            <a href="">Sprayers</a>
						            <a href="">Tillage</a>
						            <a href="">Discs</a>
						        </div>
					    	</span>
					            <br/>
					        <span>
					        	<a href="">Manuals</a>
						        <div className="">
						            <a href="">Operator's Manual for All Tractors</a>
						            <a href="">Operator's Manual for Combine Harvestprs</a>
						            <a href="">Other Manuals</a>
						        </div>
					    	</span>
					        <br/>
					        <span>
					        	<a href="">Training</a>
						        <div className="">
						            <a href="">Training and Safety Videos</a>
						            <a href="">Reference Guides</a>
						            <a href="">OX Customer Service</a>
						        </div>
					        </span>
					        <br/>
					        <a href="">Warranty</a>
					        <br/>
					        <span>
					        	<a href="">Servicing</a>
						        <div className="">
						            <a href="">Self Repair</a>
						            <a href="">Servicing Packages</a>
						        </div>
					        </span>
					        <br/>
					        <span>
					        	<a href="">Safety</a>
						        <div className="">
						            <a href="">Operator Insurance</a>
						            <a href="">Protective Gears</a>
						        </div>
						     </span>
					        <br/>
					        <span>
					        	<a href="">Protection Plan</a>
						        <div className="">
						            <a href="">Damage Insurance</a>
						        </div>
						    </span>
					        <br/>
					         <a href="">ox Support</a>
					        </div>
    				</li>
    				<li className="big_nav_link">Tools and Resources
    					<div className="dropdown">
				            <a href="">Tools</a><br/>
				            <a href="">Equipment</a><br/>
				            <a href="">Connect with Ox</a><br/>
				            <a href="">Brochures</a><br/>
				            <a href="">The ox Edge</a>
				        </div>
    				</li>
        		</ul>
        		</div>
 			</div>
 		</div>
    )
}