interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface IImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IPageInfo extends SanityBody {
  _type: "pageInfo";
  description: string[];
  role: string;
  profilePicture: IImage;
  heroImage: IImage;
  backgroundInfo: string[];
  phoneNumber: string;
  email: string;
  address: string;
}

export interface ISocial extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface IEducation extends SanityBody {
  _type: "education";
  institutionPicture: IImage;
  institution: string;
  course: string;
  dateStart: Date;
  dateEnd: Date;
  technologies: ISkill[];
  topics: string[];
}

export interface ISkill extends SanityBody {
  _type: "skill";
  title: string;
  image: IImage;
  time: string;
}

export interface IProject extends SanityBody {
  _type: "project";
  title: string;
  image: IImage;
  link: string;
  sumary: string;
  technologies: ISkill[];
}
