import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">BotoFood</Link>
        </div>

        <div className={styles.right}>
          <Link href="/menue">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href="https://mfgh.vercel.app" target="_blank" rel="noreferrer">Mfgh</a>
        Next.js course | BotoFood Project &copy;
      </footer>
    </>
  );
};

export default Layout;
