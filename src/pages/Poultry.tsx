import { BasicContent } from "../components/BasicContent"
import { BasicContent2 } from "../components/BasicContent2"
import { BreadCrumb } from "../components/BreadCrumb"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroContainer } from "../components/HeroContainer"
import { HeroImage2 } from "../components/HeroImage2"
import poultryhero from "../images/poultry/poultry_hero_2.jpg"
import breedinghouse from "../images/poultry/breedinghouse_2.jpg"

export const Poultry = () => {
    const headings = ["Prefabricated Steel Poultry Farm House Design and Construction","Why you choose OX", "The Poultry house equipments composed of :", "We also can provide you overvalue services: ( one -stop service for poultry farm needs )"]
    const content = [
        "Poultry farmhouses are constructed using high-quality painted steel frames for a robust structure, with sandwich panels used for the walls and roof. These buildings are pre-designed and manufactured in a factory before being assembled on-site. The lifespan of a poultry house is typically around 10 years. We generally design poultry sheds with PU sandwich panels for the walls, complemented by fiberglass roofing made on-site. This construction offers waterproof, fire-resistant, heat-insulating, and soundproof qualities. For visuals, please see the images below.",
        "We specialize in the design and construction of prefab poultry farms, with projects established in over 30 countries worldwide. Our customized designs help mitigate losses associated with poor planning due to insufficient expertise. By effectively managing overlapping sub-projects, we minimize factors that could delay timelines. We ensure precise positioning for future equipment installation to avoid errors that may necessitate reconstruction. Our designs take an integrated approach, optimizing arrangements to reduce construction time. With specialized project management and a professional installation team, we guarantee that projects are carried out safely and according to schedule. Our attentive after-sales service alleviates customer concerns, and our marketing managers are well-trained and dedicated to providing top-notch service. We also maintain strict standards for testing finished products to ensure the quality of all our steel structures.",
        [ "1) Central Feeding System", "2) Pan Feeding Mechanism", "3) Nipple Watering System", "4) Air Ventilation System", "5) Climate Control System", "6) Cooling Pad Setup", "7) Mist Spraying System", "8) Curtain Mechanism", "9) Hot Air Furnace Heating System" ],
        ["10) Poultry House Location Selection", "11) Guidance for Poultry House Design and Construction Preparation", "12) Poultry House Construction", "13) Installation of Breeding Equipment", "14) After-Sales Support"]
    ]
    return (
            <>
                <Header/>
                <HeroImage2 url={poultryhero}/>
                <BreadCrumb target={"Poultry"}/>
                <HeroContainer image={breedinghouse}/>
                <BasicContent heading={headings[0]} content={content[0]} bullet={false}/>
                <BasicContent heading={headings[1]} content={content[1]} bullet={false}/>
                <BasicContent2 heading={headings[2]} bulletin={content[2]}/>
                <BasicContent2 heading={headings[3]} bulletin={content[3]}/>
                <Footer/>
            </>
        )
}