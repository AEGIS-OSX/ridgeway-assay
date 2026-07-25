import { ProjectImage } from "@/app/components/ProjectImage";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles["nav-wrapper"]}>
      <nav className={styles["nav-inner"]}>
        <a href="#hero">
          <ProjectImage id="logo" className="h-8 w-auto" alt="Ridgeway Assay" />
        </a>
        <div className={styles["nav-right"]}>
          <a href="tel:+18005550199" className={styles["nav-phone"]}>
            800-555-0199
          </a>
          <a href="#quote" className={styles["nav-cta"]}>
            Request a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
