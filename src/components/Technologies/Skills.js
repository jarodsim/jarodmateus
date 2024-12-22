import { DiReact, DiNodejs } from 'react-icons/di';
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNx,
  SiNextdotjs,
  SiGithub,
  SiAwslambda,
  SiVitest,
} from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';

export const Skills = [
  {
    slug: 'nodejs',
    Component: DiNodejs,
    title: 'NodeJS',
    Description: () => (
      <>I develop backend solutions using NodeJS, including RESTful APIs.</>
    ),
  },
  {
    slug: 'python',
    Component: FaPython,
    title: 'Python',
    Description: () => (
      <>
        I develop backend solutions and work with tools like AWS Lambda and
        Pytest for testing.
      </>
    ),
  },
  {
    slug: 'reactjs',
    Component: DiReact,
    title: 'ReactJS',
    Description: () => (
      <>
        I design and implement frontend solutions using ReactJS, including
        integration with backend services.
      </>
    ),
  },
  {
    slug: 'nextjs',
    Component: SiNextdotjs,
    title: 'NextJS',
    Description: () => (
      <>I develop web applications with NextJS for server-side rendering.</>
    ),
  },
  {
    slug: 'typescript',
    Component: SiTypescript,
    title: 'TypeScript',
    Description: () => (
      <>
        I use TypeScript for type-safe development in both frontend and backend
        applications.
      </>
    ),
  },
  {
    slug: 'aws',
    Component: SiAwslambda,
    title: 'AWS',
    Description: () => (
      <>
        I utilize AWS services like Cognito, S3, Lambda, RDS, API Gateway,
        DynamoDB and more for scalable applications.
      </>
    ),
  },
  {
    slug: 'mongodb',
    Component: SiMongodb,
    title: 'MongoDB',
    Description: () => (
      <>
        I work with MongoDB for building scalable and flexible database
        solutions.
      </>
    ),
  },
  {
    slug: 'postgresql',
    Component: SiPostgresql,
    title: 'PostgreSQL',
    Description: () => (
      <>I use PostgreSQL for relational database design and querying.</>
    ),
  },
  {
    slug: 'docker',
    Component: SiDocker,
    title: 'Docker',
    Description: () => (
      <>I containerize applications and manage environments using Docker.</>
    ),
  },
  {
    slug: 'nx',
    Component: SiNx,
    title: 'Nx Monorepo',
    Description: () => <>I utilize Nx for managing monorepos.</>,
  },
  {
    slug: 'git',
    Component: SiGithub,
    title: 'Git',
    Description: () => (
      <>
        I use Git and GitHub daily for version control, collaboration, and CI/CD
        pipelines.
      </>
    ),
  },
  {
    slug: 'vitest',
    Component: SiVitest,
    title: 'vitest',
    Description: () => (
      <>
        I write and maintain unit tests using Vitest to ensure code reliability.
      </>
    ),
  },
  {
    slug: 'flutter',
    Component: RiFlutterFill,
    title: 'Flutter',
    Description: () => (
      <>
        I develop mobile applications using Flutter for cross-platform
        compatibility. (newbye)
      </>
    ),
  },
];
