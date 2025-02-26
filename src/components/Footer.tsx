// Components
import { ButtonPrimary } from "./Button";

// Types

import { ISiteMapType } from "../types/SiteMapType";
import { ISocialType } from "../types/SocialType";

const sitemap: ISiteMapType[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials: ISocialType[] = [
  {
    label: "GitHub",
    href: "https://github.com/ZufarovAbdulla99",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulla-zufarov-6b3825285/",
  },
  {
    label: "Telegram",
    href: "https://t.me/Zufarov_Abdulla_99",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zufarov_abdulla/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:zufarovabdulla08@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map((sitemap: ISiteMapType, key: number) => (
                  <li key={key}>
                    <a
                      href={sitemap.href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {sitemap.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map((social: ISocialType, key: number) => (
                  <li key={key}>
                    <a
                      href={social.href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/icons/logo.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">Abdulla</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
