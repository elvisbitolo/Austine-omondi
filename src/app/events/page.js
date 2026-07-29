import { SITE } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "Events | Austine Omondi Campaign",
  description:
    "Upcoming campaign events, rallies, and community meetings for Austine Omondi's MCA campaign in Karura Ward.",
};

const UPCOMING_EVENTS = [
  {
    title: "Karura Ward Community Baraza",
    date: "Coming Soon",
    location: "Karura Ward",
    description:
      "A community engagement forum to discuss the vision and priorities for Karura Ward. All residents are welcome.",
  },
  {
    title: "Youth Empowerment Forum",
    date: "Coming Soon",
    location: "TBD",
    description:
      "A forum focused on youth skills development, entrepreneurship, and employment opportunities.",
  },
  {
    title: "Environmental Clean-Up Drive",
    date: "Coming Soon",
    location: "Karura Ward",
    description:
      "Join us for a community clean-up and tree-planting exercise. Let's keep Karura clean and green.",
  },
];

export default function Events() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Campaign Events</h1>
          <p className="section-subtitle">
            Join us on the ground as we take the message of change to every
            corner of Karura Ward.
          </p>
        </div>
      </section>

      <section className={`section ${styles.eventsList}`}>
        <div className="container">
          {UPCOMING_EVENTS.length > 0 ? (
            <div className={styles.grid}>
              {UPCOMING_EVENTS.map((event, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardDate}>
                    <span className={styles.dateLabel}>{event.date}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{event.title}</h3>
                    <p className={styles.cardLocation}>{event.location}</p>
                    <p className={styles.cardDesc}>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>No Upcoming Events</p>
              <p className={styles.emptyDesc}>
                Events are being planned. Check back soon or contact us for more
                information.
              </p>
            </div>
          )}

          <div className={styles.contactPrompt}>
            <p>
              Want to invite Austine to your event or community meeting?{" "}
              <a href={`mailto:${SITE.email}`} className={styles.emailLink}>
                Send us an email
              </a>{" "}
              or call{" "}
              <a href={`tel:${SITE.phone[0]}`} className={styles.emailLink}>
                {SITE.phone[0]}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
