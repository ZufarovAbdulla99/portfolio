import { FC } from "react";

// Primary Button

const ButtonPrimary: FC<{
  href?: string;
  target?: string;
  label: string;
  icon: string;
  classes?: string;
}> = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary" + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

// Outline Button

const ButtonOutline: FC<{
    href?: string;
    target?: string;
    label: string;
    icon: string;
    classes?: string;
  }> = ({ href, target = "_self", label, icon, classes }) => {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-outline" + classes}>
          {label}
  
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </a>
      );
    } else {
      return (
        <button className={"btn btn-outline " + classes}>
          {label}
  
          {icon ? (
            <span className="material-symbols-rounded" aria-hidden="true">
              {icon}
            </span>
          ) : undefined}
        </button>
      );
    }
  };

export { ButtonPrimary, ButtonOutline };
