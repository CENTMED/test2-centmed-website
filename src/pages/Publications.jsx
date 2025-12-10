import React, { useState } from "react";
import "./Publications.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

const Publications = () => {
    const [filter, setFilter] = useState("journal"); // Default: show journal

    const toggleFilter = (type) => {
        setFilter(type);
    };

    const publications = {
        journal: [
            {
                title: "A 3D-printed Flour-based Heater with Boron-Nitride-enhanced Thermal Response, Self-healing Capability, and Biodegradability",
                authors: "Binbin Guo, Jiawei Chen, Tianbiao Zeng, Keonghwan Oh, Hongqiao Qu, Jiaming Bai, and Sohmyung Ha",
                journal: "Journal of Materials Research and Technology",
                year: 2025,
                doi: "https://doi.org/10.1016/j.jmrt.2025.11.023",
            },
            {
                title: "Asynchronous Quadrature-phase Undersampling Technique for Wide-frequency Impedance Measurement",
                authors: "Soon-Jae Kweon, Uljad Berdica, Hyunwoo Park, Muhammad Abrar Akram, Minji Lee, and Sohmyung Ha",
                journal: "IEEE Transactions on Instrumentation and Measurement",
                year: 2025,
                doi: "https://doi.org/10.1109/TIM.2025.3600712",
            },
            {
                title: "An Ultra-low-power Amplifier-less Potentiostat IC Based on Digital Regulation Loop",
                authors: "Muhammad Abrar Akram, Aida Aberra, Soon-Jae Kweon, and Sohmyung Ha",
                journal: "IEEE Transactions on Biomedical Circuits and Systems",
                year: 2025,
                doi: "https://doi.org/10.1109/TBCAS.2025.3527652",
            },
            {
                title: "Passive intestinal microbiome sampling using an ingestible device with tortuous lattices.",
                authors: "Hanan Mohammed, Sadaf Usmani, Brij Bhushan, Anique Ahmad, Oraib Al-Ketan, Ahmed A. Shibl, Maylis Boitet, Devjoy Dev, Heba Naser, Aashish R. Jha, Khalil B. Ramadi",
                journal: "Cell Press",
                year: 2025,
                doi: "https://doi.org/10.1016/j.device.2025.100904",
            },
            {
                title: "Investigating the mechanism of ion concentration polarization within nanofluidic hydrogel membranes: experiment and simulation",
                authors: "Hiba Aljayyousi, Jongmin Kim, Serdal Kirmizialtin, and Yong-Ak Song",
                journal: "Advanced Materials Interfaces",
                year: 2025,
                doi: "https://doi.org/10.1002/admi.202401018",
            },
            {
                title: "Wirelessly powered ingestible capsule for optical stimulation of the gastrointestinal tract in rodents",
                authors: "Mohamed Elsherif, Rawan Badr El-Din, Zhansaya Makhambetova, Heba Naser, Maylis Boitet, Rahul Singh, Keonghwan Oh, Revathi Sukesan, Sohmyung Ha, and Khalil B. Ramadi",
                journal: "Advanced Material Technologies",
                year: 2025,
                doi: "https://doi.org/10.1002/admt.202500957",
            },
            {
                title: "3D-printed optogenetic neural probe integrated with microfluidic tube for opsin/drug delivery",
                authors: "Revathi Sukesan, Mohsin Mohammed, Keonghwan Oh, Malvika Sharma, Dipesh Chaudhury, and Sohmyung Ha",
                journal: "Scientific Reports ",
                year: 2025,
                doi: "https://doi.org/10.1038/s41598-025-13654-4",
            },
            {
                title: "A modular and reconfigurable microfluidic device for culturing spheroids under continuous perfusion",
                authors: "Hiba Aljayyousi, Sarah Sahloul, Ajymurat Orozaliev, Navajit Baban, Duc-Anh Van, Amani Al Nuairi, Pauline John, Azhar Zam, Piergiorgio Percipalle, and Yong-Ak Song",
                journal: "APL Bioengineering ",
                year: 2025,
                doi: "https://doi.org/10.1063/5.0262536 ",
            },
            {
                title: "MechanoBioCAD: A Generalized Semi-Automated Computational Tool for Mechanobiological Studies",
                authors: "N. Baban, C. Stubbs, Y.-A. Song",
                journal: "Lab on a Chip",
                year: 2025,
                doi: "https://doi.org/10.1039/D4LC00843J",
            },
            {
                title: "Investigating the Mechanism of Ion Concentration Polarization within Nanofluidic Hydrogel Membranes: Experiment and Simulation",
                authors: "H. Aljayyousi, J. Kim, S. Kirmizialtin, Y.-A. Song",
                journal: "Advanced Materials Interfaces",
                year: 2025,
                doi: "https://doi.org/10.1002/admi.202401018",
            },
        ],
        conference: [
            {
                title: "A Modular and Reconfigurable Microfluidic Device for Culturing Spheroids Under Continuous Perfusion",
                authors: "H. Aljayyousi, S. Sahloul, A. Orozaliev, N. Baban, A. Al Nuairi, P. John, A. Zam, P. Percipalle, Y.-A. Song",
                conference: "Northeast Bioengineering Conference 2025",
                date: "April 3-4, 2025",
                location: "Brooklyn, NY",
                doi: "", //need link
            },
            {
                title: "A 0.62 μW/sensor 82 fps Time-to-Digital Impedance Measurement IC with Unified Excitation/Readout Front-end for Large-Scale Piezo-Resistive Sensor Array",
                authors: "Jiayang Li, Qingyu Zhang, Sohmyung Ha, Dai Jiang, Andreas Demosthenous, and Yu Wu",
                conference: "IEEE International Solid-State Circuits Conference (ISSCC)",
                date: "February 15-19, 2026",
                location: "San Francisco, CA, USA",
                doi: "https://arxiv.org/abs/2510.13682",
            },
            {
                title: "3D-printed Optogenetic Device with a Recording-channel-embedded Waveguide",
                authors: "Keonghwan Oh and Sohmyung Ha",
                conference: "International Conference on Solid-State Sensors, Actuators and Microsystems (Transducers)",
                date: "June 29 - 3, 2025",
                location: "Orlando, FL, USA",
                doi: "", //need link
            },
            {
                title: "Sleep Stage Classification with CNN-Transformer-combined Structure Using Single-Channel Raw ECG",
                authors: "Moogyeom Kim, Seokjae Lee, Sohmyung Ha, Soon-Jae Kweon, and Minji Lee",
                conference: "47th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC)",
                date: "July 14-17, 2025",
                location: "Copenhagen, Denmark",
                doi: "", //need link
            },
        ],
    };

    return (
        <div className="publications-container">
            <ScrollProgress />
            <h1 className="publications-title">Publications</h1>

            <div className="filter-container">
                <button
                    className={`filter-btn ${filter === "journal" ? "active" : ""}`}
                    onClick={() => toggleFilter("journal")}
                >
                    Journal
                </button>
                <button
                    className={`filter-btn ${filter === "conference" ? "active" : ""}`}
                    onClick={() => toggleFilter("conference")}
                >
                    Conference
                </button>
            </div>

            <section className="publications-list">
                {filter === "journal" && (
                    <div className="card-container">
                        {publications.journal.map((pub, index) => (
                            <div key={index} className="publication-card">
                                <span className="pub-year">{pub.year}</span>
                                <h3>{pub.title}</h3>
                                <p className="pub-journal">{pub.journal}</p>
                                <hr className="pub-divider" />
                                <p className="pub-authors">{pub.authors}</p>
                                <div
                                    className="card-arrow"
                                    onClick={() => window.open(pub.doi, "_blank", "noopener,noreferrer")}
                                >
                                    &#8599;
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {filter === "conference" && (
                    <div className="card-container">
                        {publications.conference.map((pub, index) => (
                            <div key={index} className="publication-card">
                                <span className="pub-year">{pub.date.split(" ")[2]}</span>
                                <h3>{pub.title}</h3>
                                <p className="pub-journal">{pub.conference}</p>
                                <hr className="pub-divider" />
                                <p className="pub-authors">{pub.authors}</p>
                                <div
                                    className="card-arrow"
                                    onClick={() => window.open(pub.doi, "_blank", "noopener,noreferrer")}
                                >
                                    &#8599;
                                </div>
                            </div>

                        ))}
                    </div>
                )}
                <p></p>
                <p></p>
                <p></p>
            </section>
        </div>
    );
};

export default Publications;
