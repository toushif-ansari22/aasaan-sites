import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "./content";

export function Reveal({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return children;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ContactForm() {
  const [f, setF] = useState({ name: "", type: "Coaching centre", note: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault();
    const m = `Hi! I'm ${f.name}. I run a ${f.type}. ${f.note}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`, "_blank", "noopener");
  };
  return (
    <section id="contact" className="wrap sec">
      <h2>Tell us about your business</h2>
      <form className="form" onSubmit={send}>
        <label>Your name
          <input required value={f.name} onChange={set("name")} placeholder="e.g. Rahul Sharma" />
        </label>
        <label>Type of business
          <select value={f.type} onChange={set("type")}>
            <option>Coaching centre</option>
            <option>Clinic</option>
            <option>Salon</option>
            <option>Kirana or retail shop</option>
            <option>Restaurant or cafe</option>
            <option>Other</option>
          </select>
        </label>
        <label>Anything we should know? (optional)
          <textarea value={f.note} onChange={set("note")} placeholder="Your services, city, or what you want on the website" />
        </label>
        <button className="btn" type="submit">Send on WhatsApp</button>
        <small>This opens WhatsApp with your message ready to send.</small>
      </form>
    </section>
  );
}
