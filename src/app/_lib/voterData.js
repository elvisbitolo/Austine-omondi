export const VOTER_DATA = {
  ward: "Karura Ward",
  county: "Nairobi City County",
  constituency: "Westlands Constituency",
  year: 2022,
  registered: 29548,
  stations: 46,
  centersCount: 6,
  source: "IEBC 2022 gazetted Register of Voters",
};

export const POLLING_CENTERS = [
  {
    name: "City Park Market",
    total: 3088,
    stations: [
      { code: "047274136801401", voters: 618 },
      { code: "047274136801402", voters: 618 },
      { code: "047274136801403", voters: 618 },
      { code: "047274136801404", voters: 617 },
      { code: "047274136801405", voters: 617 },
    ],
  },
  {
    name: "Karura Forest Primary School",
    total: 1868,
    stations: [
      { code: "047274136801501", voters: 623 },
      { code: "047274136801502", voters: 623 },
      { code: "047274136801503", voters: 622 },
    ],
  },
  {
    name: "Cheleta Primary School",
    total: 8548,
    stations: [
      { code: "047274136801601", voters: 658 },
      { code: "047274136801602", voters: 658 },
      { code: "047274136801603", voters: 658 },
      { code: "047274136801604", voters: 658 },
      { code: "047274136801605", voters: 658 },
      { code: "047274136801606", voters: 658 },
      { code: "047274136801607", voters: 658 },
      { code: "047274136801608", voters: 657 },
      { code: "047274136801609", voters: 657 },
      { code: "047274136801610", voters: 657 },
      { code: "047274136801611", voters: 657 },
      { code: "047274136801612", voters: 657 },
      { code: "047274136801613", voters: 657 },
    ],
  },
  {
    name: "Mji Wa Huruma",
    total: 2466,
    stations: [
      { code: "047274136801701", voters: 617 },
      { code: "047274136801702", voters: 617 },
      { code: "047274136801703", voters: 616 },
      { code: "047274136801704", voters: 616 },
    ],
  },
  {
    name: "Kenya Teachers Technical College",
    total: 5049,
    stations: [
      { code: "047274136801801", voters: 632 },
      { code: "047274136801802", voters: 631 },
      { code: "047274136801803", voters: 631 },
      { code: "047274136801804", voters: 631 },
      { code: "047274136801805", voters: 631 },
      { code: "047274136801806", voters: 631 },
      { code: "047274136801807", voters: 631 },
      { code: "047274136801808", voters: 631 },
    ],
  },
  {
    name: "Hospital Hill High School",
    total: 8529,
    stations: [
      { code: "047274136801901", voters: 657 },
      { code: "047274136801902", voters: 656 },
      { code: "047274136801903", voters: 656 },
      { code: "047274136801904", voters: 656 },
      { code: "047274136801905", voters: 656 },
      { code: "047274136801906", voters: 656 },
      { code: "047274136801907", voters: 656 },
      { code: "047274136801908", voters: 656 },
      { code: "047274136801909", voters: 656 },
      { code: "047274136801910", voters: 656 },
      { code: "047274136801911", voters: 656 },
      { code: "047274136801912", voters: 656 },
      { code: "047274136801913", voters: 656 },
    ],
  },
];

const maxVoters = Math.max(...POLLING_CENTERS.flatMap((c) => c.stations.map((s) => s.voters)));
export const MAX_STATION_VOTERS = maxVoters;
