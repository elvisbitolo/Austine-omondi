import { FaTiktok, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SITE, SOCIAL } from "../_lib/constants";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Get in touch with Austine Omondi's campaign. Volunteer, ask questions, or share your ideas for Karura Ward.",
};

export default function Contact() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            Have a question, want to volunteer, or just want to share your ideas?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Contact Information</h2>

              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Phone</h3>
                <a href={`tel:${SITE.phone[0]}`} className={styles.infoValue}>
                  {SITE.phone[0]}
                </a>
                <a href={`tel:${SITE.phone[1]}`} className={styles.infoValue}>
                  {SITE.phone[1]}
                </a>
              </div>

              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Email</h3>
                <a href={`mailto:${SITE.email}`} className={styles.infoValue}>
                  {SITE.email}
                </a>
              </div>

              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Social Media</h3>
                <div className={styles.socialLinks}>
                  <a
                    href={SOCIAL.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="TikTok"
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={SOCIAL.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <h3 className={styles.infoLabel}>Location</h3>
                <p className={styles.infoValue}>
                  Karura Ward, {SITE.homeCounty}
                </p>
              </div>
            </div>

            <div className={styles.form}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <p className={styles.formDesc}>
                Or better yet, sign up to volunteer — every hand counts!
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
