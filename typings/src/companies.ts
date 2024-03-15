export const companies: CompanyWrapper[] = [
  {
    company: {
      id: 58,
      abbreviatedName: "aaa",
    },
  },
  {
    company: {
      id: 8,
      abbreviatedName: "Vibrant Ventes",
    },
  },
];

interface CompanyWrapper {
  company: Company;
}

interface Company {
  id: number;
  abbreviatedName: string;
}
