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
    email?: string;
    onButtonClick?: (email: string) => void;
  }
type ProjectProps = {
    id: string;
    title: string;
    category: string;
    description: string;
    url: string;
    createdAt?: Date;
}
type ProjectsProps = {
    projects: ProjectProps[];
    onRemoveProjectButtonClicked: (id: string) => void;
}

export type { ExperienceProps, ExperiencesProps, HeaderProps, ContactProps, ProjectProps, ProjectsProps };