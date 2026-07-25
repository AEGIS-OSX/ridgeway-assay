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
            Ridgeway reduced our testing turnaround by three days during the peak spring window. The accreditation codes on every report give our members the confidence they need for precision application.
            <cite className={styles["pull-cite"]}>Operations Manager, Tri-County Ag Co-op, Nebraska.</cite>
          </blockquote>
        </div>
        <div>
          <ProjectImage id="social_proof" className={styles["social-proof-img"]} alt="Prairie grain co-operative field at dusk" />
        </div>
      </div>
    </motion.section>
  );
}
