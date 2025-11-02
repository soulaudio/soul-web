import { Helmet } from "react-helmet-async";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  url: string;
}

const menuConfig: MenuItem[] = [
  {
    label: "Label",
    url: "/label",
  },
  {
    label: "Soul Player",
    url: "https://github.com/soulaudio/soul-player",
  },
];

const Home = () => {
  const isExternalUrl = (url: string): boolean => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const content = (
      <>
        {item.label}
        <span className={styles.menuIcon}></span>
      </>
    );

    if (isExternalUrl(item.url)) {
      return (
        <li key={index}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuLink}
          >
            {content}
          </a>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <Link to={item.url} className={styles.menuLink}>
            {content}
          </Link>
        </li>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Soul Audio</title>
        <meta
          name="description"
          content="Discover ambient and experimental music from talented artists."
        />
        <meta property="og:title" content="Soul Audio" />
        <meta
          property="og:description"
          content="Discover ambient and experimental music from talented artists."
        />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.logoContainer}>
            <img src="/soul-audio-512x512.svg" alt="Soul Audio logo" />
          </div>
          <ul className={styles.menu}>
            {menuConfig.map((item, index) => renderMenuItem(item, index))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
