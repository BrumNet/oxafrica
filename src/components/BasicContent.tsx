export const BasicContent = (props: {heading: string, content: string | string[], bullet: boolean}) => {
    return (
        <div id="writeup">
 		 <h4>{props.heading}</h4>
		 <p><span >{props.content}</span></p>
		
		{
        props.bullet &&
        <>
        <b>Key Features:</b> <br/><br/>
			1) <b>Spacious Design:</b> Our goat housing systems provide ample space, allowing for easy movement and social interaction among animals. This promotes natural behaviors and reduces stress.<br/>
			2) <b>Ventilation and Climate Control:</b> Equipped with advanced ventilation systems, our goat houses ensure proper airflow, minimizing heat stress and maintaining a comfortable environment year-round. Adjustable windows and fans help regulate temperature and humidity.<br/>
			3) <b>Durable Materials:</b> Constructed from high-quality, weather-res 	 istant materials, our housing solutions are built to withstand various environmental conditions, ensuring longevity and low maintenance.<br/>
			4) <b>Easy Access:</b> Thoughtfully designed access points facilitate easy feeding, cleaning, and health monitoring. Our layouts prioritize efficiency, making daily tasks simpler for farm management.<br/>
			5) <b>Safety and Security:</b> Our goat housing systems include secure fencing and locking mechanisms to protect your animals from predators and prevent escapes.<br/>
			6) <b>Biosecurity Measures:</b> We incorporate biosecurity features to reduce the risk of disease transmission, ensuring a healthy living environment for your goats.<br/>
			7) <b>Customizable Options:</b> We understand that each farm has unique requirements. Our goat housing systems can be tailored to fit your specific needs, including size, layout, and additional amenities.<br/>
		<p>
			Investing in a quality goat housing system is essential for maximizing productivity and ensuring the well-being of your herd. At [OX ENGINEERING LIMITED], we are committed to providing solutions that meet the highest standards of animal welfare.
			Contact us today to learn 
		</p>
        </>
        }
	</div>
    )
}