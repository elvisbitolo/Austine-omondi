import Image from "next/image";
import AnimateOnScroll from "../_components/AnimateOnScroll";
import { SITE, EDUCATION, ACHIEVEMENTS } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "About Austine Omondi | MCA Aspirant Karura Ward 2027",
  description:
    "Learn about Austine Omondi — his background, education, achievements, and vision for Karura Ward.",
};

export default function About() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">About {SITE.fullName}</h1>
          <p className="section-subtitle">
            A proud son of Homabay, a resident of Karura, and a servant at heart.
          </p>
          <div className={styles.introGrid}>
            <AnimateOnScroll className="anim-visible-left">
              <div className={styles.introContent}>
                <h2 className={styles.introHeading}>Background</h2>
                <p>
                  Born in <strong>1996</strong> in <strong>Kojwach Ward</strong>,{" "}
                  <strong>Kabondo Kasipul</strong>, <strong>Homabay County</strong>
                  , Austine Omondi has always been driven by a passion for
                  education, community service, and leadership.
                </p>
                <p>
                  With roots in Homabay and a heart for Karura, he brings a unique
                  blend of grassroots understanding and professional expertise to
                  the table. His journey from the lakeside county to the political
                  landscape of Karura Ward is a testament to his dedication to
                  public service.
                </p>
                <ul className={styles.quickInfo}>
                  <li><strong>Full Name:</strong> {SITE.fullName}</li>
                  <li><strong>Year of Birth:</strong> {SITE.yearOfBirth}</li>
                  <li><strong>Home County:</strong> {SITE.homeCounty}</li>
                  <li><strong>Ward:</strong> {SITE.ward}</li>
                  <li><strong>Aspiring:</strong> MCA {SITE.aspiringWard} {SITE.year}</li>
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="anim-visible-right">
              <div className={styles.photoPlaceholder}>
                <div className={styles.photoBox}>
                  <Image
                    src="/logo.jpg"
                    alt={SITE.fullName}
                    width={200}
                    height={200}
                    className={styles.photo}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className={`section ${styles.education}`}>
          <div className="container">
            <h2 className="section-title">Education &amp; Training</h2>
            <p className="section-subtitle">
              Academic excellence and continuous professional development.
            </p>
            <div className={styles.eduList}>
              {EDUCATION.map((item, i) => (
                <AnimateOnScroll key={i} className="anim-visible-left">
                  <div className={styles.eduCard}>
                    <div className={styles.eduDot} />
                    <div>
                      <h3 className={styles.eduDegree}>{item.degree}</h3>
                      <p className={styles.eduDetails}>{item.details}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className={`section ${styles.achievements}`}>
          <div className="container">
            <h2 className="section-title">Achievements &amp; Roles</h2>
            <p className="section-subtitle">
              A life of service, leadership, and impact.
            </p>
            <div className={styles.achievementsGrid}>
              {ACHIEVEMENTS.map((item, i) => (
                <AnimateOnScroll key={item.title} className="anim-visible-scale">
                  <div className={styles.achievementCard}>
                    <h3 className={styles.achievementTitle}>{item.title}</h3>
                    <p className={styles.achievementDesc}>{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
