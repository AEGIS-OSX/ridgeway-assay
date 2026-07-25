"use client";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";
import styles from "./Capabilities.module.css";

export default function Capabilities() {
  const animationProps = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className={styles["capabilities-section"]} id="capabilities">
      <div className={styles["capabilities-inner"]}>
        <dl className={styles["capabilities-list"]}>
          {/* Item 1: Accreditation */}
          <motion.div className={styles["cap-item"]} {...animationProps}>
            <div>
              <dt>
                <span className="label-ui cap-dt-label">ACCREDITATION</span>
                <h3 className={styles["cap-heading"]}>Accredited lab routing</h3>
              </dt>
              <dd>
                <p className={styles["cap-body"]}>
                  Every sample is routed through labs maintaining <span className="mono">ISO 17025</span> and <span className="mono">A2LA</span> certifications. We ensure your data meets the rigorous standards required for state and federal compliance.
                </p>
              </dd>
            </div>
            <ProjectImage 
              id="feature_1" 
              className={styles["cap-img"]} 
              alt="Soil sample bag and brass probe on a Field Linen surface" 
            />
          </motion.div>

          {/* Item 2: Logistics */}
          <motion.div className={`${styles["cap-item"]} ${styles["cap-item--image-left"]}`} {...animationProps}>
            <ProjectImage 
              id="feature_2" 
              className={styles["cap-img"]} 
              alt="Chain-of-custody document and soil sample vial" 
            />
            <div>
              <dt>
                <span className="label-ui cap-dt-label">LOGISTICS</span>
                <h3 className={styles["cap-heading"]}>Chain-of-custody tracking</h3>
              </dt>
              <dd>
                <p className={styles["cap-body"]}>
                  From the moment a sample is collected to the final report delivery, our system maintains a verifiable audit trail. Track your bulk shipments in real-time with prepaid logistics and collection kits.
                </p>
              </dd>
            </div>
          </motion.div>

          {/* Item 3: Analysis */}
          <motion.div className={styles["cap-item"]} {...animationProps}>
            <div>
              <dt>
                <span className="label-ui cap-dt-label">ANALYSIS</span>
                <h3 className={styles["cap-heading"]}>Certified nutrient reports</h3>
              </dt>
              <dd>
                <p className={styles["cap-body"]}>
                  Receive standardized reports for <span className="mono">N-P-K</span>, <span className="mono">pH</span>, and micronutrient levels. Our data formats integrate directly with existing co-op management software for immediate application.
                </p>
              </dd>
            </div>
            <ProjectImage 
              id="feature_3" 
              className={styles["cap-img"]} 
              alt="Certified soil reports and brass soil probe, top-down macro" 
            />
          </motion.div>
        </dl>
      </div>
    </section>
  );
}
