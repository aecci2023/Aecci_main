import { COUNTRIES } from "@/lib/countries";

export const LANGUAGE_OPTIONS = [
  "Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Azerbaijani", "Basque",
  "Belarusian", "Bengali", "Bosnian", "Bulgarian", "Burmese", "Catalan", "Cebuano",
  "Chinese (Cantonese)", "Chinese (Mandarin)", "Croatian", "Czech", "Danish", "Dutch",
  "English", "Esperanto", "Estonian", "Finnish", "French", "Galician", "Georgian",
  "German", "Greek", "Gujarati", "Haitian Creole", "Hausa", "Hebrew", "Hindi",
  "Hungarian", "Icelandic", "Igbo", "Indonesian", "Irish", "Italian", "Japanese",
  "Javanese", "Kannada", "Kazakh", "Khmer", "Korean", "Kurdish", "Kyrgyz", "Lao",
  "Latin", "Latvian", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy", "Malay",
  "Malayalam", "Maltese", "Maori", "Marathi", "Mongolian", "Nepali", "Norwegian", "Odia",
  "Pashto", "Persian (Farsi)", "Polish", "Portuguese", "Punjabi", "Romanian", "Russian",
  "Samoan", "Serbian", "Sinhalese", "Slovak", "Slovenian", "Somali", "Spanish", "Swahili",
  "Swedish", "Tagalog", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tibetan", "Turkish",
  "Turkmen", "Ukrainian", "Urdu", "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Yiddish",
  "Yoruba", "Zulu",
].map((l) => ({ label: l, value: l }));

export const SECTOR_OPTIONS = [
  "Legal Services", "Trade Advisory", "Export Consulting", "Market Entry",
  "Pharmaceuticals", "Agriculture & Food", "Textiles & Apparel", "Technology & IT",
  "Manufacturing", "Finance & Banking", "Real Estate", "Energy & Mining",
  "Logistics & Supply Chain", "FMCG", "Automotive", "Arbitration", "Other",
].map((s) => ({ label: s, value: s }));

export const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({
  label: c.name,
  value: c.name,
}));
