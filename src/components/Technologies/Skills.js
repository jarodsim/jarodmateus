import { DiReact, DiTerminal, DiNodejs, DiDart } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "reactjs",
    Component: DiReact,
    title: "ReactJS",
    Description: () => <>Currently developing web applications with ReactJS.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>In studies, currently studying flutter. </>,
  },
  {
    slug: "nodejs",
    Component: DiNodejs,
    title: "NodeJS",
    Description: () => <>I develop backend applications using nodejs.</>,
  },
  {
    slug: "dart",
    Component: DiDart,
    title: "Dart",
    Description: () => <>Because of flutter, I'm also in the early stages of development with dart..</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code and teamwork.</>,
  },
];
