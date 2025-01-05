import { BasicContent } from "../components/BasicContent"
import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroContainer } from "../components/HeroContainer"
import { HeroImage2 } from "../components/HeroImage2"

export const Piggery = () => {
    const heading = "Complete pig farm solutions"
    const content = "At OX Engineering Limited we provide comprehensive solutions for pig farming that optimize workflow across the entire operation. Our focus is on ensuring complete oversight, exceptional animal welfare, high biosecurity standards, and favorable working conditions. We design and implement full-scale pig complexes globally. Regardless of your location or specific needs, OX Engineering Limited offers tailored solutions. With extensive experience in crafting pig farming systems that align with both the site and our clients' requirements, we prioritize animal health and growth at every stage of their lifecycle. Our customized solutions are always rooted in a detailed assessment of our clients' needs. We believe in building strong partnerships, treating every customer with equal dedication—no matter their size—ensuring they receive optimal service, equipment, or comprehensive solutions to meet their requirements and foster long-term relationships. Together with our clients, we identify the best solutions for their current and future needs."
    return (
            <>
                <Header/>
                <HeroImage2 url={"url('/src/images/piggery/animal_pig_farm.webp')"}/>
                <BreadCrumb target={"Piggery"}/>
                <HeroContainer image={"url('/src/images/piggery/animal_pig_farm.webp')"}/>
                <BasicContent heading={heading} content={content} bullet={false}/>
                <Footer/>
            </>
        )
}