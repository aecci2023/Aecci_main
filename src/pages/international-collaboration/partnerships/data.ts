const f = (code: string) => `https://flagcdn.com/w320/${code.toLowerCase()}.png`;

export interface Partner {
  country: string;
  slug: string;
  firm: string | null;
  website: string | null;
  flag: string;
}

export const partners: Partner[] = [
  { country: "Algeria", slug: "algeria", firm: "Avocats Adyel", website: "https://www.avocats-adyel.com/", flag: f("DZ") },
  { country: "Armenia", slug: "armenia", firm: "Ameria Management Advisory", website: "http://ameriaadvisory.am/", flag: f("AM") },
  { country: "Austria", slug: "austria", firm: "EVLT GmbH", website: "https://www.evl-t.com/", flag: f("AT") },
  { country: "Bahamas", slug: "bahamas", firm: "Parris Whittaker", website: "https://parriswhittaker.com/", flag: f("BS") },
  { country: "Bosnia & Herzegovina", slug: "bosnia-and-herzegovina", firm: "Advokati Cvijanovic", website: "https://advokaticvijanovic.com/", flag: f("BA") },
  { country: "Brazil", slug: "brazil", firm: "Abdo Advogados", website: "https://pt.abdo.com.br/", flag: f("BR") },
  { country: "Cambodia", slug: "cambodia", firm: "BNG Legal", website: "https://bnglegal.com/", flag: f("KH") },
  { country: "Canada", slug: "canada", firm: null, website: null, flag: f("CA") },
  { country: "China", slug: "china", firm: "Grant Thornton India", website: "https://grantthornton.in/", flag: f("CN") },
  { country: "Cyprus", slug: "cyprus", firm: "Ecan Consultants", website: "http://www.ecan-consultants.com/", flag: f("CY") },
  { country: "Czech Republic", slug: "czech-republic", firm: "SELMA International Trade Consulting", website: "http://www.selma.cz/", flag: f("CZ") },
  { country: "Denmark", slug: "denmark", firm: "DK Law", website: "https://dklaw.dk/en", flag: f("DK") },
  { country: "Egypt", slug: "egypt", firm: "Sadany & Khalifa", website: "http://www.sadanykhalifa.com/", flag: f("EG") },
  { country: "Estonia", slug: "estonia", firm: "Export Market Research", website: "http://www.exportmarketresearch.com/", flag: f("EE") },
  { country: "Ethiopia", slug: "ethiopia", firm: "Tewodros Getachew Law Office", website: "https://tewodrosgetachewlawoffice.com/", flag: f("ET") },
  { country: "Germany", slug: "germany", firm: "Koudous Law", website: "http://www.koudous-law.de/", flag: f("DE") },
  { country: "Ghana", slug: "ghana", firm: "GP Business Consulting", website: "http://www.gpbusinessconsult.com/", flag: f("GH") },
  { country: "Greece", slug: "greece", firm: "Thesis Law", website: "https://thesislaw.com/", flag: f("GR") },
  { country: "Hungary", slug: "hungary", firm: "CETA Consulting", website: "https://www.cetaconsulting.com/", flag: f("HU") },
  { country: "Indonesia", slug: "indonesia", firm: "Be Partners", website: "https://www.bepartners.co.id/", flag: f("ID") },
  { country: "Italy", slug: "italy", firm: "Euromed Group", website: "https://www.euromedgroup.eu/", flag: f("IT") },
  { country: "Jordan", slug: "jordan", firm: null, website: null, flag: f("JO") },
  { country: "Kenya", slug: "kenya", firm: "Gitau International Trade", website: "https://gitauinternationaltrade.com/", flag: f("KE") },
  { country: "Lebanon", slug: "lebanon", firm: null, website: null, flag: f("LB") },
  { country: "Libya", slug: "libya", firm: "Tamkeen International", website: "http://www.tamkeen.ly/", flag: f("LY") },
  { country: "Mexico", slug: "mexico", firm: "MR Legal Inn / New Markets", website: "http://www.mrlegalinn.com/", flag: f("MX") },
  { country: "Morocco", slug: "morocco", firm: null, website: null, flag: f("MA") },
  { country: "Mozambique", slug: "mozambique", firm: "CS Research", website: "https://csresearch.co.mz/", flag: f("MZ") },
  { country: "Namibia", slug: "namibia", firm: "Essence Trading", website: "https://www.essencetradingcc.com/", flag: f("NA") },
  { country: "Netherlands", slug: "netherlands", firm: "NEX Consultants", website: "https://nexconsultants.com/", flag: f("NL") },
  { country: "Nigeria", slug: "nigeria", firm: "Adeola Oyinlade", website: "https://www.adeolaoyinlade.com/en/", flag: f("NG") },
  { country: "Oman", slug: "oman", firm: "Al Alawi & Co.", website: "https://www.alalawico.com/", flag: f("OM") },
  { country: "Pakistan", slug: "pakistan", firm: "Al Khair Attorneys", website: "http://www.alkhairattorneys.com/", flag: f("PK") },
  { country: "Philippines", slug: "philippines", firm: "Leverage International", website: "http://www.leverageinternational.com/", flag: f("PH") },
  { country: "Poland", slug: "poland", firm: "Morawski EU Lawyers", website: "https://morawski.eu/lawyers/", flag: f("PL") },
  { country: "Portugal", slug: "portugal", firm: "Reis Pellicano", website: "https://reispellicano.com/en/", flag: f("PT") },
  { country: "Singapore", slug: "singapore", firm: "iLaw Asia", website: "https://ilawasia.com/", flag: f("SG") },
  { country: "South Sudan", slug: "south-sudan", firm: "Legal Line South Sudan", website: "http://www.legallinesouthsudan.com", flag: f("SS") },
  { country: "Spain", slug: "spain", firm: "Oftex Internacionalización S.L.", website: null, flag: f("ES") },
  { country: "Sri Lanka", slug: "sri-lanka", firm: "Juliyan's Law Firm", website: "https://juliyanslawfirm.com/", flag: f("LK") },
  { country: "Sweden", slug: "sweden", firm: "TBR Consulting", website: "http://www.tbrconsulting.se", flag: f("SE") },
  { country: "Tanzania", slug: "tanzania", firm: "Victory Attorneys", website: "https://victoryattorneys.co.tz/", flag: f("TZ") },
  { country: "Thailand", slug: "thailand", firm: "Anglo Thai Legal", website: "https://anglothailegal.com/", flag: f("TH") },
  { country: "Tunisia", slug: "tunisia", firm: "STECIA International", website: "http://www.stecia.com/", flag: f("TN") },
  { country: "Turkey", slug: "turkey", firm: "NMR Legal", website: "https://nmr.legal/", flag: f("TR") },
  { country: "UAE", slug: "uae", firm: "Mattar Law", website: "https://mattarlaw.com/", flag: f("AE") },
  { country: "United Kingdom", slug: "united-kingdom", firm: "Go Exporting", website: "https://goexporting.com/", flag: f("GB") },
  { country: "Uzbekistan", slug: "uzbekistan", firm: "Prae Legal", website: "https://praelegal.uz/", flag: f("UZ") },
  { country: "Vietnam", slug: "vietnam", firm: "HMP Law", website: "https://www.hmplaw.vn/en", flag: f("VN") },
  { country: "Yemen", slug: "yemen", firm: "Omni Trade Co. Ltd", website: "https://www.omnitradeco.com/", flag: f("YE") },
];
