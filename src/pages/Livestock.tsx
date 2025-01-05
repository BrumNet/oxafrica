import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroContainer } from "../components/HeroContainer"
import { HeroImage2 } from "../components/HeroImage2"
import { LiveStockCategories } from "../components/LiveStockCategories"
import livestock from '../images/livestock/livestock_2.jpg'

export const LiveStock = () => {
    return (
            <>
                <Header/>
                <HeroImage2 url={livestock}/>
                <BreadCrumb target={"LiveStock"}/>
                <HeroContainer/>
                <LiveStockCategories/>
                <Footer/>
            </>
        )
}