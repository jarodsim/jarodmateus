import { DiReact, DiNodejs } from 'react-icons/di';
import {
  SiNextdotjs,
  SiAwslambda,
  SiDocker,
  SiTerraform,
} from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';

export const Skills = [
  {
    slug: 'frontend',
    Component: DiReact,
    title: 'Frontend',
    Description: () => (
      <>
        Deep expertise in React ecosystem including Next.js and OpenNext.
        Styling with Tailwind CSS and architecture with Turborepo.
      </>
    ),
  },
  {
    slug: 'backend',
    Component: DiNodejs,
    title: 'Backend',
    Description: () => (
      <>
        Building robust backend systems with Node.js and Python.
        Experience with Serverless Framework and Event-driven architectures.
      </>
    ),
  },
  {
    slug: 'cloud',
    Component: SiAwslambda,
    title: 'Cloud (AWS)',
    Description: () => (
      <>
        Extensive AWS experience: Lambda, IoT Core, Timestream, DynamoDB,
        S3, CloudFront, and Cognito.
      </>
    ),
  },
  {
    slug: 'devops',
    Component: SiTerraform,
    title: 'DevOps & Infra',
    Description: () => (
      <>
        Infrastructure as Code with Terraform. Containerization with Docker,
        and CI/CD automation using GitHub Actions.
      </>
    ),
  },
  {
    slug: 'flutter',
    Component: RiFlutterFill,
    title: 'Flutter (Learning)',
    Description: () => (
      <>
        Developing cross-platform mobile applications.
      </>
    ),
  },
];
