import Link from "next/link";
import {
  FaHandsHelping,
  FaShoppingBag,
  FaTruck,
  FaPrint,
  FaBullhorn,
  FaPalette,
  FaMoneyBillWave,
  FaGift,
  FaMobileAlt,
  FaUniversity,
  FaQuoteLeft,
  FaHandHoldingHeart,
} from "react-icons/fa";
import AnimateOnScroll from "../_components/AnimateOnScroll";
import CopyField from "../_components/CopyField";
import WhatsAppGroupCTA from "../_components/WhatsAppGroupCTA";
import { SITE, DONATE, SUPPORT_CHANNELS } from "../_lib/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "Support the Movement | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Support Austine Omondi's campaign for Karura Ward MCA — volunteer, donate via M-Pesa or KCB bank, or contribute goods and services in kind.",
  alternates: { canonical: "/support" },
};

const CHANNEL_ICONS = [
  FaHandsHelping,
  FaShoppingBag,
  FaTruck,
  FaPrint,
  FaBullhorn,
  FaPalette,
  FaMoneyBillWave,
  FaGift,
];

export default function Support() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Support the Movement</h1>
          <p className="section-subtitle">{DONATE.intro}</p>
        </div>
      </section>

      <AnimateOnScroll>
        <section className={`section ${styles.channels}`}>
          <div className="container">
            <h2 className="section-title">Ways to Support</h2>
            <p className="section-subtitle">
              Every contribution, big or small, brings us one step closer to the
              community we all desire.
            </p>
            <div className={styles.channelsGrid}>
              {SUPPORT_CHANNELS.map((channel, i) => {
                const Icon = CHANNEL_ICONS[i];
                return (
                  <AnimateOnScroll
                    key={channel.title}
                    className="anim-visible-scale"
                  >
                    <div
                      className={styles.channelCard}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className={styles.channelIcon}>
                        <Icon />
                      </div>
                      <h3 className={styles.channelTitle}>{channel.title}</h3>
                      <p className={styles.channelDesc}>{channel.description}</p>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className={`section ${styles.donate}`}>
          <div className="container">
            <h2 className="section-title">Make a Contribution</h2>
            <p className="section-subtitle">
              Choose the channel that works best for you. Your generosity powers
              the movement.
            </p>
            <div className={styles.donateGrid}>
              <div className={styles.donateCard}>
                <div className={styles.donateHeader}>
                  <div className={styles.donateIcon}>
                    <FaMobileAlt />
                  </div>
                  <div>
                    <h3 className={styles.donateTitle}>M-Pesa</h3>
                    <p className={styles.donateSubtitle}>Send Money</p>
                  </div>
                </div>
                <CopyField label="M-Pesa Number" value={DONATE.mpesa} />
              </div>

              <div className={styles.donateCard}>
                <div className={styles.donateHeader}>
                  <div className={styles.donateIcon}>
                    <FaUniversity />
                  </div>
                  <div>
                    <h3 className={styles.donateTitle}>Bank Transfer</h3>
                    <p className={styles.donateSubtitle}>{DONATE.bank.name}</p>
                  </div>
                </div>
                <div className={styles.bankFields}>
                  <CopyField label="Paybill Number" value={DONATE.bank.paybill} />
                  <CopyField
                    label="Account Number"
                    value={DONATE.bank.account}
                  />
                </div>
              </div>
            </div>
            <p className={styles.donateNote}>{DONATE.note}</p>
            <div className={styles.donateAction}>
              <Link href="/contact" className="btn btn-primary">
                Or Talk to the Team
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className={`section ${styles.quote}`}>
          <div className="container">
            <div className={styles.quoteCard}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <blockquote className={styles.quoteText}>{DONATE.quote}</blockquote>
              <p className={styles.quoteSignature}>{DONATE.signature}</p>
              <p className={styles.quoteRole}>{DONATE.role}</p>
              <p className={styles.quoteSlogan}>
                <FaHandHoldingHeart className={styles.quoteSloganIcon} />
                {DONATE.slogan}
              </p>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <WhatsAppGroupCTA />
    </>
  );
}
