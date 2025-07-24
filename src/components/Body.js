import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import {
  FaTools,
  FaPaintBrush,
  FaToilet,
  FaBoxes,
  FaDoorOpen,
} from "react-icons/fa";
import "./Body.css";

const Body = () => {
  return (
    <main>
      <Helmet>
        <title>
          SAS Taunus – Fliesenleger & Sanierung in Frankfurt, Bad Homburg,
          Höxter & Northeim
        </title>
        <meta
          name="description"
          content="Fliesenleger in Frankfurt, Bad Homburg, Höxter und Northeim für Sanierung, Innenausbau, Renovierung & Gebäudeservice – SAS Taunus bietet präzises Handwerk für Privat- und Geschäftsräume."
        />
        <meta
          name="keywords"
          content="Fliesenleger Frankfurt, Sanierung Höxter, Renovierung Bad Homburg, Innenausbau Northeim, Gebäudeservice Taunus"
        />
        <meta name="author" content="SAS Taunus" />
      </Helmet>

      <Hero />

      <div className="body-content">
        <h1>Willkommen bei SAS Taunus</h1>
        <p>
          Ihr Fachbetrieb für Fliesen, Sanierung und Renovierung in Frankfurt
          und Umgebung.
        </p>
      </div>

      {/* 🌟 Über uns */}
      <section id="ueber-uns" className="about-us">
        <div className="about-content">
          <h2>Über uns</h2>

          <p>
            Bei <strong>SAS Taunus</strong> erhalten Sie hochwertige Leistungen
            von Ihrem{" "}
            <strong>
              Fliesenleger in Frankfurt, Bad Homburg, Höxter und Northeim
            </strong>
            . Wir sind spezialisiert auf <strong>Sanierung</strong>,{" "}
            <strong>Innenausbau</strong> und <strong>Gebäudeservice</strong> –
            und setzen Ihre Ideen professionell um.
          </p>

          <p>
            Ob <strong>stilvolle Bodenfliesen</strong>, ein neues Badezimmer
            oder eine komplette <strong>Kernsanierung</strong> – wir arbeiten
            für <strong>Privatkunden</strong>, <strong>Vermieter</strong> und{" "}
            <strong>Gewerbebetriebe</strong> mit hohem Qualitätsanspruch.
          </p>

          <p>
            Unsere langjährige Erfahrung macht uns zum zuverlässigen
            Ansprechpartner für <strong>Sanierung und Innenausbau</strong> in{" "}
            <strong>Frankfurt</strong>, <strong>Bad Homburg</strong>,{" "}
            <strong>Höxter</strong> und <strong>Northeim</strong>.
          </p>
        </div>
      </section>

      {/* 🛠 Leistungen */}
      <section id="leistungen" className="services">
        <h2>Unsere Leistungen</h2>
        <div className="service-grid">
          <div className="service-card">
            <FaDoorOpen /> Innenausbau
          </div>
          <div className="service-card">
            <FaTools /> Kernsanierung
          </div>
          <div className="service-card">
            <FaToilet /> Sanitärinstallation
          </div>
          <div className="service-card">
            <FaPaintBrush /> Maler- & Streicharbeiten
          </div>
          <div className="service-card">
            <FaBoxes /> Entrümpelung
          </div>
        </div>

        <div className="service-locations">
          <p>
            Unsere Leistungen bieten wir in <strong>Frankfurt</strong>,{" "}
            <strong>Bad Homburg</strong>, <strong>Höxter</strong> und{" "}
            <strong>Northeim</strong> an. Egal ob{" "}
            <strong>Neubau, Renovierung oder Sanierung</strong> – wir beraten
            Sie persönlich und setzen Ihre Projekte zuverlässig um.
          </p>
          <p>
            Vertrauen Sie SAS Taunus als Ihren{" "}
            <strong>Fliesenleger-Partner in Frankfurt und Umgebung</strong>.
            Jetzt unverbindlich anfragen und Wohnträume verwirklichen!
          </p>
        </div>

        {/* 🧱 Projektbeispiele */}
        <div className="project-description">
          <p>
            Fliesenleger-Leistungen für moderne Bäder, z. B. in Frankfurt, Bad
            Homburg und Höxter
          </p>
          <p>
            Professioneller Innenausbau für Wohn- und Gewerbeobjekte – aktiv in
            Höxter, Northeim und Frankfurt
          </p>
          <p>
            Kernsanierung von Alt- und Neubauten – durchgeführt in Frankfurt,
            Northeim und Bad Homburg
          </p>
        </div>
      </section>

      {/* 📞 Kontakt */}
      <section id="kontakt" className="contact">
        <h2>Kontaktieren Sie uns</h2>

        <div className="contact-info">
          <p>
            <strong>Telefon:</strong> +49 176 62630868
          </p>
          <p>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:fliesenshah@gmail.com">fliesenshah@gmail.com</a>
          </p>
          <p>
            <strong>Adresse:</strong> Luisenstraße 130b, 61348 Bad Homburg
          </p>
        </div>

        <div className="contact-buttons">
          <a
            href="https://wa.me/4917662630868"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            WhatsApp Nachricht senden
          </a>
          <a href="mailto:fliesenshah@gmail.com" className="email-button">
            E-Mail schreiben
          </a>
        </div>
      </section>
    </main>
  );
};

export default Body;
