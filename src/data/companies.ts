export interface Company {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  financials: {
    year: number;
    peRatio: number | string;
    evEbitda: number | string;
    pbRatio: number | string;
  }[];
}

export const companies: Company[] = [
  {
    id: "alb",
    name: "Albemarle Corporation",
    description: "A global specialty chemicals company with leading positions in lithium, bromine, and refining catalysts. Its bromine business is a major producer of flame retardants.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
      { year: 2023, peRatio: 5.12, evEbitda: 7.0, pbRatio: 1.75 },
      { year: 2024, peRatio: -5.14, evEbitda: -14.7, pbRatio: 1.02 },
      { year: 2025, peRatio: -73.16, evEbitda: 19.1, pbRatio: 1.44 },
    ],
  },
  {
    id: "icl",
    name: "ICL Group Ltd",
    description: "A multi-national manufacturing concern that develops, produces, and markets fertilizers, metals, and other special-purpose chemical products. Flame retardants are a part of their specialty products portfolio.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
      { year: 2023, peRatio: 9.30, evEbitda: 5.42, pbRatio: 1.08 },
      { year: 2024, peRatio: 15.2, evEbitda: 6.71, pbRatio: 1.03 },
      { year: 2025, peRatio: 19.0, evEbitda: 7.35, pbRatio: 1.14 },
    ],
  },
  {
    id: "lxs",
    name: "LANXESS AG",
    description: "A specialty chemicals company based in Cologne, Germany. The company's portfolio includes flame retardants and bromine derivatives.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
      { year: 2023, peRatio: -8.7, evEbitda: 7.5, pbRatio: 0.54 },
      { year: 2024, peRatio: -3.0, evEbitda: 7.8, pbRatio: 0.44 },
      { year: 2025, peRatio: "At Loss", evEbitda: 5.8, pbRatio: 0.37 },
    ],
  },
  {
    id: "bas",
    name: "BASF SE",
    description: "A German multinational chemical company and the largest chemical producer in the world. The company's portfolio includes a wide range of chemicals, plastics, and performance products.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
        { year: 2023, peRatio: 173, evEbitda: 7.8, pbRatio: 1.13 },
        { year: 2024, peRatio: 27.8, evEbitda: 9.9, pbRatio: 0.97 },
        { year: 2025, peRatio: 17.03, evEbitda: 8.76, pbRatio: 1.07 },
    ],
  },
  {
    id: "dow",
    name: "Dow Inc.",
    description: "An American multinational chemical corporation. Dow is a large producer of plastics, including polyurethanes, and other performance materials.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
        { year: 2023, peRatio: 30.08, evEbitda: 8.8, pbRatio: 2.1 },
        { year: 2024, peRatio: 26.90, evEbitda: 8.0, pbRatio: 1.6 },
        { year: 2025, peRatio: -14.79, evEbitda: 10.68, pbRatio: 0.78 },
    ],
  },
  {
    id: "dd",
    name: "DuPont",
    description: "An American multinational chemical company. DuPont's products are used in a wide variety of markets, including electronics, transportation, and construction.",
    imageUrl: "https://via.placeholder.com/150",
    financials: [
        { year: 2023, peRatio: 79.8, evEbitda: 13.9, pbRatio: 1.34 },
        { year: 2024, peRatio: 44.4, evEbitda: 13.4, pbRatio: 1.35 },
        { year: 2025, peRatio: 21.90, evEbitda: 7.0, pbRatio: 0.66 },
    ],
  },
];