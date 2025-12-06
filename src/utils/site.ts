const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig = {
  name: "Ramez | FrontEnd Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as | FrontEnd developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    github: "https://github.com/MOHA-dev0",
  },
  mailSupport: "mohammad.uns.02@gmail.com",
};
