import { ContentSection } from "../components/ContentSection"
import { CSRSection } from "../components/CSRSection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage } from "../components/HeroImage"
import { ToolSection } from "../components/HeroSection"
import { PeopleSay } from "../components/PeopleSay"

export const Home = () => {
    return (
        <>
        <Header/>
        <HeroImage/>
        <ToolSection/>
        <ContentSection/>
        <CSRSection/>
        <PeopleSay/>
        <Footer/>
        </>
    )
}