export const HeroImage2 = (props: { url: string }) => {
    console.log(props.url)
    return (
        <div id="image" style={{backgroundImage: props.url}}><h2>OX Engineering Limited</h2>
 		</div>
    )
}