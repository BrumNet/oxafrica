import OXA from "../images/tractor/OXA.jpg"
import OXB from "../images/tractor/OXB.jpg"
import COMBINEA from "../images/combine_harvestors/OX5.jpeg"
import COMBINEB from "../images/combine_harvestors/image.jpg"

export const BasicContentWithImages = (props: { equipment: string; }) => {
    const FirstParagraph = props.equipment === "tractor" ? TractorFirstParagraph : CombineHarvestorsFirstParagraph;
    const SecondParagraph = props.equipment === "tractor" ? TractorSecondParagraph : CombineHarvestorsSecondParagraph;

    return (
        <div style={{width: "80%", marginLeft: "10%"}}>
            <div className="first_image"><img src={props.equipment === "tractor" ? OXB : COMBINEA}/></div>
            <FirstParagraph/>
            <div className="second_image"><img src={props.equipment === "tractor" ? OXA : COMBINEB}/></div>
            <SecondParagraph/>
        </div>
    )
}

const TractorFirstParagraph = () => {
    return (
        <div className="content2">
		<p><strong><span >Introducing Our New Tractor: Revolutionizing Modern Farming</span></strong></p>
		<p><span >At OX ENGINEERING LIMITED, we are excited to announce the development of our upcoming tractor, designed to enhance the efficiency, power, and precision of modern agriculture. While we are still in the development phase, we want to give you a glimpse of what&rsquo;s coming and how this innovation will transform your farming operations.</span></p>
		<p></p>
		<hr/>
		<p></p>
		<p><strong><span >A New Era of Agricultural Machinery</span></strong></p>
		<p><span >Our upcoming tractor is being engineered with the needs of today&rsquo;s farmers in mind, combining cutting-edge technology, durability, and unmatched performance. Whether you&rsquo;re managing large-scale fields or smaller farms, this tractor is designed to tackle the toughest jobs with ease while delivering maximum productivity.</span></p>
		<p><strong><span >Key Features Under Development</span></strong></p>
		{/* <img style="float:right; margin-left: 5px;" width="440px" src="./style/images/tractor/OXB.jpg"/> */}
		<p><span >While we are still perfecting the design, here are some of the groundbreaking features we are working on:</span></p>
		<ul>
			<li>
				<p><strong><span >Power and Performance</span></strong><span >: Equipped with a high-efficiency engine, our tractor will deliver the horsepower needed to handle heavy-duty tasks. Whether plowing, tilling, or hauling, it&rsquo;s being designed to perform in the most demanding conditions.</span></p>
			</li>
			<li>
				<p><strong><span >Fuel Efficiency</span></strong><span >: We&rsquo;re focused on creating a tractor that not only delivers power but also conserves fuel. This will help reduce operational costs and environmental impact, making it both an economic and eco-friendly choice.</span></p>
			</li>
			<li>
				<p><strong><span >Advanced Precision Farming Technology</span></strong><span >: Our tractor will feature integrated GPS and smart technology, allowing for precision farming. Expect features like automated steering, real-time data collection, and precision planting to boost your crop yield and efficiency.</span></p>
			</li>
			<li>
				<p><strong><span >Enhanced Comfort and Safety</span></strong><span >: Comfort is essential for long days in the field. Our tractor will include an ergonomic cab design with climate control, noise reduction, and intuitive controls to ensure a smooth and comfortable experience. Safety features like roll-over protection and emergency stop systems will be built in to prioritize operator safety.</span></p>
			</li>
			<li>
				<p><strong><span >Heavy-Duty Build</span></strong><span >: We&rsquo;re developing a robust chassis and high-quality components that ensure durability, no matter the terrain or weather conditions. This tractor will be built to withstand the rigors of everyday farming and provide reliable service for years.</span></p>
			</li>
			<li>
				<p><strong><span >Versatility</span></strong><span >: From plowing and planting to towing and lifting, our tractor will be designed to handle a wide range of tasks. Attachments and implements will be easily compatible, making it a versatile tool for any farm.</span></p>
			</li>
		</ul>
		<p><strong><span >Ongoing Development and What to Expect</span></strong></p>
		<p><span >We are currently in the testing and refinement stages of development, working closely with farmers and agricultural experts to ensure that every feature meets the highest standards of quality and functionality. As we continue to develop and perfect this tractor, we are excited to share our progress with you.</span></p>
		<p><span >Stay tuned for more updates, including sneak peeks at the design, key testing milestones, and the official release date!</span></p>
		<p></p>
		<hr/>
		<p></p><img src=""/>
		<p><strong><span >Why Choose Our Tractor?</span></strong></p>
		<p><span >At OX ENGINEERING LIMITED, we believe that innovation in agricultural machinery should be driven by the real needs of farmers. Here&rsquo;s why our upcoming tractor will be the perfect fit for your operation:</span></p>
		<ul>
			<li>
				<p><strong><span >Designed with Farmers, for Farmers</span></strong><span >: We&rsquo;ve worked hand-in-hand with industry experts and end-users to ensure this tractor meets the practical demands of modern farming.</span></p>
			</li>
			<li>
				<p><strong><span >Sustainable and Efficient</span></strong><span >: By focusing on fuel efficiency and smart technology, we are helping farmers save on operational costs while promoting sustainable farming practices.</span></p>
			</li>
			<li>
				<p><strong><span >Built to Last</span></strong><span >: Our tractor will be designed to provide years of reliable performance, even in the toughest environments.</span></p>
			</li>
		</ul>
	</div>
    )
}

