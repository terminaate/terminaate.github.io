export type ProjectProps = {
  image: string;
  title: string;
  githubLink?: string;
  link?: string;
  description: string;
  tags: string[];
};

export const projects: ProjectProps[] = [
  {
    githubLink: 'https://github.com/terminaate/mesto',
    title: 'Mesto',
    description: 'Mesto - my personal social network, currently fully on development thats why its not work on this time, basicaly i need rewrite all modules in this social network',
    image: '',
    tags: ["React", "Framer motion", "Redux toolkit", "Nest", "Mongodb", "Passportjs", "JWT"],
  },
];