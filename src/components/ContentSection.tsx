export const ContentSection = () => {
    return (
		<div id="content">
			<div className="sub">
				<div id="sub1image"></div>
				<div id="sub1cont">
					<p>OX is changing agriculture in Africa</p>
					<button onClick={() => window.location.href='/oxischangingafrica'}>See How</button>
				</div>
			</div>
			
			<div className="sub">
				<div id="sub3image"></div><div>
					<p>Field Support Systems</p>
					<button onClick={() => window.location.href='/comingsoon'}>Explore</button>
				</div>
			</div> 	

			<div className="sub">
				<div id="sub4image"></div><div>
					<p>Trade your old Equipment for a new one</p>
					<button onClick={() => window.location.href='/upgrade'}>Upgrade</button>
				</div>
			</div>
		</div>
    )
}