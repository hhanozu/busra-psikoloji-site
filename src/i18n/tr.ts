export const tr = {
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    services: 'Hizmetler',
    portfolio: 'Portfolyo',
    blog: 'Blog',
    booking: 'Randevu',
    contact: 'İletişim',
    bookCta: 'Randevu Al',
    langSwitch: 'EN',
  },
  footer: {
    tagline: 'Uzm. Kl. Psk. Kuveyt ve İstanbul\'da, Türkçe ve İngilizce online & yüz yüze terapi.',
    quickLinks: 'Hızlı Linkler',
    contactTitle: 'İletişim',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon',
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
