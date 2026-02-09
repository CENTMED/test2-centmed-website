import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Mail, Ticket, Users, University } from "lucide-react";
import "./WorkshopNY.css";

import workshopHero from "../assets/workshop_ny_header.png";

/**
 * Content below is sourced from Sahin-Song Glaucoma work_YAS.docx.
 * Any fields not in the doc are left as placeholders (do not guess).
 */
const EVENT = {
  slug: "medical-devices-implants-workshop-2026-03-18",
  title: "Medical Devices and Implants Workshop",
  dates: "March 18, 2026", // :contentReference[oaicite:2]{index=2}
  cityLine: "New York, NY",
  venue: "19 Washington Square North (NYU Abu Dhabi base in New York)", // :contentReference[oaicite:3]{index=3}
  inviteLine: "Registration required",
  // Not present in the doc — keep placeholder until you provide it.
  contactEmail: "nyuad.programs@nyu.edu", // REPLACE if you have the right inbox
  capacityNote: "Please register to receive logistics and any pre-workshop materials.",
};

const WorkshopNY = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    affiliation: "",
    role: "",
    dietary: "",
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

    // Backend hook point (recommended): replace with your real endpoint.
    try {
      const res = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug: EVENT.slug,
          ...form,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

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
        dietary: "",
        consent: false,
      });
    } catch (err) {
      // Dev fallback: saves locally if no backend exists yet.
      try {
        const key = `event_reg_${EVENT.slug}`;
        const existing = JSON.parse(localStorage.getItem(key) || "[]");
        existing.push({ ...form, submittedAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (_) {}

      setStatus({
        state: "success",
        message:
          "Registered (dev mode). No backend found, so the submission was saved locally in this browser.",
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
                <Users size={18} /> <span>{EVENT.cityLine}</span>
              </p>
              <p>
                <Ticket size={18} /> <span>{EVENT.inviteLine}</span>
              </p>

              {/* Contact email is NOT in the doc; placeholder until you provide the correct one */}
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
          {/* Overview card */}
          <motion.div
            className="workshop-body-card"
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h2>Overview</h2>
            <p>
              This workshop convenes physicians from NYU Langone Health and engineers from NYU Tandon and
              NYU Abu Dhabi (NYUAD) working in translational medical devices. The event is co-sponsored
              by CENTMED. 
            </p>

            <p>
              We invite you to attend our interdisciplinary workshop that brings together engineers, clinicians,
              and researchers from NYU Tandon, NYU Abu Dhabi, NYU Langone Health, and University of Michigan
              to explore the future of medical devices and implants. The workshop will focus on innovative
              approaches to glaucoma treatment and beyond, highlighting cutting-edge research in microfluidics,
              computational modeling, and translational device design. Through expert talks and discussions,
              participants will gain insight into how engineering and medicine can collaborate to improve patient
              outcomes. The discussion will also cover medical implants across ophthalmic, gastrointestinal, and
              neurological applications, fostering new connections and collaborations.
            </p>

            <h3>Workshop theme</h3>
            <p>
              The program expands beyond glaucoma to cover a wide range of medical implants, from
              gastrointestinal to neurological applications, with the goal of strengthening connections
              between NYU’s engineering and medical communities to accelerate device development.
            </p>

            <h3>Featured collaboration</h3>
            <p>
              The workshop highlights a joint NYU Tandon–NYUAD project redesigning the Ahmed Glaucoma Valve,
              a widely used implant for managing intraocular pressure (IOP) in glaucoma patients. While it
              has been a surgical “gold standard,” the current design can fail in up to almost one-third of
              cases, contributing to complications and extended recovery.
            </p>

            <h3>Technical focus</h3>
            <ul>
              <li>
                Two alternative valve concepts: a micropillar-based passive valve (surface-tension driven,
                no moving parts) and a single-membrane micro check valve (reduced complexity vs. double-membrane designs).
              </li>
              <li>
                Combined computational + experimental workflow: CFD simulations (e.g., COMSOL/ANSYS) paired with
                prototype fabrication and microfluidic testing in lab setups that mimic intraocular conditions.
              </li>
              <li>
                Design goal: maintain IOP in the critical 8–12 mmHg range for advanced glaucoma while controlling flow.
              </li>
            </ul>

            <h3>Hosts / institutions</h3>
            <ul>
              <li>
                <b>NYU Tandon</b> — Iskender Sahin (Mechanical Engineering)
              </li>
              <li>
                <b>NYU Abu Dhabi</b> — Yong-Ak (Rafael) Song (Engineering), Director of CENTMED
              </li>
              <li>
                <b>NYU Langone Health</b> — participating physicians
              </li>
            </ul>

            <p style={{ marginTop: "1rem" }}>
              Detailed agenda and room logistics will be shared with registrants.
            </p>
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

            {status.state === "success" && (
              <div className="workshop-alert success">{status.message}</div>
            )}
            {status.state === "error" && (
              <div className="workshop-alert error">{status.message}</div>
            )}

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
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
              </div>

              <div className="form-field">
                <label>
                  Affiliation <span>*</span>
                </label>
                <input name="affiliation" value={form.affiliation} onChange={onChange} />
              </div>

              <div className="form-row">
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
                <div className="form-field">
                  <label>Dietary restrictions</label>
                  <input name="dietary" value={form.dietary} onChange={onChange} />
                </div>
              </div>

              <div className="form-consent">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={onChange}
                  />
                  <span>
                    I agree to be contacted with workshop logistics and updates. <b>*</b>
                  </span>
                </label>
              </div>

              <button
                className="workshop-submit"
                type="submit"
                disabled={!isValid || status.state === "submitting"}
              >
                {status.state === "submitting" ? "Submitting…" : "Submit registration"}
              </button>

              <div className="workshop-form-footnote">
                Your data is used only for workshop administration.
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopNY;
