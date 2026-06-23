"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Brand Identity", href: "/services/branding" },
  { name: "Social Media", href: "/services/social-media-management" },
  { name: "Web Design", href: "/services/web-experiences" },
  { name: "Performance Marketing", href: "/services/digital-growth" },
  { name: "UI/UX Design", href: "/services/product-design" },
  { name: "SEO", href: "/services/seo" },
];

const socialLinks = [
  { name: "Instagram", href: "#", iconClass: "fa-brands fa-instagram" },
  { name: "LinkedIn", href: "#", iconClass: "fa-brands fa-linkedin" },
  { name: "WhatsApp", href: "#", iconClass: "fa-brands fa-whatsapp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /* Outer wrapper — provides the "floating" margin gap around the card */
    <div
      style={{
        padding: "clamp(12px, 2vw, 28px)",
        background: "transparent",
        fontFamily: "'Inter', 'Outfit', sans-serif",
      }}
    >
      <footer
        style={{
          background: "#0033cc",
          borderRadius: 28,
          overflow: "hidden",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* ── Subtle noise / dot texture overlay ─── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Main content ─────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(32px, 5vw, 64px) clamp(28px, 5vw, 60px) 0",
          }}
        >
          {/* 4-column grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]"
            style={{
              gap: "clamp(24px, 4vw, 60px)",
              marginBottom: "clamp(40px, 6vw, 72px)",
            }}
          >
            {/* Col 1 — Brand statement */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Link href="/" style={{ display: "inline-block" }}>
                <img
                  src="/assets/nav-logo.png"
                  alt="Vyce"
                  style={{ height: 56, width: "auto", filter: "brightness(0) invert(1)" }}
                />
              </Link>

              <p
                style={{
                  fontSize: "clamp(0.78rem, 0.9vw, 0.88rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: 280,
                  fontWeight: 450,
                }}
              >
                Strategy. Creativity. Results. All in one place.
                <br /><br />
                903 Luxuria Business Hub,<br />
                Surat, Gujarat, India.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                {socialLinks.map(({ name, href, iconClass }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      transition: "background 0.2s, color 0.2s, border-color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                    }}
                  >
                    <i className={iconClass} style={{ fontSize: "15px" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h5
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                }}
              >
                Navigation
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s, padding-left 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <h5
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 20,
                }}
              >
                Services
              </h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        transition: "color 0.2s, padding-left 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "4px";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter + Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h5
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 12,
                  }}
                >
                  Join our list
                </h5>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 14,
                    lineHeight: 1.6,
                    fontWeight: 450,
                  }}
                >
                  Latest campaigns, strategies &amp; industry moves — delivered straight to you.
                </p>
                <form
                  style={{ position: "relative", display: "flex", alignItems: "center" }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 999,
                      padding: "10px 46px 10px 16px",
                      fontSize: "0.82rem",
                      color: "#fff",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.5)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.18)";
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    style={{
                      position: "absolute",
                      right: 4,
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#fff",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0033cc",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>

              <div style={{ paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                  hello@vycedigitalmedia.com<br />
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>
          </div>


          {/* ── Giant VYCE wordmark ──────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1rem, 3vw, 3rem)",
              lineHeight: 0.85,
              userSelect: "none",
              pointerEvents: "none",
              overflow: "hidden",
              paddingBottom: "1rem", // Lifted up so it's fully visible
            }}
          >
            <span
              style={{
                fontSize: "clamp(5rem, 15vw, 15rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "rgba(255,255,255,0.07)",
                display: "block",
                fontFamily: "'Cinzel Decorative', serif",
                lineHeight: 1,
              }}
            >
              VYCE
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
