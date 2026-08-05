"use client";

import { useState } from "react";
import { SITE } from "../_lib/constants";
import styles from "./ContactForm.module.css";

const WHATSAPP_NUMBER = `254${SITE.phone[0].slice(1)}`;
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function buildMessage(data) {
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const message = data.get("message") || "";
    return [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("sending");

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("sent");
          return;
        }
      } catch {
        // fall through to WhatsApp delivery
      }
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildMessage(data)
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>Thank You!</p>
        <p className={styles.successDesc}>
          {FORMSPREE_ID
            ? "Your message has been received. We'll get back to you soon."
            : "WhatsApp has opened with your message — press Send to deliver it. Karibu!"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          Full Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
        />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
        />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="07XX XXX XXX"
        />
      </div>

      <div className={styles.row}>
        <label className={styles.label} htmlFor="message">
          Message / I want to volunteer
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          required
          placeholder="Tell us how you'd like to get involved..."
          rows={5}
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
