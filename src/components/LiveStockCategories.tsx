export const LiveStockCategories = () => {
    return (
        <div id="categories">
            <div id="catheading"><h2>Categories</h2></div>
            <div id="catimages">
            <div id="cattle"><button onClick={() => window.location.href='/cattleandgoat'}>Goat/Cattle</button></div>
            <div id="piggery"><button onClick={() => window.location.href='/piggery'}>Piggery</button></div>
            <div id="poultry"><button onClick={() => window.location.href='/poultry'}>Poultry</button></div>
            </div>
        </div>
    )
}