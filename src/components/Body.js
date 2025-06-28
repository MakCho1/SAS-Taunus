import React from "react";
import Hero from "./Hero";
import "./Body.css";

const Body = () => {
  return (
    <main>
      <Hero />
      <div className="body-content">
        <h1>Willkommen bei SAS Taunus</h1>
        <p>Ihr Experte für professionelle Bau- und Renovierungsarbeiten.</p>
      </div>

      <section id="ueber-uns" className="about-us">
        <div className="about-content">
          <h2>Über uns</h2>
          <p>
            Willkommen bei <strong>SAS Taunus</strong> – Ihr
            zuverlässiger Partner für professionelle Renovierungs- und
            Bauarbeiten.
          </p>
          <p>
            Mit jahrelanger Erfahrung im Bereich{" "}
            <strong>Fliesenarbeiten, Innenausbau, Sanierung und mehr</strong>{" "}
            stehen wir für höchste Qualität und präzises Handwerk. Unsere
            Leidenschaft ist es, Ihre Wohn- und Geschäftsräume zu verschönern
            und funktional zu optimieren.
          </p>
          <p>
            Unser Team legt großen Wert auf{" "}
            <strong>maßgeschneiderte Lösungen</strong>, die sich genau an Ihre
            Wünsche anpassen. Egal ob ein neues Bad, stilvolle Bodenfliesen oder
            eine komplette Kernsanierung – wir setzen Ihre Ideen um!
          </p>
        </div>
      </section>

      <section id="leistungen" className="services">
        <h2>Unsere Leistungen</h2>
        <div className="service-grid">
          <div className="service-card">Innenausbau</div>
          <div className="service-card">Kernsanierung</div>
          <div className="service-card">Sanitär</div>
          <div className="service-card">Maler- und Streicharbeiten</div>
          <div className="service-card">Entrümpelung</div>
        </div>

        {/* 📍 Standortinformationen */}
        <div className="service-locations">
          <p>
            Unser Team ist in folgenden Regionen tätig:
            <strong>Bad-Homburg, Frankfurt, Northeim und Höxter</strong>. Egal
            ob Neubau, Renovierung oder Sanierung – wir sind Ihr kompetenter
            Partner vor Ort.
          </p>
          <p>
            Kontaktieren Sie uns für eine persönliche Beratung – wir verwandeln
            Ihre Ideen in Realität!
          </p>
        </div>
      </section>

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

        {/* 💬 WhatsApp & E-Mail Buttons */}
        <div className="contact-buttons">
          <a href="https://wa.me/4917662630868" target="_blank" className="whatsapp-button">
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