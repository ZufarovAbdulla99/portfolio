// Components
import SkillCard from "./SkillCard";

// Types
import { ISkillItemType } from "../types/SkillItemType";

const skillItems: ISkillItemType[] = [
  {
    imgSrc: "/icons/html.svg",
    label: "HTML",
    desc: "Web Markup",
  },
  {
    imgSrc: "/icons/css3.svg",
    label: "CSS",
    desc: "Cascading Style sheets",
  },
  {
    imgSrc: "/icons/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/icons/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/icons/typescript.svg",
    label: "TypeScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/icons/node-js.svg",
    label: "NodeJS",
    desc: "Javascript Runtime",
  },
  {
    imgSrc: "/icons/expressjs.svg",
    label: "ExpressJS",
    desc: "NodeJs Framework",
  },
  {
    imgSrc: "/icons/nest-js.svg",
    label: "NestJS",
    desc: "NodeJs Framework",
  },
  {
    imgSrc: "/icons/mysql.svg",
    label: "MySql",
    desc: "SQL Database",
  },
  {
    imgSrc: "/icons/postgresql.svg",
    label: "PostgreSql",
    desc: "SQL Database",
  },
  {
    imgSrc: "/icons/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/icons/redis.svg",
    label: "Redis",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/icons/sequelize.svg",
    label: "Sequelize",
    desc: "ORM",
  },
  {
    imgSrc: "/icons/typeorm.svg",
    label: "TypeOrm",
    desc: "ORM",
  },
  {
    imgSrc: "/icons/prisma.svg",
    label: "Prisma",
    desc: "ORM",
  },
  {
    imgSrc: "/icons/mongoose.svg",
    label: "Mongoose",
    desc: "ODM",
  },
  {
    imgSrc: "/icons/react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "/icons/nextjs-icon.svg",
    label: "NextJs",
    desc: "React's Framework",
  },
  {
    imgSrc: "/icons/material-ui.svg",
    label: "Material UI",
    desc: "UI Library",
  },
  {
    imgSrc: "/icons/ant-design.svg",
    label: "Ant Design",
    desc: "UI Library",
  },
  {
    imgSrc: "/icons/git.svg",
    label: "Git",
    desc: "Version Control System",
  },
  {
    imgSrc: "/icons/github.svg",
    label: "Github",
    desc: "Cloud-based platform",
  },
  {
    imgSrc: "/icons/docker.svg",
    label: "Docker",
    desc: "Container platform",
  },
  {
    imgSrc: "/icons/deployment.svg",
    label: "Deployment",
    desc: "Deploy web apps",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map((skillItem: ISkillItemType, key: number) => (
            <SkillCard
              key={key}
              imgSrc={skillItem.imgSrc}
              label={skillItem.label}
              desc={skillItem.desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
