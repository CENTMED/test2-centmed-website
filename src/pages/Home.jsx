import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import BeatingHeart from "../components/BeatingHeart";
import ResearchIcon from "../components/ResearchIcon";
import TeamIcon from "../components/TeamIcon";
import NewsIcon from "../components/NewsIcon";
import SectionNavigator from "../components/SectionNavigator";
import researchImage from "../assets/centmed_research_areas.png";
import groupPhoto from "../assets/Group Photo_CENTMED_20Oct2025.jpg";
import xpanseLizardImage from "../assets/xpanse_lizards_image.jpg";
import advancedMaterialsInterfacesImage from "../assets/advanced_materials_interfaces_image.jpg"
import DOHInnovationChallengeImage from "../assets/DOH_innovation_challenge.png"
import expoOsakaImage from "../assets/expo_osaka_image.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import KhalilBBCEtH from "../assets/KhalilBBCEtH.png";
import COPIsAwards from "../assets/CO-PIsAwards.png";
import WaelIEEEBioCas26 from "../assets/EditedWaelIEEEBioCas26.jpeg";
import SongU3B from "../assets/SongU3B.jpeg";
import CoralGut from "../assets/CoralGut.png";
import IonGel from "../assets/IonPolarNanofluidHydrogel.jpg";
import ModFluid from "../assets/ModularReconfigMicroFludicDevice.jpeg";
import OptoProbe from "../assets/OptoNeuralProbe.png";
import PillNational from "../assets/WeightLossPillNational.jpeg";


const newsItems = [
    {
        id: 1,
        title: "Publication in Advanced Materials Interfaces",
        subtitle: "Study explores ion concentration polarization using experiments and molecular simulations",
        image: advancedMaterialsInterfacesImage,
        link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202401018"
    },
    {
        id: 2,
        title: "Brain Organoids + Lizard Tails + Biomimicry",
        subtitle: "Dr. Rafael Song explores brain organoids, bioinspired materials, and the future of translational medicine.",
        image: xpanseLizardImage,
        link: "https://www.xpanse.world/insight/brain-organoids-lizard-tails-biomimicry"
    },
    {
        id: 3,
        title: "CENTMED Student Team Wins Innovation Award",
        subtitle: "NYUAD duo awarded for groundbreaking dementia detection software at DOH innovation challenge.",
        image: DOHInnovationChallengeImage,
        link: "https://nyuad.nyu.edu/en/academics/divisions/engineering/engineering-awards-successes.html"
    },
    {
        id: 4,
        title: "CENTMED Showcases at Expo 2025 Osaka",
        subtitle: "Spotlight on wearable diagnostics and smart surgical tools at the UAE Pavilion",
        image: expoOsakaImage,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7345804567206322177"
    },
    {
        id: 5,
        title: "CENTMED's Professor Song Presents at UAE Biomaterials Conference",
        subtitle: "Rafael (Yong-Ak) Song delivers invited talk on microfluidic innovation for cancer research",
        image: SongU3B,
        link: "https://www.linkedin.com/posts/centmed_centmed-medicaldevices-researchexcellence-activity-7389910871789019136-mqJ5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
    },
    {
        id: 6,
        title: "CENTMED Presents LaparoSense at IEEE BioCAS 2025",
        subtitle: "Wael Othman showcases tactile sensing innovation for minimally invasive surgery",
        image: WaelIEEEBioCas26,
        link: "https://www.linkedin.com/posts/centmed_centmedresearch-ieeebiocas2025-healthtech-activity-7387089760512671744-IhV7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
    },
    {
        id: 7,
        title: "CENTMED Co-PIs Awarded NYU Discovery Research Fund Grants",
        subtitle: "Prof. Sohmyung Ha and Prof. Khalil Ramadi Receive Funding for Human Health Research",
        image: COPIsAwards,
        link: "https://www.linkedin.com/posts/centmed_centmed-nyuad-research-activity-7362103802742661120-2lDD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
    },
    {
        id: 8,
        title: "Prof. Khalil Ramadi Featured on BBC World Service Live Event",
        subtitle: "The Engineers: Exploring the Human at Royal Geographical Society",
        image: KhalilBBCEtH,
        link: "https://www.linkedin.com/posts/centmed_the-new-medical-innovations-that-could-change-activity-7363618268642795520-5Ugx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADox-OMB4nVfBHLe6FFM76xloIHaWxPEi4M",
    },
    {
        id: 9,
        title: "Modular Microfluidics + Spheroid Culture + Biomimicry",
        subtitle: "Dr. Rafael Song's team unveils breakthrough microfluidic device that revolutionizes 3D cell culture for drug testing and disease modeling.",
        image: ModFluid,
        link: "https://doi.org/10.1063/5.0262536",
    },
    {
        id: 10,
        title: "3D-Printed Neural Probes + Optogenetics + Drug Delivery",
        subtitle: "Prof. Sohmyung Ha's team develops multimodal optogenetic neural probe combining light stimulation and fluid injection in a single device.",
        image: OptoProbe,
        link: "https://doi.org/10.1038/s41598-025-13654-4",
    },
    {
        id: 11,
        title: "Wireless Light Pills + Gut-Brain Axis + Neuroengineering",
        subtitle: "Professor Khalil Ramadi pioneers ingestible devices that wirelessly stimulate gut neurons to control hunger and nutrient absorption.",
        image: PillNational,
        link: "https://www.thenationalnews.com/health/2025/09/09/abu-dhabi-weight-loss-device/",
    },
    {
        id: 12,
        title: "Ion Concentration Polarization in Nanofluidic Hydrogels",
        subtitle: "Professor Rafael Song's team combines experiments and molecular dynamics simulations to advance nanofluidic membrane technology.",
        image: IonGel,
        link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202401018",
    },
    {
        id: 13,
        title: "CORAL: Passive Intestinal Microbiome Sampling Device",
        subtitle: "CENTMED's ingestible capsule with tortuous lattices enables targeted gut microbiome sampling for disease research.",
        image: CoralGut,
        link: "https://lnkd.in/dmBMmjhg",
    }
];

