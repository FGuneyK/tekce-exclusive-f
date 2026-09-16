export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Developers", href: "/developers" },
  { label: "Partners", href: "/partners" },
  { label: "Projects", href: "/projects" },
  { label: "Markets", href: "/markets" },
  { label: "Invest", href: "/invest" },
  { label: "Platform", href: "/platform" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

/**
 * Countries TEKCE sells property in, per tekce.com. Sweden is an office
 * location rather than a property market, so it is deliberately not listed.
 */
export const MARKETS: NavItem[] = [
  { label: "Spain", href: "/markets/spain" },
  { label: "Türkiye", href: "/markets/turkiye" },
  { label: "North Cyprus", href: "/markets/north-cyprus" },
  { label: "United Arab Emirates", href: "/markets/united-arab-emirates" },
];

/**
 * Display only — selecting a language changes the indicator, nothing else.
 * The prototype is not translated.
 */
export const LANGUAGES = [
  { code: "EN", name: "English", lang: "en" },
  { code: "FR", name: "Français", lang: "fr" },
  { code: "RU", name: "Русский", lang: "ru" },
  { code: "AR", name: "العربية", lang: "ar" },
  { code: "TR", name: "Türkçe", lang: "tr" },
  { code: "ZH", name: "中文", lang: "zh" },
  { code: "DE", name: "Deutsch", lang: "de" },
  { code: "ES", name: "Español", lang: "es" },
  { code: "PL", name: "Polski", lang: "pl" },
  { code: "SV", name: "Svenska", lang: "sv" },
  { code: "NL", name: "Nederlands", lang: "nl" },
  { code: "FA", name: "فارسی", lang: "fa" },
];

export const LOGIN = { label: "Partner Login", href: "/partner-login" };
export const CTA = { label: "Submit Your Project", href: "/submit-your-project" };

const byLabel = (label: string) => {
  const item = NAV_ITEMS.find((entry) => entry.label === label);
  if (!item) throw new Error(`Unknown nav item: ${label}`);
  return item;
};

export const FOOTER_GROUPS: { title: string; links: NavItem[] }[] = [
  {
    title: "Work with us",
    links: [byLabel("Developers"), byLabel("Partners"), CTA, LOGIN],
  },
  {
    title: "Explore",
    links: [byLabel("Projects"), byLabel("Invest"), byLabel("Platform"), byLabel("Insights")],
  },
  { title: "Markets", links: MARKETS },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Legal Notices", href: "/legal" },
  { label: "Terms of Use", href: "/terms" },
];
