type ExperienceProps = {
    id?: number;
    description: string;
  }
  
type ExperiencesProps = {
    experienceOne: string;
    experienceTwo: string;
  }
type HeaderProps = {
    student: string;
    degree: string;
    points: number;
  }
type ContactProps = {
    email: string;
  }
type ProjectProps = {
    title: string;
    category: string;
    description: string;
    url: string;
}

export type { ExperienceProps, ExperiencesProps, HeaderProps, ContactProps, ProjectProps };