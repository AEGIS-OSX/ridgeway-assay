"use client";
import { useState } from "react";
import styles from "./QuoteForm.module.css";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise<void>((r) => setTimeout(r, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className={styles["quote-section"]}>
      <div className={styles["quote-inner"]}>
        <h2 className={styles["quote-heading"]}>Request a Quote</h2>
        {status === "success" ? (
          <p className={styles["form-success"]}>
            {`Your request has been received. We'll follow up within one business day.`}
          </p>
        ) : (
          <>
            <p className={styles["quote-subhead"]}>
              {"We respond within one business day. All fields marked required."}
            </p>
            <form onSubmit={handleSubmit} className={styles["quote-form"]}>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                disabled={status === "submitting"}
                className={styles["form-input"]}
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                disabled={status === "submitting"}
                className={styles["form-input"]}
              />
              <input
                type="text"
                name="organization"
                placeholder="Co-operative or organization name"
                required
                disabled={status === "submitting"}
                className={styles["form-input"]}
              />
              <input
                type="text"
                name="sample_count"
                placeholder="Estimated sample count"
                disabled={status === "submitting"}
                className={styles["form-input"]}
              />
              <textarea
                name="notes"
                placeholder="Additional notes (optional)"
                rows={4}
                disabled={status === "submitting"}
                className={styles["form-textarea"]}
              />
              
              {status === "error" && (
                <p className={styles["form-error"]} role="alert">
                  {"Something went wrong. Please try again or call 800-555-0199."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={styles["form-submit"]}
              >
                {status === "submitting" ? "Submitting…" : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
