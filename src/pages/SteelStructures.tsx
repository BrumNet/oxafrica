import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroContainer } from "../components/HeroContainer"
import { HeroImage2 } from "../components/HeroImage2"
import { SteelStructures } from "../components/SteelStructureCategories"

export const Steelstructures = () => {
    return (
            <>
                <Header/>
                <HeroImage2 url={"url('/src/images/steelstruct/img18.jpg')"}/>
                <BreadCrumb target="Steel Structures"/>
                <HeroContainer image={"url('/src/images/steelstruct/img18_2.jpg')"}/>
                <SteelStructures/>
                <Footer/>
            </>
        )
}