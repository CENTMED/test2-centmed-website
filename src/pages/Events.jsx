import React, { useState, useEffect } from "react"; // Changed to use pop-up windows for extra info
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Import for NY Workshop page

import "./Events.css";
import ScrollProgress from "../components/ScrollProgress.jsx";
// import { CalendarDays, Users, University } from "lucide-react";
import { CalendarDays, Users, University, Clock3, MapPin, X} from "lucide-react";
import AliAsgarBhagatImage from "../assets/AliAsgarBhagat_image.jpg";
import SamuelTangImage from "../assets/SamuelTang_image.jpg";
import QiaoquiangGanImage from "../assets/QiaoqiangGan_image.jpg";
import DrAdamKhalifa from "../assets/DrAdamKhalifa.png";
import ChulKimKAIST from "../assets/ChulKimKAIST.jpg";
import nyHeroImage from "../assets/workshop_ny_header.png";
import investigatorMeetingFlyer from "../assets/Centmed-Event-Oct-2026.png";
import PaulDowneyImage from "../assets/PaulDowneyImage.png";
import KindaKhalafImage from "../assets/KindaKhalafImage.png"; 


const eventData = [
    {
        category: "CENTMED Seminar Series",
        title: "Technology-Enabled Stroke Rehabilitation: Bedside to Stride",
        subtitle: "Exploring How AI, Wearable Sensors, and Robotics Can Transform Stroke Recovery from Hospital Care to Independent Mobility",
        speaker: "Prof. Kinda Khalaf",
        date: "November 18, 2026",
        university: "NYU Abu Dhabi, C1-120",
        image: KindaKhalafImage,

        abstract: 
            `
            Stroke is a leading cause of death and long-term disability worldwide, with more than 100 million people living post stroke and an estimated annual cost of US$890 billion, globally. In the Middle East and North Africa, the number of new strokes rose by more than 130% between 1990 and 2019, and patients in the UAE present at notably younger ages than in Western cohorts. Routine post-stroke care still leaves major gaps across the recovery pathway. Patients spend much of the acute phase inactive, gait therapy sessions are low in dose, progress at home is rarely measured, and close to half of survivors fall within the first year after discharge.
            
            This talk follows the patient journey from the acute bedside to independent walking in the community. It shows how technology: sensing, wearables, and artificial intelligence can link one longitudinal patient record across settings that have traditionally been disconnected. It reviews current evidence for connected rehabilitation, from AI-assisted imaging and recovery prediction to telerehabilitation and wearable-assisted home programs. It then presents work from the HITT  (Healthcare Innovation Technologies & Translation) Lab at Khalifa University, including multimodal physiological quantification of movement impairment, a systematic review of control strategies for cable-driven gait exoskeletons, and the simulation-first C-LREX framework, which corrected four of five clinical stroke gait patterns within safe cable tension limits. The talk closes with a closed-loop vision of sense, connect, estimate, assist, and review, and outlines the barriers to clinical translation.
            `
            
    },
    {
        category: "CENTMED Seminar Series",
        title: "Biobanking as a Strategic Enabler of Translational Science",
        speaker: "Paul Downey",
        date: "Nov 4th, 2026",
        university: "Abu Dhabi Biobank (M42), UAE",
        image: PaulDowneyImage,
    },
    {
        category: "Workshops",
        title: "All-Investigator Meeting and Research Showcase Event",
        speaker: "CENTMED Researchers",
        date: "October 26, 2026",
        university: "NYU Abu Dhabi, A6, StartAD Meeting Room",
        image: investigatorMeetingFlyer,
        detailsLink: "/events",
    },
    {
        category: "Workshops",
        title: "Medical Devices and Implants Workshop",
        speaker: "NYU Langone Health + NYU Tandon + NYU Abu Dhabi (NYUAD)",
        date: "March 18, 2026",
        university: "19 Washington Square North, New York",
        image: nyHeroImage, // replace if you have a dedicated workshop image
        detailsLink: "/events/medical-devices-implants-workshop-2026-03-18",
    },
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
];

