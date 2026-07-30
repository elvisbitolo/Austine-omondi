import Image from "next/image";
import { SITE } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "Events | Austine Omondi Campaign",
  description:
    "Upcoming campaign events, rallies, and community meetings for Austine Omondi's MCA campaign in Karura Ward.",
};

const ID_IMAGES = [
  "/gallery/id-registration-drive-1.jpg",
  "/gallery/id-registration-drive-2.jpg",
  "/gallery/id-registration-drive-3.jpg",
];

const UPCOMING_EVENTS = [
  {
    title: "National ID Registration Drive",
    date: "Today - July 30, 2026",
    location: "Karura Ward",
    description:
      "Austine Omondi is on the ground coordinating the National ID registration exercise. All residents who have not yet registered for their national ID are encouraged to come out and register.",
    images: ID_IMAGES,
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
                    {event.images && (
                      <div className={styles.eventImages}>
                        {event.images.map((src, j) => (
                          <Image
                            key={j}
                            src={src}
                            alt="ID registration drive"
                            width={400}
                            height={300}
                            className={styles.eventImg}
                          />
                        ))}
                      </div>
                    )}
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
