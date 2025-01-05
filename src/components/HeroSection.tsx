export const ToolSection = () => {
    return (
        <div id="tool_section">
        <div id="tool_menu">
            <div className="flex_tools">
                <a href="tractor"><div id="tractor"></div></a>
                <center onClick={() => window.location.href='/tractor'}>Tractors</center>
            </div>
            <div className="flex_tools">
                <a href="combine"><div id="combineH"></div></a>
                <center onClick={() => window.location.href='/combine'}>Combine Harvestors</center>
            </div>
            <div className="flex_tools">
                <a  href="comingsoon"><div id="implement"></div></a>
                <center onClick={() => window.location.href='/comingsoon'}>Implement</center>
            </div>
            <div className="flex_tools">
                <a  href="livestock"><div id="livestock"></div></a>
                <center onClick={() => window.location.href='/livestock'}>LiveStock</center>
            </div>
            <div className="flex_tools">
                <a  href="irrigation"><div id="irrigation"></div></a>
                <center onClick={() => window.location.href='/irrigation'}>Irrigation</center>
            </div>
            <div className="flex_tools">
                <a href="steelstructures"><div id="steelstructures"></div></a>
                <center onClick={() => window.location.href='/steelstructures'}>Steel Structures</center>
            </div>
        </div>
        
    </div>
    )
}