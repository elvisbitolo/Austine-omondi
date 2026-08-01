import Image from "next/image";
import Link from "next/link";
import Countdown from "./_components/Countdown";
import AnimateOnScroll from "./_components/AnimateOnScroll";
import { SITE, ACHIEVEMENTS } from "./_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Image
              src="/logo.jpg"
              alt={SITE.fullName}
              width={96}
              height={96}
              className={styles.heroLogo}
              priority
            />
          </div>
          <p className={styles.heroPrefix}>Your Choice for Progress</p>
          <h1 className={styles.heroTitle}>
            {SITE.fullName}
            <span className={styles.heroTagline}>{SITE.tagline}</span>
          </h1>
          <p className={styles.heroDesc}>
            Dedicated to serving the people of Karura Ward with integrity,
            transparency, and transformative leadership.
          </p>
          <div className={styles.countdownWrap}>
            <p className={styles.countdownLabel}>Kenya General Elections 2027</p>
            <Countdown />
          </div>
          <div className={styles.heroActions}>
            <Link href="/manifesto" className="btn btn-primary">
              Read My Manifesto
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className={`section ${styles.about}`}>
          <div className="container">
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle">
              A man of the people, driven by purpose and a vision for a better
              Karura.
            </p>
            <div className={styles.aboutGrid}>
              <AnimateOnScroll className="anim-visible-left">
                <div className={styles.aboutCard}>
                  <h3>Background</h3>
                  <p>
                    Born in 1996 in Kojwach Ward, Kabondo Kasipul, Homabay County.
                    My journey from Homabay to Karura has been shaped by a deep
                    commitment to education, community service, and leadership.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll className="anim-visible-scale">
                <div className={styles.aboutCard}>
                  <h3>Education</h3>
                  <p>
                    BA in Peace Studies &amp; Conflict Resolution (Mount Kenya
                    University), Diploma in Counseling Psychology (Serein College),
                    and training in education management.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll className="anim-visible-right">
                <div className={styles.aboutCard}>
                  <h3>Mission</h3>
                  <p>
                    To bring progressive leadership, quality education support,
                    environmental sustainability, and youth empowerment to every
                    corner of Karura Ward.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <div className={styles.aboutAction}>
              <Link href="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className={`section ${styles.achievements}`}>
          <div className="container">
            <h2 className="section-title">Achievements &amp; Roles</h2>
            <p className="section-subtitle">
              A track record of service and leadership.
            </p>
            <div className={styles.achievementsGrid}>
              {ACHIEVEMENTS.map((item, i) => (
                <AnimateOnScroll key={item.title} className="anim-visible-scale">
                  <div className={styles.achievementCard} style={{ animationDelay: `${i * 0.1}s` }}>
                    <h3 className={styles.achievementTitle}>{item.title}</h3>
                    <p className={styles.achievementDesc}>{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className={`section ${styles.cta}`}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Together We Can Build a Better Karura</h2>
            <p className={styles.ctaDesc}>
              Your voice matters. Join the movement for change, progress, and
              transformative leadership in Karura Ward.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Volunteer With Us
              </Link>
              <Link href="/events" className="btn btn-outline">
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
