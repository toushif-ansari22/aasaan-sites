import { motion, useReducedMotion } from "motion/react";
import { site, features, quotes, plans } from "./content";
import { steps, faqs } from "./extra";
import { Reveal, ContactForm } from "./more";

const wa = (m) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(m)}`;

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav">
        <a className="brand" href="#top">{site.brand}</a>
        <nav aria-label="Main">
          <a href="#features">What you get</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a className="btn small" href={wa(site.msg)}>WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const up = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: "easeOut" } };
  return (
    <section id="top" className="hero wrap">
      <div>
        <motion.h1 {...up(0)}>{site.headline}</motion.h1>
        <motion.p className="lead" {...up(0.15)}>{site.sub}</motion.p>
        <motion.a className="btn" href={wa(site.msg)} {...up(0.3)}>{site.cta}</motion.a>
      </div>
      <motion.div
        className="mock"
        aria-hidden="true"
        {...(reduce ? {} : { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.25 } })}
      >
        <div className="bar"><i /><i /><i /></div>
        <div className="body">
          <b style={{ width: "55%", height: 22, background: "var(--blue)" }} />
          <b style={{ width: "90%" }} /><b style={{ width: "75%" }} />
          <div className="chat">Message us on WhatsApp</div>
        </div>
        <motion.div
          className="stamp"
          {...(reduce ? {} : { initial: { scale: 0, rotate: -20 }, animate: { scale: 1, rotate: -6 }, transition: { type: "spring", delay: 0.9 } })}
        >{site.tag}</motion.div>
      </motion.div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="wrap sec">
      <h2>What you get</h2>
      <ul className="rows">
        {features.map((f) => (<li key={f.t}><h3>{f.t}</h3><p>{f.d}</p></li>))}
      </ul>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="wrap sec">
      <h2>How it works</h2>
      <ol className="steps">
        {steps.map((s) => (<li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>))}
      </ol>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="wrap sec">
      <h2>What clients say</h2>
      <div className="quotes">
        {quotes.map((x) => (<figure key={x.w}><blockquote>{x.q}</blockquote><figcaption>{x.w}</figcaption></figure>))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="wrap sec">
      <h2>Clear pricing, no hidden costs</h2>
      <div className="plans">
        {plans.map((p) => (
          <article key={p.n} className={"plan" + (p.pop ? " pop" : "")}>
            <h3>{p.n}</h3>
            <div className="price">{p.p}</div>
            <p className="pd">{p.d}</p>
            <ul>{p.i.map((i) => <li key={i}>{i}</li>)}</ul>
            <a className={p.pop ? "btn dark" : "btn"} href={wa(`Hi! I'd like to know more about the ${p.n} plan.`)}>Ask about this plan</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="wrap sec faq">
      <h2>Common questions</h2>
      {faqs.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <h2>The first chat is free.</h2>
        <p>Tell us about your business and we'll suggest the plan that fits.</p>
        <a className="btn sun" href={wa(site.msg)}>{site.cta}</a>
        <small>© {new Date().getFullYear()} {site.brand} · <a href={`mailto:${site.email}`}>{site.email}</a></small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Features /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Reveal><Pricing /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><ContactForm /></Reveal>
      </main>
      <Footer />
      <a className="float" href={wa(site.msg)} aria-label="Chat on WhatsApp">WhatsApp</a>
    </>
  );
}
