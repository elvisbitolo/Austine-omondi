import Link from "next/link";
import { FaTiktok, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SITE, SOCIAL, NAV_LINKS } from "../_lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>{SITE.name}</h3>
            <p className={styles.brandTagline}>{SITE.tagline}</p>
            <p className={styles.brandDesc}>
              Committed to transformative leadership and community development
              for Karura Ward.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <a href={`tel:${SITE.phone[0]}`} className={styles.link}>
                  {SITE.phone[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone[1]}`} className={styles.link}>
                  {SITE.phone[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={styles.link}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Follow</h4>
            <div className={styles.social}>
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
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} {SITE.name}. All rights reserved.</p>
          <p>Paid for by the Austine Omondi Campaign</p>
        </div>
      </div>
    </footer>
  );
}
