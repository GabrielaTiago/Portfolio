import { IEducation, IPageInfo, IProject, ISkill, ISocial } from "./sanity";

export type PageInfoData = {
  pageInfo: IPageInfo;
};

export type SocialData = {
  socials: ISocial[];
};

export type EducationData = {
  education: IEducation[];
};

export type ProjectsData = {
  projects: IProject[];
};

export type SkillsData = {
  skills: ISkill[];
};
