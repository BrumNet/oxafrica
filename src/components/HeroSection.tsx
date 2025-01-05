import { Link } from "react-router-dom"

export const ToolSection = () => {
    return (
        <div id="tool_section">
        <div id="tool_menu">
            <div className="flex_tools">
                <Link to="tractor"><div id="tractor"></div>
                <center>Tractors</center></Link>
            </div>
            <div className="flex_tools">
                <Link to="combine"><div id="combineH"></div>
                <center>Combine Harvestors</center></Link>
            </div>
            <div className="flex_tools">
                <Link  to="comingsoon"><div id="implement"></div>
                <center>Implement</center></Link>
            </div>
            <div className="flex_tools">
                <Link to="/livestock"><div id="livestock"></div>
                <center>LiveStock</center></Link>
            </div>
            <div className="flex_tools">
                <Link  to="irrigation"><div id="irrigation"></div>
                <center>Irrigation</center></Link>
            </div>
            <div className="flex_tools">
                <Link to="steelstructures"><div id="steelstructures"></div>
                <center>Steel Structures</center></Link>
            </div>
        </div>
        
    </div>
    )
}