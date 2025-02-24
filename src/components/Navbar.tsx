// // Node modules
import { FC, MouseEvent, useEffect, useRef } from "react";

// // Types
import { INavItemType } from "../types/NavItemType";
import { INavbarPropType } from "../types/NavbarPropType";

const Navbar: FC<INavbarPropType> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null)

  const initActiveBox = () => {
    if (!activeBox.current || !lastActiveLink.current) return;
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  

  useEffect(initActiveBox, [])
  window.addEventListener('resize', initActiveBox)

  const activeCurrentLink = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!activeBox.current) return;
    if (!lastActiveLink.current) lastActiveLink.current = event.currentTarget;

    lastActiveLink.current.classList.remove("active");
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;

    activeBox.current.style.top = `${event.currentTarget.offsetTop}px`;
    activeBox.current.style.left = `${event.currentTarget.offsetLeft}px`;
    activeBox.current.style.width = `${event.currentTarget.offsetWidth}px`;
    activeBox.current.style.height = `${event.currentTarget.offsetHeight}px`;
};


  const navItems: INavItemType[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ` + (navOpen ? 'active' : '')}>
      {navItems.map((navItem: INavItemType, key: number) => (
        <a
          href={navItem.link}
          key={key}
          ref={navItem.ref ?? null}
          className={navItem.className}
          onClick={activeCurrentLink}
        >
            {navItem.label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}>
        
      </div>
    </nav>
  );
};

export default Navbar;
