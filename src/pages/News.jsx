import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
import xpanseLizardImage from "../assets/xpanse_lizards_image.jpg";
import advancedMaterialsInterfacesImage from "../assets/advanced_materials_interfaces_image.jpg"
import DOHInnovationChallengeImage from "../assets/DOH_innovation_challenge.png"
import expoOsakaImage from "../assets/expo_osaka_image.jpg";
import KhalilBBCEtH from "../assets/KhalilBBCEtH.png";
import COPIsAwards from "../assets/CO-PIsAwards.png";
import WaelIEEEBioCas26 from "../assets/EditedWaelIEEEBioCas26.jpeg";
import SongU3B from "../assets/SongU3B.jpeg";
import CoralGut from "../assets/CoralGut.png";
import IonGel from "../assets/IonPolarNanofluidHydrogel.jpg";
import ModFluid from "../assets/ModularReconfigMicroFludicDevice.jpeg";
import OptoProbe from "../assets/OptoNeuralProbe.png";
import PillNational from "../assets/WeightLossPillNational.jpeg";
import A3DprintedFlourbasedHeater from "../assets/A3DprintedFlourbasedHeater.jpg";
import AsynchronousQuadraturePhase from "../assets/Asynchronous Quadrature-Phase.jpeg";
import AnUltraLowPowerAmplifierLess from "../assets/AnUltraLowPowerAmplifierLess.jpeg";
import AutomaticSleepStageClassification from "../assets/AutomaticSleepStageClassification.png";
import A3Dprintedoptogeneticdevice from "../assets/A3Dprintedoptogeneticdevice.jpg";