// changed the block below entirely T^T
const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const modalRef = React.useRef(null);

    const openSchedule = (event) => {
        setSelectedEvent(event);
    };

    const closeSchedule = () => {
        modalRef.current?.close();
    };

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        if (selectedEvent) {
            if (!modal.open) modal.showModal();
        } else if (modal.open) {
            modal.close();
        }
    }, [selectedEvent]);

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        const handleClose = () => setSelectedEvent(null);
        modal.addEventListener("close", handleClose);

        return () => modal.removeEventListener("close", handleClose);
    }, []);

    return (
        <div className="events-container">
            <ScrollProgress />

            <h1 className="events-title">Events</h1>

            <div className="events-list">
                {eventData.map((event, index) => (
                    <motion.div
                        key={index}
                        className="event-card"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                    >
                        <div className="event-info">
                            <p className="event-category">
                                {event.category}
                            </p>

                            <h2 className="event-title">
                                {event.title}
                            </h2>

                            <p className="event-speaker">
                                <Users size={24} color="var(--purple)" />
                                {event.speaker}
                            </p>

                            <p className="event-university">
                                <University size={24} color="var(--purple)" />
                                {event.university}
                            </p>

                            <p className="event-date">
                                <CalendarDays size={24} color="var(--purple)" />
                                {event.date}
                            </p>

                            <div className="event-actions">
                                {event.detailsLink && (
                                    <Link
                                        to={event.detailsLink}
                                        className="section-button"
                                    >
                                        View details
                                    </Link>
                                )}

                                {event.abstract && (
                                    <button
                                        type="button"
                                        className="event-schedule-button"
                                        onClick={() => openSchedule(event)}
                                    >
                                        <CalendarDays size={19} />
                                        View More Information
                                    </button>
                                )}
                            </div>
                        </div>

                        <img
                            className="event-image"
                            src={event.image}
                            alt={event.speaker}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Schedule pop-up modal */}
            <dialog
                ref={modalRef}
                className="schedule-modal"
                aria-labelledby="schedule-modal-heading"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        closeSchedule();
                    }
                }}
            >
                {selectedEvent && (
                    <div className="schedule-modal-content">
                        <div className="schedule-modal-header">
                            <div>
                                <p className="schedule-modal-category">
                                    CENTMED Seminar & Campus Visit
                                </p>

                                <h2 id="schedule-modal-heading">
                                    {selectedEvent.title}
                                </h2>
                                
                                <p className="schedule-modal-talk-subtitle">
                                    {selectedEvent.subtitle}
                                </p>
                                
                                <p className="schedule-modal-subtitle">
                                    {selectedEvent.speaker}
                                    {" | "}
                                    {selectedEvent.date}
                                </p>
                                
                                <h3 className="schedule-modal-agenda-heading">
                                    Event Schedule
                                </h3>
                            </div>

                            {/* Visible X close button */}
                            <button
                                type="button"
                                className="schedule-modal-close"
                                onClick={closeSchedule}
                                aria-label="Close schedule"
                            >
                                <X size={24} strokeWidth={2.5} />
                            </button>
                        </div>             
                        <div className="schedule-modal-body">
                            <div className="event-abstract">
                                <h3>Abstract</h3>
                                <p>{selectedEvent.abstract}</p>
                            </div>
                        </div>
                        {/*
                        <div className="schedule-modal-body">
                            {selectedEvent.schedule?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`schedule-row ${
                                        item.highlight
                                            ? "schedule-row-highlight"
                                            : ""
                                    }`}
                                >
                                    <div className="schedule-row-time">
                                        <Clock3 size={18} />
                                        <span>{item.time}</span>
                                    </div>

                                    <div className="schedule-row-details">
                                        <h3>{item.activity}</h3>

                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}

                                        <div className="schedule-row-location">
                                            <MapPin size={16} />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                )}
            </dialog>
        </div>
    );
};

export default Events;

