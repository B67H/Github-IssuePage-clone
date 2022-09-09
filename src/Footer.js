import styles from "./Footer.module.css"

const footerItems = [
  {
    title: "Terms",
    link: "https://docs.github.com/en/github/site-policy/github-terms-of-service",
  },
  {
    title: "Privacy",
    link: "https://docs.github.com/en/github/site-policy/github-privacy-statement",
  },
  {
    title: "Security",
    link: "https://docs.github.com/articles/github-security/",
  },
  {
    title: "Status",
    link: "https://www.githubstatus.com/",
  },
  {
    title: "Docs",
    link: "https://docs.github.com/",
  },
  {
    title: "Contact GitHub",
    link: "https://support.github.com/?tags=dotcom-footer",
  },
  {
    title: "Pricing",
    link: "https://github.com/pricing",
  },
  {
    title: "API",
    link: "https://docs.github.com/",
  },
  {
    title: "Training",
    link: "https://services.github.com/",
  },
  {
    title: "Blog",
    link: "https://github.blog/",
  },
  {
    title: "About",
    link: "https://github.com/about",
  },
]

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}