// News data - expanded from your home page
const newsItems = [
    {
        id: 1,
        title: "CENTMED Showcases at Expo 2025 Osaka",
        subtitle: "Spotlight on wearable diagnostics and smart surgical tools at the UAE Pavilion",
        date: "April 15, 2025",
        image: expoOsakaImage,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7345804567206322177",
        excerpt: "As part of Health & Well-being Week at Expo 2025 Osaka, the UAE Pavilion hosted NYUAD’s CENTMED for a showcase of next-generation medical technologies. The event featured innovations in wearable diagnostics and smart surgical tools, sparking meaningful dialogue on expanding access to healthcare through purpose-driven innovation.",
        category: "Global Outreach"
    },
    {
        id: 2,
        title: "Brain Organoids + Lizard Tails + Biomimicry",
        subtitle: "Dr. Rafael Song explores brain organoids, bioinspired materials, and the future of translational medicine.",
        date: "May 15, 2025",
        image: xpanseLizardImage,
        link: "https://www.xpanse.world/insight/brain-organoids-lizard-tails-biomimicry",
        excerpt: "Dr. Rafael Song shares his interdisciplinary approach to innovation — from growing brain organoids to testing lemon peels and lizard tails for smarter biomaterials. This feature explores his team's use of AI, synthetic tissues, and nature-inspired designs to shape the future of medical devices.",
        category: "Research"
    },
    {
        id: 3,
        title: "Publication in Advanced Materials Interfaces",
        subtitle: "Study explores ion concentration polarization using experiments and molecular simulations",
        date: "May 05, 2025",
        image: advancedMaterialsInterfacesImage,
        link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202401018",
        excerpt: "In a recent publication in Advanced Materials Interfaces, Dr. Rafael Song and collaborators combined experiments and molecular dynamics simulations to investigate ion concentration polarization in nanofluidic hydrogel membranes, revealing how ionic strength and membrane charge affect RNA and ion localization.",
        category: "Publications"
    },
    {
        id: 4,
        title: "CENTMED Student Team Wins Innovation Award",
        subtitle: "NYUAD duo awarded for groundbreaking dementia detection software at DOH innovation challenge.",
        date: "November 20, 2024",
        image: DOHInnovationChallengeImage,
        link: "https://nyuad.nyu.edu/en/academics/divisions/engineering/engineering-awards-successes.html",
        excerpt: "The NYUAD student team of Maksat Khobdabayev and Hyun Woo Lim, supervised by CENTMED, won the first prize at the Abu Dhabi Academic Healthcare Innovation Challenge by the Department of Health (DOH). The team developed an early dementia detection software. The official award ceremony was held on Nov. 20th 2024 at the St. Regis Saadiyat Island.",
        category: "Awards"
    },
    {
        id: 5,
        title: "CENTMED's Professor Song Presents at UAE Biomaterials Conference",
        subtitle: "Rafael (Yong-Ak) Song delivers invited talk on microfluidic innovation for cancer research",
        date: "October 31, 2025",
        image: SongU3B,
        link: "https://www.linkedin.com/posts/centmed_centmed-medicaldevices-researchexcellence-activity-7389910871789019136-mqJ5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
        excerpt: "Professor Rafael (Yong-Ak) Song was invited to speak at the 1st UAE Biomaterials, Biofabrication, and Bioengineering Conference (U3B) at Khalifa University on October 24-25, 2025. His presentation, titled 'A Modular and Reconfigurable Microfluidic Device for Culturing Spheroids Under Continuous Perfusion,' showcased an innovative device to grow cancer spheroids under continuous perfusion for drug screening. The invited talk highlighted CENTMED's research excellence on an international platform and provided opportunities for collaboration with bioengineering leaders.",
        category: "Research"
    },
    {
        id: 6,
        title: "CENTMED Presents LaparoSense at IEEE BioCAS 2025",
        subtitle: "Wael Othman showcases tactile sensing innovation for minimally invasive surgery",
        date: "October 18, 2025",
        image: WaelIEEEBioCas26,
        link: "https://www.linkedin.com/posts/centmed_centmedresearch-ieeebiocas2025-healthtech-activity-7387089760512671744-IhV7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
        excerpt: "Wael Othman represented CENTMED at the 21st IEEE Biomedical Circuits and Systems Conference (BioCAS 2025), presenting LaparoSense for Tactile Sensing in Minimally Invasive Surgery through a live demonstration and poster presentation. The session provided valuable opportunities to exchange ideas with global leaders in biomedical circuits and systems.",
        category: "Awards"
    },
    {
        id: 7,
        title: "CENTMED Co-PIs Awarded NYU Discovery Research Fund Grants",
        subtitle: "Prof. Sohmyung Ha and Prof. Khalil Ramadi Receive Funding for Human Health Research",
        date: "October 29, 2025",
        image: COPIsAwards,
        link: "https://www.linkedin.com/posts/centmed_centmed-nyuad-research-activity-7362103802742661120-2lDD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
        excerpt: "CENTMED Co-PIs Prof. Sohmyung Ha and Prof. Khalil Ramadi have been awarded grants from the NYU Discovery Research Fund for Human Health. Ha received a Planning Award for a wearable closed-loop neuromodulation system for sleep-disorder treatment, while Ramadi was granted an Early Stage research award for ingestible electronic devices targeting gut serotonergic signaling in gut and mood disorders.",
        category: "Awards"
    },
    {
        id: 8,
        title: "Prof. Khalil Ramadi Featured on BBC World Service Live Event",
        subtitle: "The Engineers: Exploring the Human at Royal Geographical Society",
        date: "August 13, 2025",
        image: KhalilBBCEtH,
        link: "https://www.linkedin.com/posts/centmed_the-new-medical-innovations-that-could-change-activity-7363618268642795520-5Ugx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
        excerpt: "CENTMED Co-director Prof. Khalil Ramadi was featured on BBC World Service discussing his groundbreaking work on FLASH, a capsule-sized pill with electrodes that stimulate the gut's neural network. He explained how the gut, known as the 'little brain' with the body's second-largest neural network, can be manipulated through ingestible electronics to potentially treat eating disorders and metabolic diseases. Prof. Ramadi appeared alongside Dr. Thomas Oxley (CEO, Synchron) and Prof. Eleanor Stride (University of Oxford) to discuss the future of engineering in redefining healthcare.",
        category: "Publications"
    },
    {
        id: 9,
        title: "Modular Microfluidics + Spheroid Culture + Biomimicry",
        subtitle: "Dr. Rafael Song's team unveils breakthrough microfluidic device that revolutionizes 3D cell culture for drug testing and disease modeling.",
        date: "August 13, 2025",
        image: ModFluid,
        link: "https://doi.org/10.1063/5.0262536",
        excerpt: "Prof. Rafael (Yong-Ak) Song and his team at NYU Abu Dhabi have published groundbreaking research in APL Bioengineering on a reconfigurable microfluidic platform that enhances spheroid growth by up to 140%. The device combines reversible sealing with continuous perfusion and optical coherence tomography, offering unprecedented flexibility for pharmaceutical testing and tissue engineering applications.",
        category: "Publications"
    },
    {
        id: 10,
        title: "3D-Printed Neural Probes + Optogenetics + Drug Delivery",
        subtitle: "Prof. Sohmyung Ha's team develops multimodal optogenetic neural probe combining light stimulation and fluid injection in a single device.",
        date: "May 15, 2025",
        image: OptoProbe,
        link: "https://doi.org/10.1038/s41598-025-13654-4",
        excerpt: "Prof. Sohmyung Ha and his team at New York University present a breakthrough 3D-printed optogenetic neural probe that integrates light delivery and microfluidic drug injection capabilities. By combining a commercially available microfluidic tube with a custom 3D-printed opto-probe, the device offers rapid, customizable assembly for advanced neuroscience research—enabling simultaneous optical stimulation and precise drug or opsin delivery to neural tissue.",
        category: "Publications"
    },
    {
        id: 11,
        title: "Wireless Light Pills + Gut-Brain Axis + Neuroengineering",
        subtitle: "Professor Khalil Ramadi pioneers ingestible devices that wirelessly stimulate gut neurons to control hunger and nutrient absorption.",
        date: "September 9, 2025",
        image: PillNational,
        link: "https://www.thenationalnews.com/health/2025/09/09/abu-dhabi-weight-loss-device/",
        excerpt: "Professor Khalil Ramadi, CENTMED Co-director at NYU Abu Dhabi, unveils a breakthrough ingestible capsule that emits light on-demand to wirelessly activate gut neurons. This battery-free device, fabricated entirely through 3D printing, represents a significant step toward non-invasive treatments for neuro-metabolic disorders, with potential applications in controlling appetite and treating digestive conditions.",
        category: "Publications"
    },
    {
        id: 12,
        title: "Ion Concentration Polarization in Nanofluidic Hydrogels",
        subtitle: "Professor Rafael Song's team combines experiments and molecular dynamics simulations to advance nanofluidic membrane technology.",
        date: "May 5, 2025",
        image: IonGel,
        link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202401018",
        excerpt: "Professor Rafael (Yong-Ak) Song's research team achieved a remarkable milestone with their work featured on the inside front cover of Advanced Materials Interfaces. Their study, 'Investigating the Mechanism of Ion Concentration Polarization within Nanofluidic Hydrogel Membranes: Experiment and Simulation,' combines experimental techniques with molecular dynamics simulations to explore the fundamental mechanisms driving ion transport in nanofluidic systems. This interdisciplinary approach advances the understanding of nanofluidic hydrogel membranes, with potential applications in biomedical devices, energy conversion, and advanced filtration technologies.",
        category: "Publications"
    },
    {
        id: 13,
        title: "CORAL: Passive Intestinal Microbiome Sampling Device",
        subtitle: "CENTMED's ingestible capsule with tortuous lattices enables targeted gut microbiome sampling for disease research.",
        date: "November 5, 2025",
        image: CoralGut,
        link: "https://lnkd.in/dmBMmjhg",
        excerpt: "CENTMED presents CORAL, a passive ingestible capsule published in Device (Cell Press) that enables targeted sampling of the gastrointestinal tract. Led by Dr. Hanan Mohammed and Principal Investigator Prof. Khalil Ramadi, in collaboration with the Center for Genomics and Systems Biology's Aashish Jha and team, this technology provides a more accurate and comprehensive view of gut microbial communities, opening new avenues for studying gut health, disease mechanisms, and potential therapeutics.",
        category: "Publications"
    },
        {
        id: 14,
        title: "A 3D-printed Flour-based Heater with Boron-Nitride-enhanced Thermal Response, Self-healing Capability, and Biodegradability",
        subtitle: "A 3D-printed biodegradable flour-based heater enhanced with boron nitride offers improved thermal response and self-healing capabilities.",
        date: "2025",
        image: A3DprintedFlourbasedHeater,
        link: "https://doi.org/10.1016/j.jmrt.2025.11.023",
        excerpt: "Published in the Journal of Materials Research and Technology, this study by Binbin Guo, Jiawei Chen, Tianbiao Zeng, Keonghwan Oh, Hongqiao Qu, Jiaming Bai, and Prof. Sohmyung Ha introduces a pioneering flour-based 3D-printed heater with enhanced heat transfer and self-healing properties, supporting sustainable and functional materials research.",
        category: "Publications"
    },
    {
        id: 15,
        title: "Asynchronous Quadrature-phase Undersampling Technique for Wide-frequency Impedance Measurement",
        subtitle: "A novel quadrature-phase undersampling technique improves wide-frequency impedance measurement accuracy and efficiency.",
        date: "2025",
        image: AsynchronousQuadraturePhase,
        link: "https://doi.org/10.1109/TIM.2025.3600712",
        excerpt: "Published in IEEE Transactions on Instrumentation and Measurement, this work by Soon-Jae Kweon, Uljad Berdica, Hyunwoo Park, Muhammad Abrar Akram, Minji Lee, and Prof. Sohmyung Ha presents an asynchronous quadrature-phase undersampling method that enhances precision across a broad impedance measurement spectrum.",
        category: "Publications"
    },
    {
        id: 16,
        title: "An Ultra-low-power Amplifier-less Potentiostat IC Based on Digital Regulation Loop",
        subtitle: "A low-power, amplifier-less potentiostat IC utilizing a digital regulation loop for advanced biosensing applications.",
        date: "2025",
        image: AnUltraLowPowerAmplifierLess,
        link: "https://doi.org/10.1109/TBCAS.2025.3527652",
        excerpt: "Featured in IEEE Transactions on Biomedical Circuits and Systems, this paper by Muhammad Abrar Akram, Aida Aberra, Soon-Jae Kweon, and Prof. Sohmyung Ha introduces an ultra-low-power potentiostat IC that eliminates traditional amplifiers through a digital regulation loop, paving the way for compact and energy-efficient biosensors.",
        category: "Publication"
    },
    {
        id: 17,
        title: "3D-printed Optogenetic Device with a Recording-channel-embedded Waveguide",
        subtitle: "A multifunctional 3D-printed optogenetic probe integrating light delivery and neural recording capabilities.",
        date: "June 29 - July 3, 2025",
        image: A3Dprintedoptogeneticdevice,
        link: "https://lnkd.in/dmBMmjhg", //not real link
        excerpt: "Published in the Proceedings of the International Conference on Solid-State Sensors, Actuators and Microsystems (Transducers) 2025, Orlando, this study by Keonghwan Oh and Prof. Sohmyung Ha demonstrates a 3D-printed optogenetic device that integrates optical stimulation and neural signal recording through an embedded waveguide structure, enhancing precision in neural interfacing.",
        category: "Research"
    },
    {
        id: 18,
        title: "Sleep Stage Classification with CNN-Transformer-combined Structure Using Single-Channel Raw ECG",
        subtitle: "A CNN-Transformer hybrid model for accurate sleep stage classification using raw single-channel ECG inputs.",
        date: "July 14-17, 2025",
        image: AutomaticSleepStageClassification,
        link: "https://lnkd.in/dmBMmjhg",
        excerpt: "Presented at the 47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC) 2025, Copenhagen, this paper by Moogyeom Kim, Seokjae Lee, Sohmyung Ha, Soon-Jae Kweon, and Minji Lee proposes a CNN-Transformer-based deep learning model for efficient sleep stage classification using single-channel ECG data, offering improved accuracy and reduced preprocessing complexity.",
        category: "Research"
    }
];

