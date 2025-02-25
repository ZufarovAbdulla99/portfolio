// Node modules
import { FC } from "react";

// Types
import { IButtonType } from "../types/ButtonType";


// Primary Button

const ButtonPrimary: FC<IButtonType> = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
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

const ButtonOutline: FC<IButtonType> = ({ href, target = "_self", label, icon, classes }) => {
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
