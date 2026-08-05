"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaCommentDots,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SITE, SOCIAL } from "../_lib/constants";
import styles from "./Chatbot.module.css";

const KB = [
  {
    keywords: ["hello", "hi", "hey", "jambo", "habari", "mambo", "sasa", "jump"],
    answer:
      "Jambo! Karibu. I'm the campaign assistant. Ask me about Austine, his manifesto, events, or how to volunteer.",
  },
  {
    keywords: [
      "who is austine",
      "who is mr",
      "who are you",
      "candidate",
      "aspirant",
      "tell me about austine",
      "about him",
    ],
    answer:
      "Austine Omondi is an MCA aspirant for Karura Ward in the 2027 Kenyan General Elections. He's an educator, youth leader, environmentalist, and philanthropist, and the founder of Brilliant Angels CBO in Githogoro.",
  },
  {
    keywords: ["mca", "county assembly", "what does mca", "member of county"],
    answer:
      "An MCA is a Member of County Assembly — the elected representative of a ward in the county assembly. Austine is running to represent Karura Ward in 2027.",
  },
  {
    keywords: ["manifesto", "promise", "policies", "agenda", "plan", "vision"],
    answer:
      "Austine's manifesto is built on 8 pillars: education & youth empowerment, environmental conservation, healthcare & social welfare, infrastructure & development, youth jobs & SME support, transparency & accountability, sports & talent, and community security. Read it on the Manifesto page.",
  },
  {
    keywords: ["event", "rally", "meeting", "registration", "id card"],
    answer:
      "The current event is the National ID Registration Drive in Karura Ward. Check the Events page for the latest updates and photos.",
  },
  {
    keywords: ["election", "vote", "2027", "general", "when"],
    answer:
      "The Kenya General Elections are in August 2027. There's a live countdown on the homepage so we never lose sight of the goal!",
  },
  {
    keywords: ["whatsapp", "group", "wa group"],
    answer:
      "Join the official WhatsApp group to get campaign updates, rally info, and volunteer opportunities. Just tap the green 'Join WhatsApp Group' button on the home or contact page.",
  },
  {
    keywords: ["volunteer", "support", "join", "help", "get involved"],
    answer:
      "Karibu sana! Every hand counts. Head to the Contact page to sign up as a volunteer, or join the WhatsApp group to get involved right away.",
  },
  {
    keywords: ["where is karura", "karura ward", "location", "nairobi"],
    answer:
      "Karura Ward is in Nairobi, within Westlands Constituency. Austine is an MCA aspirant for this ward in the 2027 elections.",
  },
  {
    keywords: ["contact", "phone", "call", "email", "number", "reach"],
    answer: `You can reach the campaign on ${SITE.phone[0]} or ${SITE.phone[1]}, or email ${SITE.email}. Full details are on the Contact page.`,
  },
  {
    keywords: ["brilliant", "cbo", "school", "githogoro", "community"],
    answer:
      "Austine founded and chairs Brilliant Angels CBO, which runs a community school, the Sulwe Mentorship & Scholarship programme, and the Adopt a Child initiative in Githogoro. Visit brilliant-angel-cbo.vercel.app to learn more.",
  },
];

const QUICK_QUESTIONS = [
  "What is an MCA?",
  "What's your manifesto?",
  "How can I volunteer?",
  "Join WhatsApp group",
  "When are the elections?",
];

const GREETING =
  "Jambo! I'm the campaign assistant. Ask me about Austine, his manifesto, events, or how to volunteer.";

const HANDOFF =
  "I'm just a simple assistant and couldn't find the answer to that. The campaign team would love to help — tap the button below to chat with us on WhatsApp.";

function getReply(message) {
  const text = message.toLowerCase();
  for (const item of KB) {
    if (item.keywords.some((k) => text.includes(k))) return item.answer;
  }
  return null;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [handoff, setHandoff] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking, open]);

  function send(text) {
    const clean = text.trim();
    if (!clean || thinking) return;
    setMessages((m) => [...m, { role: "user", text: clean }]);
    setInput("");
    setHandoff(false);
    setThinking(true);

    setTimeout(() => {
      const reply = getReply(clean);
      if (reply) {
        setMessages((m) => [...m, { role: "bot", text: reply }]);
      } else {
        setMessages((m) => [...m, { role: "bot", text: HANDOFF }]);
        setHandoff(true);
      }
      setThinking(false);
    }, 500);
  }

  function openPanel() {
    setOpen(true);
    if (!started) {
      setStarted(true);
      setMessages([{ role: "bot", text: GREETING }]);
    }
  }

  const whatsappHref = `https://wa.me/254${SITE.phone[0].slice(
    1
  )}?text=${encodeURIComponent(input || "Hello! I have a question about the campaign.")}`;

  return (
    <>
      {open && (
        <div className={styles.panel} role="dialog" aria-label="Campaign assistant">
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <span className={styles.avatar}>
                <FaCommentDots />
              </span>
              <div>
                <p className={styles.headerTitle}>Campaign Assistant</p>
                <p className={styles.headerSub}>Karura Ward 2027</p>
              </div>
            </div>
            <button
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles.body}>
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? styles.msgUser : styles.msgBot}>
                {m.text}
              </div>
            ))}

            {thinking && (
              <div className={styles.msgBot}>
                <span className={styles.dots}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
            )}

            {handoff && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.handoff}
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            )}

            {messages.length <= 1 && (
              <div className={styles.quick}>
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} className={styles.quickBtn} onClick={() => send(q)}>
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            className={styles.inputRow}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              className={styles.input}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              aria-label="Type your question"
            />
            <button type="submit" className={styles.send} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <button
        className={`${styles.toggle} ${open ? styles.hide : ""}`}
        onClick={openPanel}
        aria-label="Open campaign assistant chat"
      >
        <FaCommentDots />
      </button>
    </>
  );
}
