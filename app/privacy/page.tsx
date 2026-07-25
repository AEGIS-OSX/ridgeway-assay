import styles from "./Privacy.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles["privacy-page"]}>
      <div className={styles["privacy-inner"]}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <a href="/">Back to Home</a>
        </nav>
        <h1 className={styles["privacy-title"]}>Privacy Policy</h1>
        <p className={styles["privacy-effective"]}>Effective date: January 1, 2025</p>
        <p className={styles["privacy-body"]}>
          Ridgeway Assay (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates ridgewayassay.com. This policy describes how we collect, use, and protect information submitted through our website.
        </p>
        <h2 className={styles["privacy-section-heading"]}>Information We Collect</h2>
        <p className={styles["privacy-body"]}>
          We collect information you voluntarily submit through our quote request form, including your name, work email address, organization name, estimated sample count, and any additional notes you provide. We do not collect information through cookies, tracking pixels, or third-party analytics tools.
        </p>
        <h2 className={styles["privacy-section-heading"]}>How We Use Your Information</h2>
        <p className={styles["privacy-body"]}>
          We use submitted information solely to respond to your quote request and to communicate with you about our soil analysis services. We do not sell, rent, or share your information with third parties for marketing purposes.
        </p>
        <h2 className={styles["privacy-section-heading"]}>Data Retention</h2>
        <p className={styles["privacy-body"]}>
          We retain submitted contact information for up to 24 months from the date of submission, or until you request deletion, whichever comes first.
        </p>
        <h2 className={styles["privacy-section-heading"]}>Your Rights</h2>
        <p className={styles["privacy-body"]}>
          You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@ridgewayassay.com. We will respond within 30 days.
        </p>
        <h2 className={styles["privacy-section-heading"]}>Contact</h2>
        <p className={styles["privacy-body"]}>
          For privacy-related inquiries, contact Ridgeway Assay at info@ridgewayassay.com or by mail at 1200 Prairie View Road, Salina, KS 67401.
        </p>
      </div>
    </main>
  );
}
