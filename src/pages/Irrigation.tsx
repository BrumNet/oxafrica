import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { IrrigationContent } from "../components/IrrigationContent"

export const Irrigation = () => {
    return (
            <>
                <Header/>
                <HeroImage2 url={"url('/src/images/home/image16.png')"}/>
                <BreadCrumb target={"Irrigation"}/>
                <IrrigationContent/>
                <Footer/>
            </>
        )
}