const News = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories and add "All" option
    const categories = ["All", ...new Set(newsItems.map(item => item.category))];

    // Filter news items based on selected category (reverse order)
    const filteredNews = (activeCategory === "All"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory)
    ).slice().reverse();

    return (
        <div className="news-container">
            <ScrollProgress />

            <div className="news-header">
                <h1 className="news-title">News & Announcements</h1>
                <p className="news-subtitle">
                    Stay updated with the latest developments at the Center for Translational Medical Devices.
                </p>
            </div>

            {/* Category Filter */}
            <div className="news-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* News Items Grid */}
            <div className="news-grid">
                {filteredNews.map(item => (
                    <div key={item.id} className="news-item">
                        <div className="news-item-image-container">
                            <img src={item.image} alt={item.title} className="news-item-image" />
                        </div>
                        <div className="news-item-content">
                            <div className="news-item-header">
                                <span className="news-item-date">{item.date}</span>
                                <span className="news-item-category">{item.category}</span>
                            </div>
                            <h2 className="news-item-title">{item.title}</h2>
                            <p className="news-item-subtitle">{item.subtitle}</p>
                            <p className="news-item-excerpt">{item.excerpt}</p>
                            {item.link.startsWith("http") ? (
                                <a
                                    href={item.link}
                                    className="news-item-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read full article
                                </a>
                            ) : (
                                <Link to={item.link} className="news-item-link">
                                    Read full article
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state message when no news items match the filter */}
            {filteredNews.length === 0 && (
                <div className="no-news-message">
                    <p>No news items found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default News;
