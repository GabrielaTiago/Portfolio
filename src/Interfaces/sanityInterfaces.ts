interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  profilePic: Image;
  heroImage: Image;
  backgroundInfo: string;
  phoneNumber: string;
  email: string;
  address: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Education extends SanityBody {
  _type: "education";
  institutionPicture: Image;
  institution: string;
  course: string;
  dateStart: Date;
  dateEnd: Date;
  technologies: Skill[];
  topics: string[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  time: string;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  link: string;
  technologies: Skill[];
}


