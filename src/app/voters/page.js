import AnimateOnScroll from "../_components/AnimateOnScroll";
import { VOTER_DATA, POLLING_CENTERS, MAX_STATION_VOTERS } from "../_lib/voterData";
import styles from "./page.module.css";

export const metadata = {
  title: "Voter Data | Austine Omondi for MCA Karura Ward 2027",
  description:
    "Registered voters in Karura Ward, Westlands Constituency, Nairobi — 29,548 voters across 46 polling stations and 6 polling centres, from the IEBC 2022 register.",
  alternates: { canonical: "/voters" },
};

const fmt = (n) => n.toLocaleString("en-KE");

export default function Voters() {
  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Voter Data</h1>
          <p className="section-subtitle">
            Registered voters in {VOTER_DATA.ward} by polling station, from the
            official {VOTER_DATA.source}.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>{fmt(VOTER_DATA.registered)}</span>
              <span className={styles.statLabel}>Registered Voters</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{VOTER_DATA.stations}</span>
              <span className={styles.statLabel}>Polling Stations</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>{VOTER_DATA.centersCount}</span>
              <span className={styles.statLabel}>Polling Centres</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.breakdown}`}>
        <div className="container">
          <h2 className="section-title">Polling Stations</h2>
          <p className="section-subtitle">
            {VOTER_DATA.ward} · {VOTER_DATA.constituency} · {VOTER_DATA.county}
          </p>

          <div className={styles.centers}>
            {POLLING_CENTERS.map((center, i) => (
              <AnimateOnScroll key={center.name} className="anim-visible">
                <div className={styles.center}>
                  <div className={styles.centerHeader}>
                    <h3 className={styles.centerName}>{center.name}</h3>
                    <span className={styles.centerTotal}>
                      {fmt(center.total)} voters
                    </span>
                  </div>
                  <div className={styles.stationList}>
                    {center.stations.map((station) => (
                      <div key={station.code} className={styles.station}>
                        <span className={styles.stationCode}>{station.code}</span>
                        <div className={styles.barWrap}>
                          <div
                            className={styles.bar}
                            style={{
                              width: `${(station.voters / MAX_STATION_VOTERS) * 100}%`,
                            }}
                          />
                        </div>
                        <span className={styles.stationVoters}>
                          {station.voters}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <p className={styles.note}>
            Figures are from the {VOTER_DATA.source} for the {VOTER_DATA.year}{" "}
            General Election. Voter registration is ongoing, so current numbers
            may differ.
          </p>
        </div>
      </section>
    </>
  );
}
