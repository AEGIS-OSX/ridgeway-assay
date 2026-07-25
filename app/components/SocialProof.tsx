"use client";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={styles["social-proof-section"]}
    >
      <div className={styles["social-proof-inner"]}>
        <div className={styles["social-proof-quote"]}>
          <blockquote className={styles["pull-quote"]}>
            Ridgeway&apos;s certified reports gave our board the documentation they needed to approve a $2.4M soil remediation program. The chain-of-custody trail was airtight.
            <cite className={styles["pull-cite"]}>Marcus Teller, Operations Director, Prairie Grain Co-operative</cite>
          </blockquote>
        </div>
        <div>
          <ProjectImage id="social_proof" className={styles["social-proof-img"]} alt="Prairie grain co-operative field at dusk" />
        </div>
      </div>
    </motion.section>
  );
}
