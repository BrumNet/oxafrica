import { Link } from "react-router-dom"

export const LiveStockCategories = () => {
    return (
        <div id="categories">
            <div id="catheading"><h2>Categories</h2></div>
            <div id="catimages">
            <div id="cattle"><Link to="/cattleandgoat"><button>Goat/Cattle</button></Link></div>
            <div id="piggery"><Link to="/piggery"><button>Piggery</button></Link></div>
            <div id="poultry"><Link to="/poultry"><button>Poultry</button></Link></div>
            </div>
        </div>
    )
}