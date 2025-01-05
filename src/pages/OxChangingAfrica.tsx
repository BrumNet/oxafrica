import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import { OxChangingAfricaContent } from "../components/OxChangingAfricaContent"

export const Oxchangingafrica = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={"url('/src/images/home/oxchangingafrica/ox_changing_africa.png')"}/>
            <BreadCrumb target={"OX is Changing Africa"}/>
            <OxChangingAfricaContent/>
            <Footer/>
        </>
    )
}