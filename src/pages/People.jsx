import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import "./People.css";
import ScrollProgress from "../components/ScrollProgress.jsx";

import RafaelSongImage from "../assets/RafaelSong_image.jpg";
import PanceNaumovImage from "../assets/PanceNaumov_image.jpg";
import MohdQasaimehImage from "../assets/MohdQasaimeh_image.jpg";
import KhalilRamadiImage from "../assets/KhalilRamadi_image.jpeg";
import DipeshChaudhuryImage from "../assets/DipeshChaudhury_image.jpg";
import SohmyungHaImage from "../assets/SohmyungHa_image.png";
import HusseinSaadiImage from "../assets/HusseinSaadi_image.png";
import FirasAlBadarinImage from "../assets/FirasAlBadarin_image.png";
import FlorianRoserImage from "../assets/FlorianRoser_image.png";
import SanjitMajhiImage from "../assets/SanjitMajhi_image.jpg";
import HananMohammedImage from "../assets/HananMohammed_image.png";
import PukarMaharjanImage from "../assets/PukarMaharjan_image.jpg";
import VegaImage from "../assets/Vega_image.jpg";
import AbdelHameedDabbourImage from "../assets/AbdelHameedDabbour_image.png";
import PrimImage from "../assets/Prim_image.jpg";
import AyoubGliaImage from "../assets/AyoubGlia_image.jpg";
import WaelOthmanImage from "../assets/WaelOthman_image.jpg";
import SajinaLalImage from "../assets/SajinaLal_image.png";
import CarlosAbrilImage from "../assets/CarlosAbril_image.png";
import JuanBarajasGamboaImage from "../assets/JuanBarajasGamboa_image.png";
import AndreImage from "../assets/Andre_image.jpg";
import NurbergenAitmukhanbetovImage from "../assets/Nurbergen_Aitmukhanbetov_image.jpg";
import SanzharKakenovImage from "../assets/SanzharKakenov_image.jpg";
import TheaHayekImage from "../assets/TheaHayekImage.png";


