import { ComingSoonContent } from "../components/comingsoon"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroImage } from "../components/HeroImage"

export const ComingSoon = () => {
    return (
        <>
            <Header />
            <HeroImage/>
            <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center", width: "100%"}}>
                <ComingSoonContent/>
            </div>
            
            <Footer />
        </>
    )
}