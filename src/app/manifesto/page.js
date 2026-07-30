import AnimateOnScroll from "../_components/AnimateOnScroll";
import { SITE } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "Manifesto | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Read Austine Omondi's manifesto and vision for Karura Ward — education, infrastructure, job creation, sports, security, and more.",
};

const PILLARS = [
  {
    title: "Education & Youth Empowerment",
    icon: "🎓",
    points: [
      "Lobby for a secondary school to be constructed in Cheleta",
      "Push for new and modern classrooms across Karura Ward",
      "Build empowerment centers in Karura Ward for youth and community",
      "Ensure equitable bursary distribution for all needy students",
      "Start a Karura Education Foundation to mobilize resources for students",
      "Lobby for a modest ECDE center to be built in Karura Ward",
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
      "Install street lights across Karura Ward for security and visibility",
      "Maintain a proper drainage system to prevent flooding",
      "Ensure regular road maintenance and improvements",
      "Advocate for reliable water and electricity supply",
      "Promote affordable housing initiatives",
    ],
  },
  {
    title: "Youth Empowerment & Job Creation",
    icon: "👥",
    points: [
      "Create job opportunities for youth in corporate sectors in Karura Ward",
      "Support local businesses and SMEs in the area",
      "Organize boda boda operators into structured Saccos for better earnings",
      "Support women-led businesses and cooperatives",
      "Establish platforms for youth participation in governance",
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
  {
    title: "Sports & Talent Development",
    icon: "⚽",
    points: [
      "Support local talents in sports and creative arts",
      "Lobby for a modern studio to be built in Karura Ward",
      "Support local football clubs and other sports in the area",
    ],
  },
  {
    title: "Security & Community Safety",
    icon: "🛡️",
    points: [
      "Install street lights in dark spots to improve security at night",
      "Work with local administration to strengthen community policing",
      "Establish neighborhood watch programs across the ward",
      "Support Nyumba Kumi initiative for better community security",
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
            A bold vision for a prosperous, inclusive, and sustainable Karura Ward.
          </p>
          <div className={styles.introText}>
            <p>
              I, <strong>{SITE.fullName}</strong>, stand before the good people
              of <strong>Karura Ward</strong> with a solemn pledge — to lead with
              integrity, serve with humility, and deliver with excellence.
            </p>
            <p>
              My manifesto is built on these core pillars that reflect the
              aspirations and needs of our community. Together, we will build a
              Karura Ward that works for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillars}`}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            {PILLARS.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} className="anim-visible-scale">
                <div className={styles.pillarCard} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.pillarIcon}>{pillar.icon}</div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <ul className={styles.pillarPoints}>
                    {pillar.points.map((point, j) => (
                      <li key={j} className={styles.pillarPoint}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
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
      </AnimateOnScroll>
    </>
  );
}
