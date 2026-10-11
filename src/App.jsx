import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail, Phone, Github, Download, MessageCircle,
  ChevronDown, ExternalLink, Menu, X, Code2,
  Shield, Palette, Terminal, Video
} from './icons';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

/* ========================================
   DATA — SAYAOGO Walid
   ======================================== */

const PROFILE = {
  name: 'SAYAOGO Walid',
  title: 'Développeur & Hacker Éthique',
  initials: 'SW',
  location: 'Burkina Faso',
  yearsExp: '3+',
  projects: '15+',
  bio: `Étudiant passionné en informatique, je navigue entre le développement web, la cybersécurité et la création de contenu. Mon approche mêle créativité technique et rigueur — du vibe coding aux audits de sécurité, je construis des solutions qui comptent. Ma vision : démocratiser la tech en Afrique francophone à travers le code et le contenu éducatif.`,
  experiences: [
    {
      period: '2025 — Présent',
      title: 'Développeur Full-Stack Freelance',
      company: 'Indépendant',
      description: 'Conception et développement d\'applications web modernes et de sites vitrines sur mesure. Utilisation de React, Node.js et intégration d\'outils IA pour du vibe coding efficace.',
    },
    {
      period: '2024 — 2025',
      title: 'Consultant Cybersécurité',
      company: 'Missions Freelance',
      description: 'Réalisation de tests de pénétration, audits de sécurité et analyses de vulnérabilités pour des startups et PME. Rédaction de rapports de sécurité détaillés.',
    },
    {
      period: '2024 — Présent',
      title: 'Créateur de Contenu Tech',
      company: 'Réseaux Sociaux',
      description: 'Production de contenu éducatif sur le développement web, la programmation et la cybersécurité. Vulgarisation technique pour la communauté tech francophone.',
    },
  ],
  skills: [
    { name: 'Vibe Coding', percentage: 95, icon: Terminal },
    { name: 'Développement Web', percentage: 90, icon: Code2 },
    { name: 'Programmation', percentage: 85, icon: Code2 },
    { name: 'Hacking Éthique', percentage: 80, icon: Shield },
    { name: 'Création de Contenu', percentage: 75, icon: Video },
  ],
  education: [
    {
      year: 'En cours',
      degree: 'Licence 3 — Informatique',
      institution: 'Université, Burkina Faso',
    },
    {
      year: '2024',
      degree: 'Baccalauréat',
      institution: 'Côte d\'Ivoire',
    },
    {
      year: '2020',
      degree: 'BEPC',
      institution: 'Côte d\'Ivoire',
    },
  ],
  contact: {
    email: 'elyosdotcom@gmail.com',
    phone: '+226 75 00 58 33',
    github: 'https://github.com/elyosdotcom',
  },
};

/* ========================================
   NOISE OVERLAY COMPONENT
   ======================================== */

