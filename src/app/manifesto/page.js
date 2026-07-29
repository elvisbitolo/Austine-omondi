import { SITE } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "Manifesto | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Read Austine Omondi's manifesto and vision for Karura Ward — education, youth empowerment, environment, healthcare, and infrastructure.",
};

const PILLARS = [
  {
    title: "Education & Youth Empowerment",
    icon: "🎓",
    points: [
      "Establish scholarship programs for needy students in Karura Ward",
      "Support early childhood development centers with learning materials",
      "Create youth mentorship and skills development programs",
      "Partner with educational institutions for talent development",
    ],
  },
  {
    title: "Environmental Conservation",
    icon: "🌿",
    points: [
      "Lead tree-planting initiatives across the ward",
      "Promote sustainable waste management practices",
      "Advocate for clean water and sanitation projects",
      "Support climate resilience and green energy adoption",
    ],
  },
  {
    title: "Healthcare & Social Welfare",
    icon: "🏥",
    points: [
      "Improve access to primary healthcare services",
      "Support community health volunteer programs",
      "Advocate for better medical supplies in local facilities",
      "Establish support programs for vulnerable members",
    ],
  },
  {
    title: "Infrastructure & Development",
    icon: "🏗️",
    points: [
      "Push for road improvements and street lighting",
      "Support market infrastructure for small businesses",
      "Advocate for reliable water and electricity supply",
      "Promote affordable housing initiatives",
    ],
  },
  {
    title: "Youth & Women Empowerment",
    icon: "👥",
    points: [
      "Create job and entrepreneurship opportunities for youth",
      "Support women-led businesses and cooperatives",
      "Establish platforms for youth participation in governance",
      "Champion gender equality and inclusion",
    ],
  },
  {
    title: "Transparency & Accountability",
    icon: "⚖️",
    points: [
      "Hold regular barazas and community feedback sessions",
      "Ensure transparent use of ward development funds",
      "Publish regular reports on projects and expenditures",
      "Be accessible and accountable to every resident",
    ],
  },
];

export default function Manifesto() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">My Manifesto</h1>
          <p className="section-subtitle">
            A bold vision for a prosperous, inclusive, and sustainable Karura
            Ward.
          </p>
          <div className={styles.introText}>
            <p>
              I, <strong>{SITE.fullName}</strong>, stand before the good people
              of <strong>Karura Ward</strong> with a solemn pledge — to lead with
              integrity, serve with humility, and deliver with excellence.
            </p>
            <p>
              My manifesto is built on six core pillars that reflect the
              aspirations and needs of our community. Together, we will build a
              Karura Ward that works for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillars}`}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <ul className={styles.pillarPoints}>
                  {pillar.points.map((point, i) => (
                    <li key={i} className={styles.pillarPoint}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <h2 className={styles.ctaTitle}>
            This is Our Moment
          </h2>
          <p className={styles.ctaDesc}>
            These promises are not just words — they are a contract with the
            people of Karura Ward. With your support, we will turn them into
            reality.
          </p>
          <div className={styles.ctaActions}>
            <a href={`tel:${SITE.phone[0]}`} className="btn btn-primary">
              Call {SITE.phone[0]}
            </a>
            <a href={`mailto:${SITE.email}`} className="btn btn-outline">
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
