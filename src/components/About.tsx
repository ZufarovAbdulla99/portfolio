// Types
import { IAboutItemType } from "../types/AboutItemType";

const aboutItems: IAboutItemType[] = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Abdulla, as a backend developer, I have experience
            with Node.js, Nest.js, and Express.js. I am skilled in working with
            database management tools such as PostgreSQL, Sequelize, TypeORM,
            and Prisma. I also have strong proficiency in working with MongoDB
            and Mongoose. I am passionate about building high-performance,
            scalable, and optimized systems. I have also worked with React.js and
            Next.js and have used UI libraries like Material-UI and Ant Design.
            Additionally, I have experience using Tailwind CSS for styling.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map((aboutItem: IAboutItemType, key: number) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {aboutItem.number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{aboutItem.label}</p>
              </div>
            ))}

            <img
              src="/icons/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
