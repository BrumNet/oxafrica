import { BasicContent } from "../components/BasicContent"
import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage2 } from "../components/HeroImage2"
import cattleLive from "../images/livestock/cattleLive.jpg"

export const CattleGoat = () => {
    const heading = "Goat Housing System Cattle Housing System."
    const content = "At Ox Engineering Limited, we offer innovative and efficient goat and cattle housing systems designed to enhance the health and productivity of your herd. Our structures prioritize comfort, safety, and ease of management, ensuring optimal living conditions for your goats."
    return (
            <>
                <Header/>
                <HeroImage2 url={cattleLive}/>
                <BreadCrumb target={"Cattle and Goat"}/>
                <BasicContent heading={heading} content={content} bullet={true}/>
                <Footer/>
            </>
        )
}

