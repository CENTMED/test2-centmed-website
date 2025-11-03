import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
import xpanseLizardImage from "../assets/xpanse_lizards_image.jpg";
import advancedMaterialsInterfacesImage from "../assets/advanced_materials_interfaces_image.jpg"
import DOHInnovationChallengeImage from "../assets/DOH_innovation_challenge.png"
import expoOsakaImage from "../assets/expo_osaka_image.jpg";

// News data - expanded from your home page
const newsItems = [
    {
        id: 1,
        title: "Publication in Advanced Materials Interfaces",
        subtitle: "Study explores ion concentration polarization using experiments and molecular simulations",
        date: "May 05, 2025",
        image: advancedMaterialsInterfacesImage,
        link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admi.202401018",
        excerpt: "In a recent publication in Advanced Materials Interfaces, Dr. Rafael Song and collaborators combined experiments and molecular dynamics simulations to investigate ion concentration polarization in nanofluidic hydrogel membranes, revealing how ionic strength and membrane charge affect RNA and ion localization.",
        category: "Publications"
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
        title: "CENTMED Showcases at Expo 2025 Osaka",
        subtitle: "Spotlight on wearable diagnostics and smart surgical tools at the UAE Pavilion",
        date: "April 15, 2025",
        image: expoOsakaImage,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7345804567206322177",
        excerpt: "As part of Health & Well-being Week at Expo 2025 Osaka, the UAE Pavilion hosted NYUAD’s CENTMED for a showcase of next-generation medical technologies. The event featured innovations in wearable diagnostics and smart surgical tools, sparking meaningful dialogue on expanding access to healthcare through purpose-driven innovation.",
        category: "Global Outreach"
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
