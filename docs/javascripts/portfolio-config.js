window.przestawPortfolio = {
  navigation: {
    defaultLocale: "en",
    brand: { name: "Przemysław Stawczyk", subtitle: "C++ / Python Engineer" },
    locales: {
      en: { prefix: "/", ariaLabel: "Main navigation", languageLabel: "Language selector", shortLabel: "EN" },
      pl: { prefix: "/pl/", ariaLabel: "Nawigacja główna", languageLabel: "Wybór języka", shortLabel: "PL" }
    },
    pages: [
      { labels: { en: "Home", pl: "Start" }, paths: { en: "/", pl: "/pl/" } },
      { labels: { en: "Projects", pl: "Projekty" }, paths: { en: "/projects/", pl: "/pl/projekty/" } },
      { labels: { en: "Boost.Python", pl: "Boost.Python" }, paths: { en: "/boost-python/", pl: "/pl/boost-python/" } },
      { labels: { en: "workctl", pl: "workctl" }, paths: { en: "/workctl/", pl: "/pl/workctl/" } },
      { labels: { en: "Contact", pl: "Kontakt" }, paths: { en: "/#contact", pl: "/pl/#contact" } }
    ]
  }
};