const TractorSecondParagraph = () => {
    return (
        <div className="content2">
            
            <hr/>
            <p></p>
            <p><strong><span >Sign Up for Updates</span></strong></p>
            <p><span >Want to stay informed about our tractor&rsquo;s development? Sign up for exclusive updates, including early access to product specifications, launch events, and special offers.</span></p>
            <p><button>Sign Up for Updates</button></p>
            <p></p>
            <hr/>
            <p></p>
            <p><span >We can&rsquo;t wait to bring this tractor to market and help you take your farming to the next level. Stay connected with us as we continue to develop the future of agricultural machinery!</span></p>
            <p><button>Contact Us</button><button>Learn More About Our Products</button></p>
            <p></p>
            <hr/>
            <p></p>
            <p><span >Let us know how we can assist you in revolutionizing your farm with the most advanced tractor on the market!</span></p>
        </div>
    )
}

const CombineHarvestorsFirstParagraph = () => {
    return (
        <div className="content2">
        <p><strong><span >Introducing Our New Combine Harvester: Revolutionizing Harvesting Efficiency</span></strong></p>
        <p><span >At&nbsp;</span><strong><span >[Your Company Name]</span></strong><span >, we are developing an advanced combine harvester designed to transform the way farmers harvest their crops. Built with cutting-edge technology, this innovative harvester combines powerful performance with smart features that make harvesting faster, more efficient, and more precise. Our goal is to provide a machine that enhances productivity, reduces crop loss, and optimizes operational efficiency for farmers across Africa and beyond.</span></p>
        <p><strong><span >Key Features of Our Combine Harvester:</span></strong></p>
        <p><strong><span >1. AI-Powered Precision Harvesting</span></strong></p>
        <p><span >Our combine harvester incorporates AI-driven technology to ensure optimal harvesting performance. With built-in sensors and smart algorithms, the machine can automatically adjust its settings based on real-time crop and field conditions. This ensures maximum grain collection while minimizing waste.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >Optimized Crop Yield:</span></strong><span >&nbsp;AI analyzes crop density and moisture levels to fine-tune cutting and threshing processes, reducing grain loss.</span></p>
            </li>
            <li>
                <p><strong><span >Smart Adjustments:</span></strong><span >&nbsp;The harvester adjusts its speed and cutting height based on terrain and crop conditions, ensuring even and precise harvesting.</span></p>
            </li>
        </ul>
        <p><br/></p>
        <hr/>
        <p><br/></p>
        <p><strong><span >2. High Efficiency and Capacity</span></strong></p>
        <p><span >Designed to handle large fields, our combine harvester features a high-capacity grain tank and wide cutting width to cover more ground in less time. This makes it ideal for farmers looking to increase their harvesting efficiency and reduce time spent in the field.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >Faster Harvesting:</span></strong><span >&nbsp;Large cutting width and high-speed operation ensure more crops are harvested per hour.</span></p>
            </li>
            <li>
                <p><strong><span >Increased Productivity:</span></strong><span >&nbsp;Higher capacity reduces the need for frequent stops, allowing for uninterrupted harvesting.</span></p>
            </li>
        </ul>
        <p><br/></p>
        <hr/>
        <p><br/></p>
        <p><strong><span >3. Advanced Threshing and Separation Technology</span></strong></p>
        <p><span >Our combine harvester uses state-of-the-art threshing and separation technology to ensure that more of the harvested crop is collected with minimal grain loss. The advanced rotor and sieve system separates the grain efficiently, delivering a cleaner and higher-quality yield.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >Reduced Grain Loss:</span></strong><span >&nbsp;Advanced threshing reduces losses during harvesting, ensuring more grain is collected.</span></p>
            </li>
            <li>
                <p><strong><span >Cleaner Harvest:</span></strong><span >&nbsp;Superior separation technology results in cleaner, more market-ready crops.</span></p>
            </li>
        </ul>
        <p><br/></p>
        <hr/>
        <p><br/></p>
        <p><strong><span >4. Easy Operation with Smart Controls</span></strong></p>
        <p><span >We&rsquo;ve designed our harvester with user-friendly, intuitive controls to make it easy for farmers to operate. The machine features a digital control panel with real-time performance data, allowing operators to monitor crop intake, machine health, and efficiency at a glance. This smart system ensures that even less experienced operators can handle the machine effectively.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >User-Friendly Interface:</span></strong><span >&nbsp;Simple controls make operating the machine easier, reducing the learning curve for operators.</span></p>
            </li>
            <li>
                <p><strong><span >Real-Time Monitoring:</span></strong><span >&nbsp;Track performance and make adjustments on the go for more efficient harvesting.</span></p>
            </li>
        </ul>
        <p><br/></p>
        <hr/>
        <p><br/></p>
        <p><strong><span >5. Durability and Low Maintenance</span></strong></p>
        <p><span >We understand that reliability is crucial in farming machinery. That&rsquo;s why our combine harvester is built to withstand the tough conditions of African farms. The machine is designed with high-quality materials and a robust build to ensure long-lasting performance, even in challenging terrains. In addition, it features smart diagnostic tools that predict maintenance needs before issues arise, reducing downtime and repair costs.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >Durable Build:</span></strong><span >&nbsp;Engineered to last through tough field conditions and extended use.</span></p>
            </li>
            <li>
                <p><strong><span >Predictive Maintenance:</span></strong><span >&nbsp;AI-based diagnostics alert users to potential maintenance needs, preventing costly breakdowns.</span></p>
            </li>
        </ul>
        <p><br/></p>
        <hr/>
        <p><br/></p>
        <p><strong><span >6. Fuel-Efficient and Eco-Friendly</span></strong></p>
        <p><span >Our combine harvester is designed to be fuel-efficient, reducing the cost of operation and minimizing environmental impact. With its optimized engine performance, the harvester consumes less fuel while delivering high power, making it both cost-effective and eco-friendly.</span></p>
        <p><strong><span >Benefits:</span></strong></p>
        <ul>
            <li>
                <p><strong><span >Lower Operating Costs:</span></strong><span >&nbsp;Fuel-efficient design reduces the overall cost of harvesting.</span></p>
            </li>
            <li>
                <p><strong><span >Environmentally Friendly:</span></strong><span >&nbsp;Reduced fuel consumption means fewer emissions, promoting sustainable farming practices.</span></p>
            </li>
        </ul>
    </div>
    )
}

const CombineHarvestorsSecondParagraph = () => {
    return (
        <div className="content2">
            <hr/>
            <p><br/></p>
            <p><strong><span >Coming Soon</span></strong></p>
            <p><span >Our team is dedicated to completing the development of this cutting-edge combine harvester, with the goal of making it available to farmers soon. Stay tuned for updates on its release, and be among the first to experience the future of efficient, high-performance harvesting.</span></p>
            <p><strong><span >Contact Us</span></strong><span >&nbsp;today to learn more about our upcoming combine harvester and how it can transform your farm&apos;s productivity.</span></p>
        </div>
    )
    
}