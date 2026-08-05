"use client";

import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import styles from "./CopyField.module.css";

export default function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — leave value selectable
    }
  }

  return (
    <div className={styles.field}>
      <span className={styles.label}>{label}</span>
      <div className={styles.control}>
        <span className={styles.value}>{value}</span>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
        >
          {copied ? <FaCheck /> : <FaRegCopy />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}
