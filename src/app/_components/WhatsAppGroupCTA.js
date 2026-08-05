import { FaWhatsapp } from "react-icons/fa";
import { SOCIAL } from "../_lib/constants";
import styles from "./WhatsAppGroupCTA.module.css";

export default function WhatsAppGroupCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <FaWhatsapp className={styles.icon} />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Join the Official WhatsApp Group</h2>
            <p className={styles.desc}>
              Get updates on rallies, registration drives, volunteer
              opportunities and campaign news delivered straight to your phone.
            </p>
          </div>
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Join Group
          </a>
        </div>
      </div>
    </section>
  );
}
