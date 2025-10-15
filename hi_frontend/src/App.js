import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import './App.css';
import logo from './assets/images/logo.svg';
import img1 from './assets/images/placeholder1.jpg';
import img2 from './assets/images/placeholder2.jpg';
import img3 from './assets/images/placeholder3.jpg';
import img4 from './assets/images/placeholder4.jpg';
import photo1 from './assets/images/photo1.jpg';
import photo2 from './assets/images/photo2.jpg';
import photo3 from './assets/images/photo3.jpg';

// Utilities
const usePrefersDark = () => {
  const [prefersDark, setPrefersDark] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setPrefersDark(e.matches);
    if (media.addEventListener) {
      media.addEventListener('change', handler);
    } else {
      media.addListener(handler);
    }
    return () => {
      if (media.removeEventListener) media.removeEventListener('change', handler);
      else media.removeListener(handler);
    };
  }, []);
  return prefersDark;
};

const setFocusOn = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
};

// PUBLIC_INTERFACE
function ThemeToggle({ theme, onToggle }) {
  /** Accessible theme toggle button */
  return (
    <button
      className="btn btn-secondary"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={onToggle}
      title="Toggle theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}

// PUBLIC_INTERFACE
function Navbar({ onNav }) {
  /** Sticky navbar with anchor links and hamburger menu */
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#instructors', label: 'Instructors' },
    { href: '#photos', label: 'Photos' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    onNav(href);
  };
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <a className="brand" href="#hero" onClick={(e)=>handleNavClick(e,'#hero')}>
          <img src={logo} alt="Damsara Driving School logo" width="36" height="36" />
          Damsara Driving School
        </a>
        <div className="nav-links" aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e)=>handleNavClick(e,l.href)}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="btn btn-secondary" href="tel:+94112223344" aria-label="Call Damsara Driving School">
            📞 Call
          </a>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={()=>setOpen(o=>!o)}
          >
            ☰
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="container" role="menu" aria-label="Mobile navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} role="menuitem" onClick={(e)=>handleNavClick(e,l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// PUBLIC_INTERFACE
function Section({ id, title, subtitle, children }) {
  /** Reusable section wrapper with heading and subheading */
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-header">
          {title && <h2 className="section-title" id={`${id}-title`}>{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function Card({ children, as: Tag = 'div', className = '' }) {
  /** Simple Card primitive */
  return <Tag className={`card ${className}`}>{children}</Tag>;
}

// Icons (inline SVG)
const IconCar = ({ size=20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M5 11l1-3a3 3 0 012.83-2h6.34A3 3 0 0118 8l1 3v6a1 1 0 01-1 1h-1a2 2 0 01-4 0H11a2 2 0 01-4 0H6a1 1 0 01-1-1v-6zm2 1h10l-.62-1.86A1 1 0 0015.44 9H8.56a1 1 0 00-.94.64L7 12zm1 4a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/>
  </svg>
);
const IconBadge = ({ size=18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17 3H7a2 2 0 00-2 2v14l7-3 7 3V5a2 2 0 00-2-2z"/></svg>
);

// Sections
function Hero() {
  return (
    <div className="hero" id="hero">
      <a className="skip-link" href="#main" onClick={(e)=>{ /* leave anchor default */ }}>Skip to content</a>
      <div className="container section">
        <div className="hero-grid">
          <div>
            <span className="badge"><IconBadge/> Trusted by 1,500+ learners</span>
            <h1 className="hero-title">Master the Road with a Premium Driving Experience</h1>
            <p className="hero-text">
              Patient, certified instructors. Modern, safety‑equipped vehicles. Flexible times that fit your life.
              Learn safely, feel confident, and pass with ease.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contact" aria-label="Book a lesson">Book a Lesson</a>
              <a className="btn btn-secondary" href="tel:+94112223344" aria-label="Call now">📞 Call Now</a>
            </div>
          </div>
          <div className="hero-media" aria-hidden="true">
            <img src={img1} alt="" className="tall" loading="lazy" />
            <img src={img2} alt="" className="wide" loading="lazy" />
            <img src={img3} alt="" className="wide" loading="lazy" />
            <img src={img4} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" title="About Us" subtitle="Elegant instruction. Outstanding pass rates. A focus on safety.">
      <div className="grid-3">
        <Card>
          <h3>Certified & Patient</h3>
          <p>Our licensed instructors are calm, supportive, and skilled at guiding beginners and refresher learners alike.</p>
        </Card>
        <Card>
          <h3>Modern, Safe Fleet</h3>
          <p>Train in comfortable vehicles with the latest safety features, kept meticulously maintained for your peace of mind.</p>
        </Card>
        <Card>
          <h3>Flexible to Your Schedule</h3>
          <p>Morning, evening, and weekend sessions—designed around your routine so learning is effortless.</p>
        </Card>
      </div>
    </Section>
  );
}

function Services() {
  const items = [
    { title: 'Learner Permit Support', desc: 'Guidance to obtain your learner’s—paperwork and preparation made simple.', icon: <IconCar/> },
    { title: 'Manual & Automatic Lessons', desc: 'Personalised lessons in your preferred transmission to build safe habits.', icon: <IconCar/> },
    { title: 'Mock Test & Test Prep', desc: 'Realistic practice and tips so you arrive confident on test day.', icon: <IconCar/> },
    { title: 'Fast‑Track Packages', desc: 'Accelerated plans to get you ready sooner—without compromising safety.', icon: <IconCar/> },
    { title: 'Refresher Courses', desc: 'Targeted sessions to rebuild confidence and polish your skills.', icon: <IconCar/> },
    { title: 'Pickup & Drop‑off', desc: 'Convenient pickups for lessons and support on test day.', icon: <IconCar/> },
  ];
  return (
    <Section id="services" title="Services" subtitle="Tailored programs for every stage of your driving journey.">
      <div className="grid-3">
        {items.map(s => (
          <Card key={s.title}>
            <div className="badge" aria-hidden="true">{s.icon} Popular</div>
            <h3 style={{marginTop: 12}}>{s.title}</h3>
            <p>{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Instructors() {
  const instructors = [
    { name: 'Nimal Perera', role: 'Senior Instructor', img: img2 },
    { name: 'Sajini Fernando', role: 'Instructor', img: img3 },
    { name: 'Kasun Jay', role: 'Instructor', img: img4 },
  ];
  return (
    <Section id="instructors" title="Our Instructors" subtitle="Certified, friendly, and dedicated to your success.">
      <div className="grid-3">
        {instructors.map((i)=>(
          <Card key={i.name}>
            <img src={i.img} alt={`${i.name}, ${i.role}`} loading="lazy" style={{borderRadius:'12px', marginBottom:12}}/>
            <h3>{i.name}</h3>
            <p className="section-subtitle" style={{margin: 0}}>{i.role} • Patient, safety‑first coaching</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}


// PUBLIC_INTERFACE
function Photos() {
  /** Photos section displaying user-provided images in an elegant grid */
  const photos = [
    { src: photo1, alt: 'Damsara Driving School photo 1' },
    { src: photo2, alt: 'Damsara Driving School photo 2' },
    { src: photo3, alt: 'Damsara Driving School photo 3' },
  ];
  return (
    <Section id="photos" title="Photos" subtitle="Capturing moments from our driving school community.">
      <div className="photos-grid">
        {photos.map((photo, idx) => (
          <div key={idx} className="photo-item">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'LKR 8,500', features: ['3 Lessons', 'Essential test guidance', 'Flexible timings'], badge: 'Popular' },
    { name: 'Standard', price: 'LKR 15,900', features: ['6 Lessons', 'Mock test session', 'Priority booking'], badge: 'Best Value' },
    { name: 'Premium', price: 'LKR 29,900', features: ['12 Lessons', 'Mock + pickup/drop‑off', 'Test‑day support'], badge: 'Comprehensive' },
  ];
  return (
    <Section id="pricing" title="Pricing" subtitle="Simple, transparent plans—choose what fits you best.">
      <div className="grid-3">
        {tiers.map(t=>(
          <Card key={t.name}>
            <span className="tier-badge">{t.badge}</span>
            <h3 style={{margin:'10px 0 6px'}}>{t.name}</h3>
            <p style={{fontSize:24, fontWeight:800, margin:'0 0 10px'}}>{t.price}</p>
            <ul style={{paddingLeft:18, marginTop:0}}>
              {t.features.map(f=><li key={f} style={{marginBottom:6}}>{f}</li>)}
            </ul>
            <a href="#contact" className="btn btn-primary" aria-label={`Select ${t.name} plan`}>
              Choose Plan
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!/\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) e.message = 'Please include a few details (10+ characters).';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      setSuccess('Thank you—your enquiry has been received. We’ll be in touch shortly.');
      setForm({ name:'', email:'', phone:'', message:'' });
      setErrors({});
    } else {
      setSuccess('');
    }
  };

  return (
    <Section id="contact" title="Contact Us" subtitle="Have a question or ready to start? We’re here to help.">
      <div className="grid-3">
        <Card className="">
          <form onSubmit={onSubmit} noValidate aria-describedby="contact-help">
            <p id="contact-help" className="section-subtitle">All fields are required.</p>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="e.g., Anika Perera" value={form.name}
                     onChange={(e)=>setForm({...form, name:e.target.value})} required aria-invalid={!!errors.name}/>
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email}
                     onChange={(e)=>setForm({...form, email:e.target.value})} required aria-invalid={!!errors.email}/>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+94 ..." value={form.phone}
                     onChange={(e)=>setForm({...form, phone:e.target.value})} required aria-invalid={!!errors.phone}/>
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="I’d like to book a mock test next week..." value={form.message}
                        onChange={(e)=>setForm({...form, message:e.target.value})} required aria-invalid={!!errors.message}/>
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {success && <p role="status" style={{marginTop:12}}>{success}</p>}
          </form>
        </Card>
        <Card>
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> <a href="tel:+94112223344">+94 11 222 3344</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@damsaradrive.com">info@damsaradrive.com</a></p>
          <p><strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka</p>
          <p><strong>Hours:</strong> Mon–Sat 8:00–18:00</p>
          <div style={{display:'flex', gap:10, marginTop:8}}>
            <a className="btn btn-secondary" href="#hero" aria-label="Visit our Facebook page">Facebook</a>
            <a className="btn btn-secondary" href="#hero" aria-label="Visit our Instagram profile">Instagram</a>
          </div>
        </Card>
        <Card>
          <h3>Why Choose Us</h3>
          <ul>
            <li>Certified, patient instructors</li>
            <li>High first‑time pass rates</li>
            <li>Modern cars with advanced safety</li>
            <li>Flexible times and easy booking</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <img src={logo} alt="" aria-hidden="true" />
            <strong>Damsara Driving School</strong>
          </div>
          <p className="section-subtitle">Premium instruction for safe, confident drivers.</p>
          <small>© {new Date().getFullYear()} Damsara Driving School. All rights reserved.</small>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="tel:+94112223344">+94 11 222 3344</a></p>
          <p><a href="mailto:info@damsaradrive.com">info@damsaradrive.com</a></p>
        </div>
        <div>
          <h4>Visit</h4>
          <p>123 Main Street</p>
          <p>Colombo, Sri Lanka</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>Mon–Sat: 8:00–18:00</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </footer>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Main single-page app for Damsara Driving School */
  const prefersDark = usePrefersDark();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return prefersDark ? 'dark' : 'light';
  });
  const mainRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
    document.title = 'Damsara Driving School | Master the Road with Confidence';
  }, [theme]);

  useEffect(() => {
    // sync with system change when user hasn't set explicit preference
    const saved = localStorage.getItem('theme');
    if (saved !== 'light' && saved !== 'dark') {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [prefersDark]);

  const onToggleTheme = () => {
    setTheme((t)=> t === 'dark' ? 'light' : 'dark');
  };

  const handleNav = (href) => {
    const id = href.replace('#','');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(()=> setFocusOn(id), 400);
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar onNav={handleNav} />
      <Hero />
      <main id="main" ref={mainRef} tabIndex="-1">
        <About />
        <Services />
        <Instructors />
        <Photos />
        <Pricing />
        <Contact />
      </main>
      <div className="container" style={{display:'flex', justifyContent:'flex-end', padding:'16px 0'}}>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <Footer />
    </>
  );
}

export default App;