const sections = [
    {
        title: "PRINCIPAL INVESTIGATORS (PIs & Co-PIs)", people: [
            {
                name: "Yong-Ak (Rafael) Song",
                title: "PRINCIPAL INVESTIGATOR",
                description: "Yong-Ak (Rafael) Song received MEng degree in Mechanical Engineering from the RWTH Aachen University of Technology in 1993, and Ph.D. degree from the School of Mechanical Engineering, RWTH Aachen University in 1996. He was a senior research scientist at Korea Institute of Science and Technology (KIST) until 2001. He moved to Boston and worked at MIT until 2012. He is currently an associate professor in the Division of Engineering, New York University in Abu Dhabi (NYUAD) and holds a joint appointment in the Department of Chemical and Biomolecular Engineering, as well as in the Department Biomedical Engineering, Tandon School of Engineering at New York University in Brooklyn, NY. He is also the program head of the Bioengineering Program at NYUAD. His main research interests are on various aspects of micro- and nanoscale bioengineering including biosensors, point-of-care diagnostics, organ/organoid on a chip and biomimetics.",
                photo: RafaelSongImage
            },
            {
                name: "Khalil Ramadi",
                title: "CO- PRINCIPAL INVESTIGATOR",
                description: "Dr. Ramadi is an Assistant Professor of Bioengineering at NYUAD and Director of the Laboratory for Advanced Neuroengineering and Translational Medicine (LANTRN). He is also affiliated with NYU Langone Health and the Grossman School of Medicine. Prior to his faculty roles, he was an NIH F32 postdoctoral fellow at MIT and earned his PhD in Biomedical Engineering from MIT and Harvard Medical School. His research focuses on technologies for clinical challenges, including ingestible pills and implantable devices for drug delivery and neuromodulation. A board member and former co-Director of MIT Hacking Medicine, he helped launch 50+ companies raising over $250M, and has mentored dozens more through MIT programs. Named a TED Fellow, CIFAR Global Scholar, Forbes 30 Under 30, and MIT Technology Review Innovator Under 35 (MENA), his honors include the BMES Career Development Award and a NASA Aeronautics Scholarship.",
                photo: KhalilRamadiImage
            },
            {
                name: "Sohmyung Ha",
                title: "CO- PRINCIPAL INVESTIGATOR",
                description: "Sohmyung Ha received the BS and MS degrees in Electrical Engineering from KAIST, Korea and the M.S. and Ph.D. degrees in Bioengineering from University of California, San Diego, CA, USA. From 2006 to 2010, he worked at Samsung Electronics as an integrated circuit designer for commercial multimedia devices. Since 2016, he has been with New York University Abu Dhabi, where he is Associate Professor, and also with New York University, where he is Global Network Associate Professor. He currently serves as an associate editor of IEEE Transactions on Biomedical Circuits and Systems, IEEE Open Journal of Solid-State Circuits Society, and Frontiers in Electronics. He is a member of the Analog Signal Processing Technical Committee and the Biomedical and Life Science Circuits and Systems Technical Committee of the IEEE Circuits and Systems Society. He is also a member of the international technical program committee of the International Solid-State Circuits Conference (ISSCC).",
                photo: SohmyungHaImage
            },
            {
                name: "Mohammad Qasaimeh",
                title: "CO- PRINCIPAL INVESTIGATOR",
                description: "Dr. Mohammad A. Qasaimeh is an Associate Professor of Mechanical Engineering and Bioengineering at New York University Abu Dhabi (NYUAD), UAE, and a Global Network Associate Professor in the Mechanical and Aerospace Engineering and Biomedical Engineering Departments at NYU Tandon School of Engineering, NY, USA. He earned a PhD in Biomedical Engineering from McGill University in Montreal in 2013. During his PhD, he received several prestigious fellowships and awards, including the NSERC Postdoctoral Fellowship and the Alexander Graham Bell Graduate Scholarship. Before joining NYUAD, he was a Postdoctoral Research Associate at MIT and a Research Fellow at Harvard Medical School (Dana-Farber Cancer Institute). Since 2014, Dr. Qasaimeh has led the Advanced Microfluidics and Microdevices Laboratory (AMMLab) at NYUAD. His research focuses on developing microfluidic biochips and microdevices for point-of-care diagnostics and biomedical applications. His work has been published in peer-reviewed journals, including Small, Advanced Science, Advanced Materials Technologies, Microsystems & Nanoengineering, and Lab on a Chip.",
                photo: MohdQasaimehImage
            },
            {
                name: "Panče Naumov",
                title: "CO- PRINCIPAL INVESTIGATOR",
                description: "Panče Naumov is a full professor of chemistry with tenure at New York University Abu Dhabi (NYUAD), where he also serves as a Global Network Professor and Director of the NYUAD Center for Smart Engineering Materials (CSEM). He leads the Smart Materials Lab, recognized as the top research team in the UAE in chemistry and materials science. Naumov obtained his PhD from the Tokyo Institute of Technology in 2004 and has held research positions in Japan before joining NYUAD. With approximately 300 publications and over USD 15 million in funding, he has delivered around 400 presentations, mentoring more than 60 students since 2012. Naumov serves on editorial boards for several journals and holds leadership roles in various scientific organizations, including the founder of the UAE Chapter of the American Chemical Society, founder of the Emirates Crystallographic Society and a number of other roles. His accolades include multiple fellowships and prestigious awards, recognizing his exceptional contributions to the field and the UAE.",
                photo: PanceNaumovImage
            },
            {
                name: "Dipesh Chaudhury",
                title: "CO- PRINCIPAL INVESTIGATOR",
                description: "",
                photo: DipeshChaudhuryImage
            },

        ]
    },
    {
        title: "CCAD - CO-INVESTIGATORS",
        displayAsList: false,
        people: [
            {
                name: "Hussein Saadi, MD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Cardiology Department",
                photo: HusseinSaadiImage
            },
            {
                name: "Firas Al Badarin, MD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Respiratory Institute",
                photo: FirasAlBadarinImage
            },
            {
                name: "Florian Roser, MD, PhD",
                title: "CO-INVESTIGATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Heart, Vascular & Thoracic Institute",
                photo: FlorianRoserImage
            },

        ]
    },
    {
        title: "RESEARCH STAFF", people: [
            {
                name: "Sanjit Majhi",
                title: "RESEARCH STAFF",
                description: "Sanjit Manohar Majhi received his M.Sc. degree in Chemistry, in 2008, at Utkal University, India. He has worked as a researcher from 2009 to 2012, at IMMT, CSIR, Bhubaneswar, India. He received his Ph.D. degree in August 2017 from Jeonbuk National University (JBNU), South Korea. Then he worked as a Postdoctoral fellow at KAUST, Saudi Arabia (2018-2019) and Hanyang University, Seoul, South Korea (2019-2020). Then he was a Research Associate at United Arab Emirates University, UAE (2021-2023). He joined as a Research Associate at New York University, Abu Dhabi (NYUAD) in April 2023. He has published 40 papers with citations nearly 3285 and h-index of 29. He is interested in the synthesis of various nanostructures including core@shell NPs, MOFs, metal-oxide NPs, 2D MXene materials, and organic crystals. His current research focusses on 2D materials based flexible and wearable sensor for biosensing and cardiovascular diseases diagnosis.",
                photo: SanjitMajhiImage
            },
            {
                name: "Hanan Mohammed",
                title: "RESEARCH STAFF",
                description: "Hanan is postdoctoral research associate in the LANTRN Lab and possesses a multidisciplinary background that overlaps material science, biomedical & electrical engineering. She has extensive experience in clean room-based nanofabrication techniques, 3D printing, material characterization & imaging. Hanan pursued her PhD in Electrical Engineering from the Sensing, Magnetism & Microsystems (SMM) Group at King Abdullah University of Science & Technology (KSA) and prior to that obtained her Masters in Nanoscale Science & Technology from University of Leeds (UK). Hanan is certified in innovation & technology transfer from ASTP & Cornell University and has served as a mentor at several international hackathons such as MIT, Impact Hub UK, Teens in AI etc. She is passionate about science engagement & communication and has won several awards for it such as Falling Walls Lab, IET PATW etc.",
                photo: HananMohammedImage
            },
            {
                name: "Pukar Maharjan",
                title: "RESEARCH STAFF",
                description: "Pukar Maharjan is a researcher specializing in wearable electronics, electronic tattoos, biosensing, and energy-harvesting systems. His interdisciplinary expertise spans materials science, flexible electronics, and advanced fabrication techniques, enabling the development of innovative solutions for health monitoring and seamless human–device interaction. He is currently a Postdoctoral Associate under Prof. Sohmyung Ha at the Center for Translational Medical Devices (CENTMED) at NYU Abu Dhabi. Dr. Maharjan received his Ph.D. in Electronics Engineering from Kwangwoon University in Seoul, South Korea, where he also continued his work as a Postdoctoral Researcher. He further expanded his research at The University of Texas at Austin in the Department of Aerospace Engineering and Engineering Mechanics, working under the mentorship of Prof. Nanshu Lu. With a strong foundation in microfabrication, soft electronics, and system-level integration, Dr. Maharjan’s work focuses on the design and development of next-generation, non-invasive, and energy-efficient wearable medical devices tailored for personalized and preventative healthcare.",
                photo: PukarMaharjanImage
            },
            {
                name: "Heba Naser",
                title: "RESEARCH STAFF",
                description: "",
                photo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            },
            {
                name: "Vega Pradana Rachim",
                title: "RESEARCH STAFF",
                description: "Dr. Vega Pradana Rachim is a Research Scientist at the Integrated BioElectronics Laboratory, led by Prof. Sohmyung Ha, and the Research Center for Translational Medical Devices (CENTMED) at NYU Abu Dhabi. He earned his Ph.D. in Electronics Engineering in 2019 from Pukyong National University, South Korea, where he developed multimodal wrist-wearable biosensors for non-invasive smart healthcare, including cuffless blood pressure and glucose monitoring. He received the Researcher of the Year award (BK21 PLUS, 2017) and Best Paper Awards (IEEE ICASI, 2017; Korean Sensor Society, 2018). He continued at POSTECH, South Korea, in the Innovative Medical Solution Lab as Postdoctoral Researcher (2019–2021) and Research Assistant Professor (2021–2025), co-leading projects on biosensors, artificial pancreas systems, and diabetes algorithms with Prof. Sung-Min Park and CureStream. He received the PIURI Fellowship (2022–2024) and a Korean NRF grant (2020–2022). His current research focuses on wearable closed-loop therapeutic systems for sleep disorders, integrating neuromodulation, embedded AI, and digital twin modeling for personalized care.",
                photo: VegaImage
            },
            {
                name: "Parima Phowarasoontorn",
                title: "RESEARCH STAFF",
                description: "Prim is a Research Assistant with a degree in Mechanical Engineering from New York University Abu Dhabi. Her interest lies in the field of medical device technology and additive manufacturing. Prim is designing a medical device with improved fluid drainage efficacy to promote faster healing for post-surgical patients.",
                photo: PrimImage
            },
            {
                name: "Ayoub Glia",
                title: "RESEARCH STAFF",
                description: "Dr. Ayoub Glia holds a Master’s degree in Materials Science and Engineering from Masdar Institute of Science and Technology (Khalifa University), where he focused on advanced atomic force microscopy (AFM) techniques and materials characterization. He later earned his PhD in Mechanical Engineering from NYU Tandon School of Engineering, where he developed open microfluidic technologies for capturing and analyzing circulating tumor cells and pioneered the integration of AFM principles with microfluidic platforms. Currently a postdoctoral research associate at AMMLab, he works on cryopreservable paper-based 3D tumor models. Dr. Glia work resulted in granted patent, several published peer-reviewed journal articles—including a featured paper in Advanced Science—and several international conference proceedings. Dr. Glia served on the program committee of the MARSS2023 Conference, and was chairing the Early Engineers Research Forum at NYU Abu Dhabi, which he founded to promote inclusion and academic exchange.He is the recipient of multiple honors including the MIT Technology Review's Innovators Under 35 MENA (2022), the SkillUp 1st Prize (2022), Best Paper Application Award at MARSS 2024, and several NYUAD publication grants.",
                photo: AyoubGliaImage
            },
            {
                name: "André Fensterseifer Schmidt",
                title: "RESEARCH STAFF",
                description: "André is pursuing the opportunity to do translational research on medical technologies as a Post-Doctoral Associate at CENTMED. His current endeavor is to communicate closely with physicians and apply multi-physics modeling expertise to design and develop innovative medical devices — thus bridging engineering solutions and unmet clinical needs.His background includes fatigue testing of stent-grafts, cardiac mechanics simulation, and modeling of endovascular drug delivery from drug-eluting stents and drug-coated balloons. André has earned a B.Eng. in Mechanical Engineering from the Universidade Federal de Santa Catarina, Brazil, followed by a Ph.D. from the University of Glasgow, United Kingdom.",
                photo: AndreImage
            },
            {
                name: "Sanzhar Kakenov",
                title: "RESEARCH STAFF",
                description: "Sanzhar holds a Bachelor of Science in Biology with a specialization in Brain and Cognitive Science from New York University Abu Dhabi. His research primarily focuses on circadian neurobiology, with an emphasis on the mechanisms underlying rhythmic excitability in mammalian clock neurons within the suprachiasmatic nucleus. He has extensive experience with single-cell RNA sequencing, electrophysiology, and stereotaxic surgeries, complemented by a strong background in RNA transcriptomics, population genomics, and primary cell culture, including work with human umbilical mesenchymal stem cells. Sanzhar has presented his research at several scientific meetings, including the CGSB Symposium XIII, and was awarded the Excellent Presentation Award at the Molecular and Cellular Cognition Conference. At CENTMED, he is part of a collaborative project between the Micro- and Nanoscale Bioengineering Lab and the Laboratory of Neural Systems and Behaviour, where he investigates network phenotypes of Alzheimer’s disease and healthy human brain organoids using spatial scRNA-seq and electrophysiology.",
                photo: SanzharKakenovImage
            },
            {
                name: "Thea Hayek",
                title: "RESEARCH STAFF",
                description: "Thea Hayek holds a Bachelor of Science in Mechanical Engineering from New York University Abu Dhabi. Her work focuses on biomedical device development, combining computational modeling and experimental validation. She is currently working on the development of a minimally invasive glaucoma drainage implant, applying computational simulations and experimental testing to characterize fluid flow and device performance to optimize the implant design and surgical integration.",
                photo: TheaHayekImage
            },
        ]
    },
    {
        title: "ADMINISTRATION", people: [
            {
                name: "Sajina Lal",
                title: "CENTER MANAGER",
                description: "Sajina is an enthusiastic professional who stepped into the role of CENTMED's Center Manager recently, eager to inspire teams and drive meaningful results, the same as she performed in her previous role in the NYUAD engineering division since 2018. Along with an MBA degree in Operations Management and a Bachelor's degree in Polymer Chemistry, she will bring fresh perspectives and a commitment to fostering a positive work environment. She has previously worked with the Abu Dhabi Education Council and the Masdar Institute of Science & Technology and possesses excellent knowledge of higher education administration, university operations, policies and procedures.",
                photo: SajinaLalImage
            }
        ]
    },
    {
        title: "CCAD COLLABORATORS",
        displayAsList: false,
        people: [
            {
                name: "Carlos Abril",
                title: "COLLABORATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Develops cutting-edge therapeutic medical technologies.",
                photo: CarlosAbrilImage
            },
            {
                name: "Juan S. Barajas-Gamboa",
                title: "COLLABORATOR - CLEVELAND CLINIC ABU DHABI",
                // description: "Develops cutting-edge therapeutic medical technologies.",
                photo: JuanBarajasGamboaImage
            }
        ]
    },

    {
        title: "ADVISORY BOARD",
        displayAsList: true, // New flag to display as list 
        people: [
            {
                name: "Andreas Hielscher",
                title: "Advisory Board Member",
                description: "NYU Tandon School of Engineering, USA",
            },
            {
                name: "Christopher Lee",
                title: "Advisory Board Member",
                description: "Despierta Ventures (Venture capital firm), USA",
            },
            {
                name: "Giovanni Traverso",
                title: "Advisory Board Member",
                description: "MIT, Brigham and Women’s Hospital, USA",
            },
            {
                name: "Meena Subramanyam",
                title: "Advisory Board Member",
                description: "Takeda Pharmaceutical, USA",
            },
            {
                name: "Nicole Pamme",
                title: "Advisory Board Member",
                description: "Department of Chemistry, Stockholm University, Sweden",
            },
            {
                name: "Ali Bhagat",
                title: "Advisory Board Member",
                description: "National University of Singapore",
            },
            {
                name: "Sultan Haider",
                title: "Advisory Board Member",
                description: "Siemens Healthineers, Germany",
            },
            {
                name: "Matthew Kroh",
                title: "Advisory Board Member",
                description: "Cleveland Clinic Lerner College of Medicine, Cleveland, USA",
            }
        ]
    },
    {
        title: "ALUMNI", people: [
            {
                name: "Abdel-Hameed Dabbour",
                title: "RESEARCH STAFF ALUMNI",
                // description: "Abdel is a research professional with 10 years of experience in the field of medical devices, 5 of which with implantable devices. Abdel has worked on various devices, such as implantable brain sensors, devices used in ICUs and aortic stents. Abdel has a verifiable history of contributing directly to growth and expansion of several medical device companies in both industry and academia.",
                photo: AbdelHameedDabbourImage
            },
            {
                name: "Wael Othman",
                title: "RESEARCH STAFF ALUMNI",
                // description: "Wael Othman earned his Ph.D. in Mechanical Engineering from New York University in 2023. He is currently a Postdoctoral Research Associate in the Advanced Microfluidics and Microdevices Laboratory (AMMLab) at NYU Abu Dhabi. His research centers on developing systems and methods for tactile sensing in minimally invasive surgery. In addition to his research, he serves as the postdoctoral representative on the Engineering IDBEA Committee and as the Engineering Representative on the Postdoctoral Community Steering Committee. Wael’s work has been recognized with prestigious honors, including the Forbes 30 Under 30 and MIT Innovators Under 35 awards.",
                photo: WaelOthmanImage
            },
            {
                name: "Nurbergen Aitmukhanbetov",
                title: "RESEARCH STAFF ALUMNI",
                // description: "Nurbergen Aitmukhanbetov holds a Bachelor of Science in Mechanical Engineering from New York University Abu Dhabi. He specialized in Computational Fluid Dynamics (CFD), Finite Element Modeling (FEM), and fluid-structure interaction (FSI) simulations, and medical device design. His current research focuses on developing a next-generation glaucoma drainage implant, using computational analysis and experimental verifications to improve fluid control and optimize surgical procedures and postoperative outcomes. Nurbergen’s broader interests also include application of robotics, AI, and Machine Learning toward biomedical technologies.",
                photo: NurbergenAitmukhanbetovImage
            },
        ]
    }
];