const Home = () => {
    const ecgRef = useRef(null);

    useEffect(() => {
        // Add class to body only on homepage
        document.body.classList.add('home-page');

        if (ecgRef.current) {
            // Add class to trigger animation after component mounts
            setTimeout(() => {
                ecgRef.current.classList.add('animate-ecg');
            }, 500); // Short delay to let the page load first
        }
        return () => {
            // Clean up the class when leaving the homepage
            document.body.classList.remove('home-page');
        };
    }, []);

// News Carousel Component
const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = Math.max(0, newsItems.length - 3);

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1));
    };

    const reversedNews = newsItems.slice().reverse();
    const visibleNews = reversedNews.slice(currentIndex, currentIndex + 3);


    return (
        <div className="news-carousel-container">
            <div className="news-carousel-header">
                <h2 className="block-heading">What's New</h2>
                <p className="block-section-text">
                    Check out the latest from CENTMED, including research highlights, student projects, and upcoming events.
                </p>
            </div>

            <div className="news-carousel-content">
                {currentIndex > 0 && (
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={handlePrevious}
                        aria-label="Previous news"
                    >
                        &lt;
                    </button>
                )}

                <div className="news-cards-container">
                    {visibleNews.map(item => (
                        <div key={item.id} className="news-card">
                            <img src={item.image} alt={item.title} className="news-card-image" />
                            <div className="news-card-content">
                                <h3 className="news-card-title">{item.title}</h3>
                                <p className="news-card-subtitle">{item.subtitle}</p>
                                {item.link.startsWith("http") ? (
                                    <a href={item.link} className="news-card-link" target="_blank" rel="noopener noreferrer">Read more</a>
                                ) : (
                                    <Link to={item.link} className="news-card-link">Read more</Link>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

                {currentIndex < maxIndex && (
                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={handleNext}
                        aria-label="Next news"
                    >
                        &gt;
                    </button>
                )}
            </div>

            <div className="block-buttons">
                <Link to="/news" className="section-button">All News</Link>
                <Link to="/events" className="section-button">Events</Link>
            </div>
        </div>
    );
};
    const textBlocks = [
        {
            id: 1,
            title: "What We Do",
            text: "CENTMED develops innovative medical devices through research that brings together engineering, biology, and clinical needs. We focus on metabolic, cardiovascular, and neurological disorders that are especially relevant to Abu Dhabi.",
            align: "left",
            icon: () => <img src={researchImage} alt="Research" className="section-icon" />,
            buttons: [
                { label: "Research Clusters", link: "/research" }
            ]
        },
        {
            id: 2,
            title: "Who We Are",
            text: "We're a team of researchers, clinicians, and students working together to improve healthcare through technology. With different areas of expertise, we collaborate across disciplines to turn ideas into practical solutions.",
            align: "right",
            icon: () => <img src={groupPhoto} alt="Team" className="section-icon" />,
            buttons: [
                { label: "Meet Our Team", link: "/people" }
            ]
        }
    ];

    return (
        <div className="home-container">
            {/* Section Navigator */}
            {/* <SectionNavigator /> */}

            {/* Landing Section with Title and Heart Animation */}
            <section className="landing-section">
                <div className="landing-wrapper">
                    <div className="landing-content">
                        {/* Title Container on the Left */}
                        <div className="title-container">
                            <h1>Center for<br />Translational<br />Medical Devices</h1>

                            {/* ECG Line */}
                            <div className="ecg-container">
                                <svg
                                    ref={ecgRef}
                                    className="ecg-line"
                                    viewBox="0 0 600 50"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0,25 L150,25 L157,10 L163,40 L170,25 L300,25 L307,10 L313,40 L320,25 L450,25 L457,10 L463,40 L470,25 L600,25"
                                        stroke="var(--teal)"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <p className="subtitle">
                                The objective of CENTMED is to catalyze translational research collaborations between researchers at NYUAD and clinicians at medical centres in Abu Dhabi and the UAE. CENTMED is specifically focused on the development of medical device technologies for diagnostics and therapeutics, with a broad goal of advancing Bioinnovation and Health within NYUAD and Abu Dhabi.
                            </p>
                        </div>

                        {/* Heart Animation Container on the Right */}
                        <div className="heart-animation-container">
                            <BeatingHeart />
                        </div>
                    </div>
                </div>
            </section>

            {/* First two sections remain the same */}
            {textBlocks.map((block) => (
                <motion.section
                    key={block.id}
                    className="content-section"
                    id={block.id === 1 ? "what-we-do" : "who-we-are"}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="split-section-content">
                        {block.align === "left" ? (
                            <>
                                <motion.div
                                    className="split-text-container"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <h2 className="block-heading">{block.title}</h2>
                                    <p className="block-section-text">{block.text}</p>

                                    {/* Buttons */}
                                    <div className="block-buttons">
                                        {block.buttons && block.buttons.map((button, index) => (
                                            <Link key={index} to={button.link} className="section-button">
                                                {button.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="split-svg-container"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                >
                                    {block.icon ? <block.icon /> : block.svg}
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    className="split-svg-container"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {block.icon ? <block.icon /> : block.svg}
                                </motion.div>
                                <motion.div
                                    className="split-text-container"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                >
                                    <h2 className="block-heading">{block.title}</h2>
                                    <p className="block-section-text">{block.text}</p>

                                    {/* Buttons */}
                                    <div className="block-buttons">
                                        {block.buttons && block.buttons.map((button, index) => (
                                            <Link key={index} to={button.link} className="section-button">
                                                {button.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>
                </motion.section>
            ))}
            {/* News Section with Carousel */}
            <motion.section
                className="content-section"
                id="whats-new"
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <NewsCarousel />
            </motion.section>
        </div>
    );
};

export default Home;
