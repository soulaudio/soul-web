import { Helmet } from "react-helmet-async";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Soul Audio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className={styles.container}>Not found</div>
    </>
);
};

export default NotFound;
