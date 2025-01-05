import { Link } from "react-router-dom"

export const ContentSection = () => {
    return (
		<div id="content">
			<div className="sub">
				<div id="sub1image"></div>
				<div id="sub1cont">
					<p>OX is changing agriculture in Africa</p>
					<Link to={'/oxischangingafrica'}><button>See How</button></Link>
				</div>
			</div>
			
			<div className="sub">
				<div id="sub3image"></div><div>
					<p>Field Support Systems</p>
					<Link to={'/comingsoon'}><button>Explore</button></Link>
				</div>
			</div> 	

			<div className="sub">
				<div id="sub4image"></div><div>
					<p>Trade your old Equipment for a new one</p>
					<Link to={'/upgrade'}><button>Upgrade</button></Link>
				</div>
			</div>
		</div>
    )
}