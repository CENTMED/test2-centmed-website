import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Landing Page for NY Workshop
import "./Events.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
import { CalendarDays, Users, University } from "lucide-react";
import AliAsgarBhagatImage from "../assets/AliAsgarBhagat_image.jpg";
import SamuelTangImage from "../assets/SamuelTang_image.jpg";
import QiaoquiangGanImage from "../assets/QiaoqiangGan_image.jpg";
import DrAdamKhalifa from "../assets/DrAdamKhalifa.png";
import ChulKimKAIST from "../assets/ChulKimKAIST.jpg";

const eventData = [
    {
        category: "CENTMED Seminar Series",
        title: "Injectable, Wirelessly Powered Implants for Distributed Neural Interfacing within the IoB",
        speaker: "Dr. Adam Khalifa",
        date: "Oct 16th, 2025",
        university: "University of Florida",
        image: DrAdamKhalifa,
    },
    {
        category: "CENTMED Seminar Series",
        title: "Miniaturized Implantable/Wearable Systems Enabled by Energy-Efficient Integrated Circuits",
        speaker: "Chul Kim",
        date: "Oct 15th, 2025",
        university: "Korea Advanced Institute of Science and Technology (KAIST)",
        image: ChulKimKAIST,
    },
    {
        category: "CENTMED Seminar Series",
        title: "Accelerating Research Commercialization – From Bench to Bank",
        speaker: "Ali Asgar Bhagat",
        date: "Jan 29th, 2025",
        university: "National University of Singapore",
        image: AliAsgarBhagatImage,
    },
    {
        category: "CENTMED Seminar Series",
        title: "Miniature Electronic Nose System and Applications",
        speaker: "Kea-Tiong (Samuel) Tang",
        date: "Dec 18th, 2024",
        university: "National Tsing Hua University, Taiwan",
        image: SamuelTangImage,
    },
    {
        category: "CENTMED Seminar Series",
        title: "Light-matter-interaction within extreme dimensions for optical biosensing",
        speaker: "Qiaoqiang Gan",
        date: "Oct 4th, 2024",
        university: "KAUST, Saudi Arabia",
        image: QiaoquiangGanImage,
    },
    {
        category: "Workshops",
        title: "Medical Devices and Implants Workshop",
        speaker: "NYU Langone Health + NYU Tandon + NYU Abu Dhabi (NYUAD)",
        date: "March 18, 2026",
        university: "19 Washington Square North, New York",
        image: DrAdamKhalifa, // Replace with workshop image if available
        detailsLink: "/events/medical-devices-implants-workshop-2026-03-18",
      },
];

const Events = () => {
    return (
        <div className="events-container">
            <ScrollProgress />
            <h1 className="events-title">Events</h1>
            <div className="events-list">
                {eventData.map((event, index) => (
                    <motion.div
                        key={index}
                        className="event-card"
                        initial={{ y: 50, opacity: 0 }} // Start from below and hidden
                        whileInView={{ y: 0, opacity: 1 }} // Move to its final position (top) and become visible
                        viewport={{ once: true, amount: 0.2 }} // Trigger animation once the section is 20% in view
                        transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                    >
                        <div className="event-info">
                            <p className="event-category">{event.category}</p>
                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-speaker"><Users size={24} color="var(--purple)" /> {event.speaker}</p>
                            <p className="event-university"><University size={24} color="var(--purple)" /> {event.university}</p>
                            <p className="event-date"><CalendarDays size={24} color="var(--purple)" /> {event.date}</p>
                            {event.detailsLink && (
                        <div style={{ marginTop: "14px" }}>
                              <Link
                                to={event.detailsLink}
                                className="section-button"
                              >
                                View details
                              </Link>
                            </div>
                          )}
                        </div>
                        </div>
                        <img className="event-image" src={event.image} alt={event.speaker} />
                    </motion.div>
                ))}
            </div>
            <p></p>
            <p></p>
        </div>
    );
};

export default Events;
