import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroContainer } from "../components/HeroContainer"
import { HeroImage2 } from "../components/HeroImage2"
import { SteelStructures } from "../components/SteelStructureCategories"
import image18 from "../images/steelstruct/img18.jpg"
import image18_2 from "../images/steelstruct/img18_2.jpg"

export const Steelstructures = () => {
    return (
            <>
                <Header/>
                <HeroImage2 url={image18}/>
                <BreadCrumb target="Steel Structures"/>
                <HeroContainer image={image18_2}/>
                <SteelStructures/>
                <Footer/>
            </>
        )
}