function NoiseOverlay() {
  return (
    <>
      <svg style={{ position: 'fixed', width: 0, height: 0 }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div className="noise-overlay" />
    </>
  );
}

/* ========================================
   NAVBAR — La Signature Flottante
   ======================================== */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Formation', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${scrolled
          ? 'glass rounded-full px-6 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent px-6 py-4'
        }`}
      style={{ maxWidth: '90vw' }}
    >
      <div className="flex items-center gap-8">
        {/* Logo / Initials */}
        <a href="#hero" className="font-mono text-sm font-semibold text-accent hover-lift">
          {PROFILE.initials}
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium animated-underline transition-colors duration-300
                ${scrolled ? 'text-ghost/80 hover:text-ghost' : 'text-ghost/60 hover:text-ghost'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/cv-walid-sayaogo.pdf"
          download
          className="hidden md:flex items-center gap-2 btn-magnetic bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-accent/30"
        >
          <Download size={14} />
          Télécharger CV
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-ghost/80 hover:text-ghost transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-3xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ghost/80 hover:text-ghost text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv-walid-sayaogo.pdf"
            download
            className="flex items-center justify-center gap-2 btn-magnetic bg-accent text-white text-sm font-semibold px-5 py-3 rounded-full mt-2"
          >
            <Download size={14} />
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}

/* ========================================
   HERO — La Première Impression
   ======================================== */

function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const avatarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(avatarRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        0.2
      )
      .fromTo(nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.4
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6
      )
      .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        0.8
      )
      .fromTo(ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        1.0
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        1.4
      );

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-hero overflow-hidden"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Avatar */}
        <div
          ref={avatarRef}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-light border-2 border-accent/40 flex items-center justify-center mb-8 shadow-lg shadow-accent/20"
          style={{ opacity: 0 }}
        >
          <span className="font-sans text-3xl md:text-4xl font-bold text-accent">
            {PROFILE.initials}
          </span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-ghost text-glow-strong"
          style={{ opacity: 0 }}
        >
          {PROFILE.name}
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="font-dramatic italic text-2xl sm:text-3xl md:text-4xl text-accent-light mt-4 md:mt-6"
          style={{ opacity: 0 }}
        >
          {PROFILE.title}
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10"
        >
          <span className="font-mono text-sm text-ghost/60" style={{ opacity: 0 }}>
            <span className="text-accent font-semibold">{PROFILE.yearsExp}</span> ans d'expérience
          </span>
          <span className="hidden md:block text-ghost/20">|</span>
          <span className="font-mono text-sm text-ghost/60" style={{ opacity: 0 }}>
            <span className="text-accent font-semibold">{PROFILE.projects}</span> projets
          </span>
          <span className="hidden md:block text-ghost/20">|</span>
          <span className="font-mono text-sm text-ghost/60" style={{ opacity: 0 }}>
            📍 {PROFILE.location}
          </span>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-12"
        >
          <a
            href="/cv-walid-sayaogo.pdf"
            download
            className="btn-magnetic bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full flex items-center gap-2.5 shadow-lg shadow-accent/30 text-base"
            style={{ opacity: 0 }}
          >
            <Download size={18} />
            Télécharger CV
          </a>
          <a
            href="#contact"
            className="btn-magnetic border border-ghost/20 hover:border-accent/50 text-ghost/80 hover:text-ghost font-semibold px-8 py-3.5 rounded-full flex items-center gap-2.5 text-base transition-colors duration-300"
            style={{ opacity: 0 }}
          >
            <MessageCircle size={18} />
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ghost/30"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

/* ========================================
   ABOUT — Le Manifeste Personnel
   ======================================== */

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-title',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo('.about-text',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo('.about-line',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Title */}
          <div className="about-title md:w-2/5 flex-shrink-0" style={{ opacity: 0 }}>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
              01 — À propos
            </span>
            <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-ghost leading-tight">
              À propos<br />
              <span className="text-accent">de moi</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="about-line hidden md:block w-px self-stretch bg-accent/30 origin-top" style={{ transform: 'scaleY(0)' }} />

          {/* Text */}
          <div className="about-text md:w-3/5" style={{ opacity: 0 }}>
            <p className="text-lg md:text-xl text-ghost/75 leading-relaxed font-light">
              {PROFILE.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'Cybersécurité', 'IA'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-4 py-2 rounded-full border border-accent/20 text-accent/80 hover:bg-accent/10 transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================================
   EXPERIENCE — La Timeline Vivante
   ======================================== */

function ExperienceCard({ experience, index, side }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const direction = side === 'left' ? -60 : 60;

      gsap.fromTo(cardRef.current,
        { opacity: 0, x: direction },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [side]);

  return (
    <div
      className={`relative flex items-center mb-12 md:mb-16
        ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
        flex-row
      `}
    >
      {/* Timeline Dot */}
      <div className="timeline-dot hidden md:block" />

      {/* Card */}
      <div
        ref={cardRef}
        className={`card-hover bg-surface-light rounded-[2rem] p-6 md:p-8 border border-ghost/5
          ${side === 'left' ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}
          ml-10 md:ml-0 md:w-[calc(50%-40px)] w-full
        `}
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-xs text-accent tracking-wider">
          {experience.period}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-ghost mt-2">
          {experience.title}
        </h3>
        <p className="text-sm text-ghost/50 mt-1 font-medium">
          {experience.company}
        </p>
        <p className="text-base text-ghost/65 mt-4 leading-relaxed font-light">
          {experience.description}
        </p>
      </div>

      {/* Mobile dot */}
      <div className="timeline-dot md:hidden" style={{ top: '1.5rem' }} />
    </div>
  );
}

function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-gradient-dark"
    >
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            02 — Expérience
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-ghost">
            Mon <span className="text-accent">parcours</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          {PROFILE.experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              experience={exp}
              index={i}
              side={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   SKILLS — Le Tableau de Bord
   Pattern 2: Grille de Maîtrise
   ======================================== */

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const countRef = useRef(null);
  const circleRef = useRef(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Counter animation
      const counter = { val: 0 };
      gsap.to(counter, {
        val: skill.percentage,
        duration: 2,
        ease: 'power2.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.val) + '%';
          }
        },
      });

      // Circle animation
      gsap.fromTo(circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: circumference - (skill.percentage / 100) * circumference,
          duration: 2,
          ease: 'power2.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [skill.percentage, index, circumference]);

  const Icon = skill.icon;

  return (
    <div
      ref={cardRef}
      className="card-hover bg-surface-light rounded-[2rem] p-6 md:p-8 border border-ghost/5 flex flex-col items-center text-center"
      style={{ opacity: 0 }}
    >
      {/* Circular Progress */}
      <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50" cy="50" r={radius}
            className="circular-progress-bg"
          />
          <circle
            ref={circleRef}
            cx="50" cy="50" r={radius}
            className="circular-progress-fill"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            ref={countRef}
            className="font-mono text-xl md:text-2xl font-bold text-ghost"
          >
            0%
          </span>
        </div>
      </div>

      {/* Skill Info */}
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className="text-accent" />
        <h3 className="text-base md:text-lg font-semibold text-ghost">
          {skill.name}
        </h3>
      </div>
    </div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            03 — Compétences
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-ghost">
            Tableau de <span className="text-accent">bord</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PROFILE.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   EDUCATION — Les Fondations
   ======================================== */

function Education() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding bg-gradient-dark"
    >
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-24" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            04 — Formation
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-ghost">
            Les <span className="text-accent">fondations</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div ref={cardsRef} className="max-w-2xl mx-auto flex flex-col gap-6">
          {PROFILE.education.map((edu, i) => (
            <div
              key={i}
              className="card-hover bg-surface-light rounded-[2rem] p-6 md:p-8 border border-ghost/5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ opacity: 0 }}
            >
              {/* Year Badge */}
              <div className="flex-shrink-0 font-mono text-sm text-accent bg-accent/10 px-4 py-2 rounded-full font-semibold">
                {edu.year}
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-ghost">
                  {edu.degree}
                </h3>
                <p className="text-sm text-ghost/50 mt-1">
                  {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   CONTACT — Le Pont
   ======================================== */

function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (linksRef.current) {
        gsap.fromTo(linksRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: linksRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: PROFILE.contact.email,
      href: `mailto:${PROFILE.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: PROFILE.contact.phone,
      href: `tel:${PROFILE.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@elyosdotcom',
      href: PROFILE.contact.github,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-surface relative overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            05 — Contact
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-ghost">
            Travaillons <span className="text-accent">ensemble</span>
          </h2>
          <p className="text-ghost/50 text-lg mt-6 max-w-lg mx-auto font-light">
            Un projet en tête ? Une idée à concrétiser ? N'hésitez pas à me contacter.
          </p>
        </div>

        {/* Contact Links */}
        <div ref={linksRef} className="max-w-2xl mx-auto flex flex-col gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-hover group bg-surface-light rounded-[2rem] p-5 md:p-6 border border-ghost/5 flex items-center gap-5 hover:border-accent/20 transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-ghost/40 uppercase tracking-wider">
                    {link.label}
                  </span>
                  <p className="text-base md:text-lg text-ghost font-medium mt-0.5">
                    {link.value}
                  </p>
                </div>
                <ExternalLink size={16} className="text-ghost/20 group-hover:text-accent/60 transition-colors duration-300" />
              </a>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center mt-12">
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="btn-magnetic inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-full shadow-lg shadow-accent/30 text-lg transition-colors duration-300"
          >
            <Mail size={20} />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================================
   FOOTER — Le Pied de Page
   ======================================== */

function Footer() {
  return (
    <footer className="bg-primary rounded-t-[3rem] md:rounded-t-[4rem] py-12 px-6">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name & Credit */}
        <div className="text-center md:text-left">
          <p className="text-ghost/80 font-semibold text-lg">
            {PROFILE.name}
          </p>
          <p className="text-ghost/30 text-sm mt-1">
            Fait avec le <span className="text-accent">vibe coding</span> — {new Date().getFullYear()}
          </p>
        </div>

        {/* Online Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot" />
          <span className="font-mono text-xs text-ghost/50 tracking-wider">
            Disponible pour des projets
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ========================================
   MAIN APP
   ======================================== */

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
