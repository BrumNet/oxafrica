export const BasicContent2 = (props: {heading: string, bulletin: any}) => {
    return (
        <div id="writeup">  
			<h4>{props.heading}</h4>
            {
                props.bulletin.map((x: string) => <>{x}<br/></>)
            }
        </div>
    )
}