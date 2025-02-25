// Node modules

import { FC } from "react";

// Types
import { IProjectCardPropType } from "../types/ProjectCardPropType";

const ProjectCard: FC<IProjectCardPropType> = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}) => {
  const githubLink = "a";
  const swaggerLink = "api";

  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col " +
        classes
      }
    >
      <div className="flex-1 flex flex-col">
        <figure className="img-box aspect-square rounded-lg mb-4">
          <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
        </figure>

        <h3 className="title-1 mb-3">{title}</h3>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end p-1">
          <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-0">
            {tags.map((label: string, key: number) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex items-center sm:justify-between max-sm:justify-between gap-2 lg:justify-self-end">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="w-10 h-10 rounded-lg grid place-items-center bg-gray-700 hover:bg-gray-600 active:bg-gray-700 text-white shrink-0"
                title="GitHub"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  code
                </span>
              </a>
            )}

            {swaggerLink && (
              <a
                href={swaggerLink}
                target="_blank"
                className="w-10 h-10 rounded-lg grid place-items-center bg-blue-600 hover:bg-blue-500 active:bg-blue-600 text-white"
                title="Swagger API"
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  api
                </span>
              </a>
            )}

            <a
              href={projectLink}
              target="_blank"
              className="w-10 h-10 rounded-lg grid place-items-center bg-sky-400 hover:bg-sky-300 active:bg-sky-400 text-zinc-950"
              title="Live Project"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;