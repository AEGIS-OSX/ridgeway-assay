import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>
        <div className={styles["footer-top"]}>
          <div>
            <span className={styles["footer-logo"]}>Ridgeway Assay</span>
            <p className={styles["footer-tagline"]}>Accredited soil analysis for agricultural co-operatives.</p>
          </div>
          <nav className={styles["footer-nav"]}>
            <a href="#hero" className={styles["footer-link"]}>Home</a>
            <a href="#quote" className={styles["footer-link"]}>Request a Quote</a>
          </nav>
          <div className={styles["footer-nav"]}>
            <a href="tel:+18005550199" className={styles["footer-link"]}>800-555-0199</a>
            <a href="mailto:info@ridgewayassay.com" className={styles["footer-link"]}>info@ridgewayassay.com</a>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <p className={styles["footer-copy"]}>&copy; 2025 Ridgeway Assay. All rights reserved.</p>
          <div className={styles["footer-legal"]}>
            <a href="/privacy" className={styles["footer-link"]}>Privacy Policy</a>
            <a href="/terms" className={styles["footer-link"]}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}