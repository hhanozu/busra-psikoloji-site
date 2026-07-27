export const tr = {
  nav: {
    title: 'Uzm. Kl. Psikolog',
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    services: 'Hizmetler',
    portfolio: 'Çalışmalar',
    blog: 'Blog',
    booking: 'Randevu',
    contact: 'İletişim',
    bookCta: 'Randevu Al',
    langSwitch: 'EN',
  },
  footer: {
    title: 'Uzm. Kl. Psikolog',
    tagline: 'Kuveyt ve İstanbul\'da, Türkçe ve İngilizce online & yüz yüze şefkatli, kanıta dayalı psikolojik destek.',
    navTitle: 'Navigasyon',
    quickLinks: 'Hızlı Linkler',
    contactTitle: 'İletişim',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon',
    hours: 'Pzt–Cum 09:00–18:00',
    rights: 'Tüm hakları saklıdır.',
    disclaimer: 'Bu sitedeki içerikler genel bilgilendirme amaçlıdır; bireysel terapi veya tedavi yerine geçmez.',
    crisis: 'Acil bir kriz yaşıyorsanız bulunduğunuz ülkenin acil yardım hattını arayın (Türkiye: 112).',
  },
  common: {
    bookSession: 'Randevu Al',
    readMore: 'Devamını Oku',
    backToList: 'Tüm Listeye Dön',
    comingSoon: 'Yakında',
  },
} as const;

export type Dictionary = typeof tr;
