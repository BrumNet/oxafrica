import { BasicContentWithImages } from "../components/BasicContentWithImages"
import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"

export const Tractor = () => {
    return (
        <>
            <Header/>
            <HeroImage2 url={"url('/src/images/home/image16.png')"}/>
            <BreadCrumb target="Tractor"/>
            <BasicContentWithImages equipment="tractor"/>
            <Footer/>
        </>
    )
}