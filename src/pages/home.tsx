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
  // Helper function to determine if URL is external
  const isExternalUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Render menu item with appropriate link component
  const renderMenuItem = (item: MenuItem, index: number) => {
    const content = (
      <>
        {item.label}
        <span className={styles.menuIcon}>○</span>
      </>
    );

    if (isExternalUrl(item.url)) {
      return (
        <li key={index}>
          <a href={item.url} className={styles.menuLink}>
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
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <img
            src="/soul-audio-512x512.svg"
            alt="Soul Audio logo"
          />
        </div>
        <ul className={styles.menu}>
          {menuConfig.map((item, index) => renderMenuItem(item, index))}
        </ul>
      </div>
    </div>
  );
};

export default Home;