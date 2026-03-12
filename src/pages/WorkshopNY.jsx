import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Mail, Ticket, Users } from "lucide-react";
import "./WorkshopNY.css";

import workshopHero from "../assets/workshop_ny_header.png";

const GOOGLE_SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzzZaLM6ctpHCRQx2O2MaBQTDEoO2PSuE3pkwjRVUb786dlml9iig4s7CAzTN5PJXs6/exec";

const EVENT = {
  slug: "medical-devices-implants-workshop-2026-03-18",
  title: "Medical Device Innovation Workshop", 
  dates: "March 18, 2026",
  venue: "19 Washington Square North, New York, NY 1001",
  inviteLine: "Registration required",
  contactEmail: "nyuad.centmed.comms@nyu.edu",
  capacityNote:
    "Please register to receive logistics and any pre-workshop materials.\n\nLunch will be provided.",
};

const WorkshopNY = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    affiliation: "",
    role: "",
    comments: "", // NEW comment box
    consent: false,
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      emailOk &&
      form.affiliation.trim().length > 0 &&
      form.consent
    );
  }, [form]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setStatus({ state: "error", message: "Please complete the required fields." });
      return;
    }

    setStatus({ state: "submitting", message: "" });

    // Google Sheets submission via Apps Script Web App
    try {
      if (!GOOGLE_SHEETS_WEBAPP_URL || GOOGLE_SHEETS_WEBAPP_URL.includes("PASTE_")) {
        throw new Error("Google Sheets Web App URL is not set.");
      }

      const payload = {
        eventSlug: EVENT.slug,
        ...form,
        submittedAt: new Date().toISOString(),
      };

      // Apps Script Web Apps are most reliable with form-encoded + no-cors
      const body = new URLSearchParams({
        eventSlug: payload.eventSlug,
        submittedAt: payload.submittedAt,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        affiliation: payload.affiliation,
        role: payload.role,
        comments: payload.comments,
        consent: String(payload.consent),
      });
      
      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
      }); // In no-cors mode the response is opaque; if fetch didn't throw, assume success.

      setStatus({
        state: "success",
        message: "Registered! Check your email for confirmation and logistics.",
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        affiliation: "",
        role: "",
        comments: "",
        consent: false,
      });
    } catch (err) {
      // Fallback: localStorage (dev only)
      try {
        const key = `event_reg_${EVENT.slug}`;
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push({ ...form, submittedAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (_) {}

      setStatus({
        state: "success",
        message:
          "Registered (dev fallback). Google Sheet endpoint not reachable or not configured; saved locally in this browser.",
      });
    }
  };

  return (
    <div className="workshop-page">
      {/* HERO */}
      <section className="workshop-hero">
        <div className="workshop-hero-left">
          <img className="workshop-hero-image" src={workshopHero} alt="Workshop hero" />
        </div>

        <div className="workshop-hero-right">
          <div className="workshop-info-panel">
            <h1 className="workshop-title">{EVENT.title}</h1>

            <div className="workshop-meta">
              <p>
                <CalendarDays size={18} /> <span>{EVENT.dates}</span>
              </p>
              <p>
                <MapPin size={18} /> <span>{EVENT.venue}</span>
              </p>
              <p>
                <Ticket size={18} /> <span>{EVENT.inviteLine}</span>
              </p>

              <p className="workshop-contact">
                <Mail size={18} />
                <a href={`mailto:${EVENT.contactEmail}`}>{EVENT.contactEmail}</a>
              </p>
            </div>

            <div className="workshop-panel-note">{EVENT.capacityNote}</div>

            <a className="workshop-cta" href="#register">
              Register
            </a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="workshop-body">
        <div className="workshop-body-inner">
          {/* Overview full-width / full-screen card */}
          <motion.div
            className="workshop-body-card workshop-body-card--full"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h2>Overview</h2>
            {/* DESCRIPTION (only) */}
            <p>
              We invite you to attend our interdisciplinary workshop that brings together engineers,
              clinicians, and researchers from NYU Tandon, NYU Abu Dhabi, NYU Langone Health, and
              University of Michigan to explore the future of medical devices and implants. The
              workshop will focus on innovative approaches to glaucoma treatment and beyond,
              highlighting cutting-edge research in microfluidics, computational modeling, and
              translational device design. Through expert talks and discussions, participants will
              gain insight into how engineering and medicine can collaborate to improve patient
              outcomes. The discussion will also cover medical implants across ophthalmic,
              gastrointestinal, and neurological applications, fostering new connections and
              collaborations.
            </p>

            {/* PRESENTERS (only) */}
            <h3>Presenters</h3>
            <ul>
              <li>Iskender Sahin — NYU Tandon</li>
              <li>Rafael Song — NYU Abu Dhabi</li>
              <li>Andreas Hielscher — Department Head of Biomedical Engineering, NYU Tandon</li>
              <li>Alon Harris — Icahn School of Medicine</li>
              <li>Giovanna Guidoboni — University of Maine</li>
              <li>Manjool Shah — University of Michigan</li>
              <li>Nurbergen Aitmukhanbetov — NYU Abu Dhabi</li>
              <li>Shy Shoham — Director, Tech4Health Institute, NYU Langone</li>
              <li>Khalil Ramadi — NYU Abu Dhabi</li>
              <li>Sohmyung Ha — NYU Abu Dhabi</li>
            </ul>

            {/* AGENDA (only) */}
            <h3>Agenda</h3>
            <p><b>Wednesday, 18th March 2026 (EST)</b></p>

            <div className="agenda-table">
              <div className="agenda-row agenda-header">
                <div>Time</div>
                <div>Activity / Presentation</div>
              </div>

              <div className="agenda-row">
                <div>9:00 - 9:15 AM</div>
                <div>Welcome Remark by Iskender Sahin and Rafael Song</div>
              </div>
              {/* <div className="agenda-row">
                <div>9:15 - 9:30 AM</div>
                <div>Introduction of CENTMED, Rafael Song</div>
              </div> */}
              <div className="agenda-row">
                <div>9:15 - 10:00 AM</div>
                <div>Andreas Hielscher, Department Head of Biomedical Engineering, NYU Tandon</div>
                <div>Seeing the Invisible: Real-Time Vascular Imaging with Wearable Optical Tomography</div>
              </div>
              <div className="agenda-row">
                <div>10:00 - 10:30 AM</div>
                <div>Alon Harris, Icahn School of Medicine</div>
                <div>Intra-body power transfer for wearable devices</div>
              </div>
              <div className="agenda-row">
                <div>10:30 - 11:00 AM</div>
                <div>Coffee Break</div>
              </div>
              <div className="agenda-row">
                <div>11:00 - 11:30 AM</div>
                <div>Giovanna Guidoboni, University of Maine</div>
                {/* <div></div> add talk title*/}
              </div>
              <div className="agenda-row">
                <div>11:30 - 12:00 PM</div>
                <div>Manjool Shah, University of Michigan</div>
                <div>The GDD Revolution: From Refractory Cases to Primary Care</div>
              </div>
              <div className="agenda-row">
                <div>12:00 - 12:30 PM</div>
                <div>Nurbergen Aitmukhanbetov, NYUAD</div>
                <div>Development of a New Minimally Invasive Glaucoma Implant</div>
              </div>
              <div className="agenda-row">
                <div>12:30 - 2:00 PM</div>
                <div>Lunch</div>
              </div>
              <div className="agenda-row">
                <div>2:00 - 2:30 PM</div>
                <div>Shy Shoham, Director, Tech4Health Institute, NYU Langone</div>
                <div>Engineering at the interface: from Neurotech development to Tech4Health</div>
              </div>
              <div className="agenda-row">
                <div>2:30 - 3:00 PM</div>
                <div>Rafael Song, NYUAD</div>
                <div>Microphysiological Systems for Growing Organs and Organoids</div>
              </div>
              <div className="agenda-row">
                <div>3:00 - 3:30 PM</div>
                <div>Khalil Ramadi, NYUAD</div>
                <div>Devices you can eat: Speaking with the body through the gastrointestinal tract</div>
              </div>
              <div className="agenda-row">
                <div>3:30 - 4:00 PM</div>
                <div>Sefy Paulose Joshi, NYU Langone Health</div>
                <div>Under Pressure: The Evolution of Glaucoma Devices</div>
              </div>
              <div className="agenda-row">
                <div>4:00 - 4:30 PM</div>
                <div>Iskender Sahin, NYU Tandon</div>
                <div>Computational Study of Gene Therapy into the Retina</div>
              </div>
              <div className="agenda-row">
                <div>4:30 - 5:00 PM</div>
                <div>Break</div>
              </div>
              <div className="agenda-row">
                <div>5:00 - 6:00 PM</div>
                <div>
                  {/* <strong>Bridging the Bedside & the Bench: A MedTech Panel Discussion</strong> */}
                  <div>Bridging the Bedside & the Bench: A MedTech Panel Discussion</div>
                  <div>Panelists:</div>
                  <ul>
                    <li>Manjool Shah (Michigan)</li>
                    <li>Shy Shoham (NYU Langone)</li>
                    <li>Giovanna Guidobonni (Univ. of Maine)</li>
                    <li>Andreas Hielscher (NYU Tandon)</li>
                    <li>Sefy Paulose Joshi (NYU Langone)</li>
                  </ul>
                  <div>Moderator: Rafael Song (NYUAD)</div>
                </div>
              </div>
              <div className="agenda-row">
                <div>6:30 - 8:30 PM</div>
                <div>Dinner at Chez Nous at The Marlton Hotel</div>
              </div>
            </div>
          </motion.div>

          {/* Registration card */}
          <motion.div
            id="register"
            className="workshop-form-card"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          >
            <h2>Registration</h2>

            {status.state === "success" && <div className="workshop-alert success">{status.message}</div>}
            {status.state === "error" && <div className="workshop-alert error">{status.message}</div>}

            <form onSubmit={onSubmit} className="workshop-form">
              <div className="form-row">
                <div className="form-field">
                  <label>
                    First name <span>*</span>
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    autoComplete="given-name"
                  />
                </div>

                <div className="form-field">
                  <label>
                    Last name <span>*</span>
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-field">
                <label>
                  Email <span>*</span>
                </label>
                <input name="email" value={form.email} onChange={onChange} autoComplete="email" />
              </div>

              <div className="form-field">
                <label>
                  Affiliation <span>*</span>
                </label>
                <input name="affiliation" value={form.affiliation} onChange={onChange} />
              </div>

              <div className="form-field">
                <label>Role</label>
                <select name="role" value={form.role} onChange={onChange}>
                  <option value="">Select…</option>
                  <option value="faculty">Faculty</option>
                  <option value="clinician">Clinician</option>
                  <option value="postdoc">Postdoc</option>
                  <option value="phd">PhD / Graduate</option>
                  <option value="industry">Industry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* New Comment Box */}
              <div className="form-field">
                <label>Comments / Questions</label>
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={onChange}
                  rows={4}
                  placeholder="Anything we should know? (e.g., access needs, topics of interest, questions)"
                />
              </div>

              <div className="form-consent">
                <label className="checkbox">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} />
                  <span>
                    I agree to be contacted with workshop logistics and updates. <b>*</b>
                  </span>
                </label>
              </div>

              <button className="workshop-submit" type="submit" disabled={!isValid || status.state === "submitting"}>
                {status.state === "submitting" ? "Submitting…" : "Submit registration"}
              </button>

              <div className="workshop-form-footnote">Your data is used only for workshop administration.</div>

              {/* Optional: show where it is going */}
              <div className="workshop-form-footnote" style={{ marginTop: "0.5rem" }}>
                <b>Storage:</b> Google Sheet via Apps Script Web App (or local fallback during dev).
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopNY;
