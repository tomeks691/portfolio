export interface Project {
  id: string;
  title: { pl: string; en: string };
  description: { pl: string; en: string };
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'rag-email-agent',
    title: {
      pl: 'AI Support Mail Agent',
      en: 'AI Support Mail Agent',
    },
    description: {
      pl: 'System RAG do automatycznej obsługi maili klientów e-commerce. Hybrydowa klasyfikacja maili (keyword matching + LLM fallback), anonimizacja danych wrażliwych lokalnie przez Microsoft Presidio (PESEL, IBAN, telefon), automatyczna detekcja języka PL/EN, async processing przez Redis, observability przez Langfuse. 104 testy automatyczne. Żadne dane osobowe nie trafiają do chmury.',
      en: 'RAG system for automated e-commerce customer email handling. Hybrid email classification (keyword matching + LLM fallback), local PII anonymization via Microsoft Presidio (no sensitive data sent to cloud), automatic PL/EN language detection, async processing via Redis queue, observability via Langfuse. 104 automated tests.',
    },
    tags: ['Python', 'FastAPI', 'OpenAI', 'Qdrant', 'Redis', 'Langfuse', 'Presidio', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/tomeks691/ai-support-mail-agent',
  },
  {
    id: 'planet-hunter',
    title: {
      pl: 'Planet Hunter — Wykrywanie Egzoplanet',
      en: 'Planet Hunter — Exoplanet Detection',
    },
    description: {
      pl: 'Autonomiczny system wykrywania egzoplanet z danych fotometrycznych NASA TESS. Wieloetapowy pipeline: pobieranie krzywych blasku z MAST API → czyszczenie sygnału → periodogram BLS (Box Least Squares) → klasyfikacja sygnałów. Własny decision-tree classifier rozróżnia 7 klas (PLANET_CANDIDATE, ECLIPSING_BINARY, VARIABLE_STAR i inne). Baza 476 znanych planet z NASA do walidacji wyników. Przetwarza tysiące gwiazd 24/7.',
      en: 'Autonomous exoplanet detection system using NASA TESS photometric data. Multi-stage pipeline: light curve fetching from MAST API → signal cleaning → BLS periodogram → signal classification. Custom decision-tree classifier distinguishes 7 classes (PLANET_CANDIDATE, ECLIPSING_BINARY, VARIABLE_STAR and more). Database of 476 known NASA planets for result validation. Processes thousands of stars 24/7.',
    },
    tags: ['Python', 'FastAPI', 'SQLite', 'Docker', 'lightkurve', 'BLS', 'MAST API', 'ML Pipeline'],
  },
  {
    id: 'nba-ml-predictor',
    title: {
      pl: 'NBA ML Betting System',
      en: 'NBA ML Betting System',
    },
    description: {
      pl: 'System machine learning do predykcji wyników meczów NBA (over/under total points). Automatyczne zbieranie danych codziennie z NBA API — statystyki drużyn, kontuzje zawodników, harmonogram. Model XGBoost z ~50-100 cechami (features), self-learning — uczy się z każdego rozegranego meczu. Pełny backtesting i performance tracking.',
      en: 'Machine learning system for predicting NBA game results (over/under total points). Automated daily data collection from NBA API — team stats, player injuries, schedule. XGBoost model with ~50-100 features, self-learning — trains on each completed game. Full backtesting and performance tracking.',
    },
    tags: ['Python', 'XGBoost', 'PostgreSQL', 'FastAPI', 'Docker', 'APScheduler', 'SQLAlchemy'],
  },
  {
    id: 'pricewatch',
    title: {
      pl: 'ElektroNova PriceWatch',
      en: 'ElektroNova PriceWatch',
    },
    description: {
      pl: 'System monitorowania cen produktów elektronicznych na Allegro, Amazon i Zalando z AI processing. Stealth scraping z obsługą anty-botowych zabezpieczeń, przetwarzanie wyników przez LLM, powiadomienia o zmianach cen. Zbudowany jako demo dla fikcyjnej firmy ElektroNova.',
      en: 'Price monitoring system for electronics on Allegro, Amazon and Zalando with AI processing. Stealth scraping with anti-bot bypass, LLM result processing, price change notifications. Built as a demo for fictional company ElektroNova.',
    },
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'Web Scraping', 'REST API'],
    github: 'https://github.com/tomeks691/electronova-pricewatch',
  },
  {
    id: 'n8n-automations',
    title: {
      pl: 'AI Automation Workflows',
      en: 'AI Automation Workflows',
    },
    description: {
      pl: 'Zestaw automatyzacji biznesowych i AI na platformie n8n. Check_Companies — co tydzień GPT skanuje rynek giełdowy, ocenia spółki AI/space przez web search i zapisuje wyniki do PostgreSQL. IT Discovery Mail — codziennie rano dostarcza 3 odkrycia ze świata IT/AI przez email. Watchlist Discord Digest — tygodniowy raport inwestycyjny na Discord.',
      en: 'A set of business and AI automations on n8n platform. Check_Companies — weekly GPT scans stock market, evaluates AI/space companies via web search, saves results to PostgreSQL. IT Discovery Mail — delivers 3 IT/AI discoveries via email every morning. Watchlist Discord Digest — weekly investment report to Discord.',
    },
    tags: ['n8n', 'OpenAI', 'PostgreSQL', 'Discord', 'Resend', 'Docker'],
  },
];
