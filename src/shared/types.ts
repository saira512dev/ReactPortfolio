
export enum SelectedPage {
    Home = "home",
    AboutMe = "about me",
    Projects = "projects",
    Skills = "skills",
  }

  export type IconType = React.FC<
  React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    title?: string;
  }
>;

export type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  frontendLink?: string;
  backendLink?: string;
  liveDemo?: string;
  imageUrl: string;
};


  


