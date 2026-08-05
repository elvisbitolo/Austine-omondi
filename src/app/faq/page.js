import AnimateOnScroll from "../_components/AnimateOnScroll";
import { SITE, SOCIAL } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "FAQ | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Frequently asked questions about Austine Omondi's campaign for MCA of Karura Ward — what an MCA does, his manifesto, events, volunteering, and how to contact the campaign.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    q: "Who is Austine Omondi?",
    a: "Austine Omondi is an MCA aspirant for Karura Ward in the 2027 Kenyan General Elections. He is an educator, youth leader, environmentalist, and philanthropist, and the founder of Brilliant Angels CBO in Githogoro.",
  },
  {
    q: "What is an MCA?",
    a: "An MCA is a Member of County Assembly — the elected representative of a ward in the county assembly. Austine is running to represent Karura Ward.",
  },
  {
    q: "When are the Kenyan General Elections?",
    a: "The Kenyan General Elections are scheduled for August 2027. Austine is contesting the MCA seat for Karura Ward.",
  },
  {
    q: "Where is Karura Ward?",
    a: "Karura Ward is located in Nairobi, within Westlands Constituency.",
  },
  {
    q: "What is in Austine's manifesto?",
    a: "His manifesto is built on eight pillars: education and youth empowerment, environmental conservation, healthcare and social welfare, infrastructure and development, youth jobs and SME support, transparency and accountability, sports and talent, and community security.",
  },
  {
    q: "How can I volunteer for the campaign?",
    a: "You can sign up on the Contact page or join the official WhatsApp group to get involved. Every hand counts!",
  },
  {
    q: "What events are coming up?",
    a: "Check the Events page for the latest campaign events, rallies, and community activities such as the National ID Registration Drive.",
  },
  {
    q: "How do I contact the campaign team?",
    a: `Call ${SITE.phone[0]} or ${SITE.phone[1]}, or email ${SITE.email}. Full details are on the Contact page.`,
  },
  {
    q: "How do I join the WhatsApp group?",
    a: "Tap the green 'Join WhatsApp Group' button on the home or contact page to join the official campaign group.",
  },
  {
    q: "What is Brilliant Angels CBO?",
    a: "Brilliant Angels is a community-based organisation founded and chaired by Austine, operating in Githogoro. It runs a community school, the Sulwe Mentorship & Scholarship programme, and the Adopt a Child initiative.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Quick answers about the campaign, the manifesto, and how to get
            involved.
          </p>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className={styles.list}>
            {FAQS.map((faq, i) => (
              <AnimateOnScroll key={i} className="anim-visible-scale">
                <details className={styles.item} open={i === 0}>
                  <summary className={styles.question}>{faq.q}</summary>
                  <p className={styles.answer}>{faq.a}</p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>

          <div className={styles.prompt}>
            <p>
              Still have a question?{" "}
              <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Join the WhatsApp group
              </a>{" "}
              or{" "}
              <a href="/contact" className={styles.link}>
                send us a message
              </a>.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
