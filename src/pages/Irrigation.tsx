import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { IrrigationContent } from "../components/IrrigationContent"
import image16 from "../images/home/image16.png"

export const Irrigation = () => {
    return (
            <>
                <Header/>
                <HeroImage2 url={image16}/>
                <BreadCrumb target={"Irrigation"}/>
                <IrrigationContent/>
                <Footer/>
            </>
        )
}