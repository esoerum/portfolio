type ExperienceProps = {
    id?: number;
    description: string;
  }
  
type ExperiencesProps = {
    experiences : ExperienceProps[];
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
    id?: number
    title: string;
    category: string;
    description: string;
    url: string;
}
type ProjectsProps = {
    projects: ProjectProps[];
}

export type { ExperienceProps, ExperiencesProps, HeaderProps, ContactProps, ProjectProps, ProjectsProps };