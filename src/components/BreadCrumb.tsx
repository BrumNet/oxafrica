import { Link } from "react-router-dom"

export const BreadCrumb = (props: {target: string}) => {
    return (
        
 	<div id="breadcrumb"><div><Link to="/">Home</Link> / {props.target}</div></div>

    )
}