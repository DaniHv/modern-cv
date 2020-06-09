export type MultilanguageString = string | {
  locale: string,
  text: string
}[];

export type DateMY = {
  month: number,
  year: number,
};

export type List = {
  max?: number,
  toggable?: boolean
};

export type Period = {
  since: DateMY,
  until?: DateMY,
};

export type Certification = {
  id?: string,
  badge: string,
  title: MultilanguageString,
  description: MultilanguageString,
  organization?: {
    name: string,
    url: string,
    logo: string
  },
  date: DateMY,
  url?: string,
  certificationImg?: string,
  certificationUrl?: string,
  page?: string,
  courses?: {
    id?: string,
    badge: string,
    title: MultilanguageString,
    description: MultilanguageString,
    date: DateMY,
    url?: string,
  }[],
};

export type Study = {
  id?: string,
  title: MultilanguageString,
  description: MultilanguageString,
  period: Period,
  institution?: {
    name: string,
    url?: string,
    logo: string
  },
  page?: string,
};

export type Job = {
  id?: string,
  title: MultilanguageString,
  description: MultilanguageString,
  period: Period,
  organization?: {
    name: string,
    url?: string,
    logo: string
  },
  page?: string,
};

export type Knowledge = {
  id?: string
  name: string,
  percent: number,
};