const People = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const showModal = (person) => {
        setSelectedPerson(person);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPerson(null);
    };

    return (
        <div className="people-container">
            <ScrollProgress />
            <h1 className="people-title">People</h1>
            {sections.map((section, index) => (
                <div key={index} className="people-section">
                    <h2
                        className="section-title"
                        style={section.title === "PRINCIPAL INVESTIGATORS (PIs)" ? { marginTop: "2rem" } : {}}
                    >
                        {section.title}
                    </h2>

                    <div className="section-separator">
                        <div className="vertical-line"></div>
                        <div className="horizontal-line"></div>
                    </div>

                    {/* Check if section should be displayed as list or grid */}
                    {section.displayAsList ? (
                        <motion.div
                            className="investigators-list"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="list-container">
                                {section.people.map((person, personIndex) => (
                                    <div key={personIndex} className="list-item">
                                        <div className="bullet-point">•</div>
                                        <div className="investigator-info">
                                            <h3>{person.name}</h3>
                                            <p>{person.title}</p>
                                            {person.description && <p className="description">{person.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* Animate the people-grid from bottom to top */
                        <motion.div
                            className="people-grid"
                            initial={{ y: 50, opacity: 0 }} // Start from below and hidden
                            whileInView={{ y: 0, opacity: 1 }} // Move to its final position (top) and become visible
                            viewport={{ once: true, amount: 0.2 }} // Trigger animation once the section is 20% in view
                            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
                        >
                            {section.people.map((person, personIndex) => (
                                <div
                                    key={personIndex}
                                    className="researcher-card"
                                    onClick={() => showModal(person)}
                                >
                                    <img
                                        src={person.photo}
                                        alt={person.name}
                                        className="researcher-image"
                                    />
                                    <div className="researcher-info">
                                        <h3>{person.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Modal */}
                    {modalVisible && selectedPerson && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                {selectedPerson.photo && (
                                    <img
                                        src={selectedPerson.photo}
                                        alt={selectedPerson.name}
                                        className="modal-image"
                                    />
                                )}
                                <div className="modal-text">
                                    <h2>{selectedPerson.name}</h2>
                                    <h3>{selectedPerson.title}</h3>
                                    <p>{selectedPerson.description}</p>
                                    <button onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default People;
