import { type Image } from "sanity";
declare global {
  interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
  }

  interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
    progress: number;
  }

  interface PageInfo extends SanityBody {
    _type: "pageInfo";
    backgroundInformation: string;
    email: string;
    phoneNumber: string;
    role: string;
    heroImage: Image;
    name: string;
    profilePic: Image;
  }

  interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
  }

  interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkTo: number;
    summary: string;
    technologies: Skill[];
  }

  interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
  }
}
