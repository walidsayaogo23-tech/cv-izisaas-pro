import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail, Phone, Github, Download, MessageCircle,
  ChevronDown, ExternalLink, Menu, X, Code2,
  Shield, Terminal, Video, Sparkles, MapPin,
  Briefcase, CheckCircle2, ArrowUpRight
} from './icons';
import ContactModal from './ContactModal';
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
   NOISE OVERLAY
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
   NAVBAR — Responsive & Centered Mobile Menu
   ======================================== */

function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-4xl transition-all duration-300"
    >
      <div
        className={`flex items-center justify-between sm:justify-start gap-4 sm:gap-7 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass shadow-xl shadow-black/40 border border-amber-500/25 bg-[#10141f]/90'
            : 'bg-[#10141f]/70 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
      >
        {/* Logo / Initials */}
        <a
          href="#hero"
          className="flex items-center gap-2 group font-mono text-sm font-bold text-amber-400 hover-lift tracking-wider"
        >
          <span className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-300 text-xs shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
            {PROFILE.initials}
          </span>
          <span className="hidden min-[420px]:inline text-white/90 text-xs sm:text-sm font-sans font-semibold">
            Walid <span className="text-amber-400">S.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium animated-underline text-slate-300 hover:text-amber-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 gold-shimmer-btn text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles size={13} className="text-black" />
            Me contacter
          </button>

          <a
            href="/cv-walid-sayaogo.pdf"
            download
            className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full transition-colors"
            title="Télécharger le CV"
          >
            <Download size={13} className="text-amber-400" />
            <span className="hidden lg:inline">CV</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="gold-shimmer-btn text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-sm"
          >
            Contact
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 rounded-full bg-white/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:text-white transition-colors"
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown — Centered & Fully Responsive */}
      {menuOpen && (
        <div className="sm:hidden w-full mt-2.5 bg-[#0F131D]/95 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-5 shadow-2xl shadow-black/80 flex flex-col items-center text-center gap-3 animate-in fade-in zoom-in-95 duration-200">
          <div className="w-10 h-1 bg-amber-500/30 rounded-full mb-1" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="w-full py-2.5 text-slate-200 hover:text-amber-300 font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}

          <div className="w-full h-px bg-white/10 my-1" />

          {/* Mobile CTA Buttons */}
          <div className="w-full flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenContact();
              }}
              className="w-full gold-shimmer-btn text-black font-bold text-sm py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Sparkles size={15} />
              Me contacter (Formulaire)
            </button>

            <a
              href="/cv-walid-sayaogo.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="w-full bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-medium py-2.5 rounded-2xl flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <Download size={14} className="text-amber-400" />
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ========================================
   HERO — Golden Accents, Clean Stats & CTAs
   ======================================== */

function Hero({ onOpenContact }) {
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
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.4
      )
      .fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6
      )
      .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
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
        1.3
      );

      gsap.to(scrollIndicatorRef.current, {
        y: 8,
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-hero overflow-hidden"
    >
      {/* Ambient Gold Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none gold-pulse-ambient" />
      <div className="absolute bottom-1/4 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-amber-400/8 rounded-full blur-3xl pointer-events-none gold-pulse-ambient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
        
        {/* Avatar with Gold Accents */}
        <div
          ref={avatarRef}
          className="relative mb-6 sm:mb-8"
          style={{ opacity: 0 }}
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#151926] border-2 border-amber-400/60 flex items-center justify-center shadow-xl shadow-amber-500/20 relative group">
            <span className="font-sans text-3xl sm:text-4xl font-bold gold-gradient-text tracking-wider">
              {PROFILE.initials}
            </span>
            
            {/* Pulsing ring around avatar */}
            <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping opacity-25 pointer-events-none" />
          </div>

          {/* Floating Availability Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0E121B] border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg whitespace-nowrap">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-slate-200">Dispo pour missions</span>
          </div>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-white text-glow-strong"
          style={{ opacity: 0 }}
        >
          {PROFILE.name}
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="font-dramatic italic text-2xl sm:text-3xl md:text-4xl text-amber-300 mt-3 sm:mt-5 max-w-2xl"
          style={{ opacity: 0 }}
        >
          {PROFILE.title}
        </p>

        {/* Hero Bottom Elements: Perfectly Organized & Responsive Cards */}
        <div
          ref={statsRef}
          className="w-full max-w-2xl grid grid-cols-3 gap-2.5 sm:gap-4 mt-8 sm:mt-10"
        >
          {/* Stat 1 */}
          <div
            className="card-hover bg-[#131724]/80 border border-amber-500/20 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md shadow-md"
            style={{ opacity: 0 }}
          >
            <span className="block text-xl sm:text-3xl font-bold gold-gradient-text font-sans">
              {PROFILE.yearsExp}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-mono tracking-wide block mt-0.5">
              Ans d'expérience
            </span>
          </div>

          {/* Stat 2 */}
          <div
            className="card-hover bg-[#131724]/80 border border-amber-500/20 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md shadow-md"
            style={{ opacity: 0 }}
          >
            <span className="block text-xl sm:text-3xl font-bold gold-gradient-text font-sans">
              {PROFILE.projects}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-mono tracking-wide block mt-0.5">
              Projets livrés
            </span>
          </div>

          {/* Stat 3 */}
          <div
            className="card-hover bg-[#131724]/80 border border-amber-500/20 rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md shadow-md flex flex-col justify-center items-center"
            style={{ opacity: 0 }}
          >
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-amber-400" />
              <span className="text-sm sm:text-base font-bold text-white font-sans">
                Burkina
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-300 font-mono tracking-wide block mt-0.5">
              {PROFILE.location} & Remote
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mt-8 sm:mt-10 w-full max-w-md sm:max-w-none"
        >
          {/* Main CTA: Open Contact Form Modal */}
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto gold-shimmer-btn text-black font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/30 text-sm sm:text-base cursor-pointer hover:scale-105 active:scale-95 transition-all"
            style={{ opacity: 0 }}
          >
            <Sparkles size={18} className="text-black" />
            Me contacter (Mission & Devis)
          </button>

          {/* Secondary CTA: Download CV */}
          <a
            href="/cv-walid-sayaogo.pdf"
            download
            className="w-full sm:w-auto btn-magnetic border border-amber-500/30 hover:border-amber-400 bg-white/5 hover:bg-amber-500/10 text-white font-semibold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base transition-all"
            style={{ opacity: 0 }}
          >
            <Download size={18} className="text-amber-400" />
            Télécharger CV
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="mt-12 sm:mt-16 flex flex-col items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[11px] tracking-widest uppercase text-slate-400">
          Explorer
        </span>
        <ChevronDown size={18} className="text-amber-400" />
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
      className="section-padding bg-[#10131E]"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Title */}
          <div className="about-title md:w-2/5 flex-shrink-0" style={{ opacity: 0 }}>
            <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3 sm:mb-4 block font-semibold">
              01 — À propos
            </span>
            <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              À propos<br />
              <span className="gold-gradient-text">de moi</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="about-line hidden md:block w-px self-stretch bg-amber-500/30 origin-top" style={{ transform: 'scaleY(0)' }} />

          {/* Text & Tags */}
          <div className="about-text md:w-3/5" style={{ opacity: 0 }}>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light">
              {PROFILE.bio}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              {['React', 'Node.js', 'Python', 'Cybersécurité', 'Audit Web', 'IA & Vibe Coding'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-500/30 text-amber-300 bg-amber-500/5 hover:bg-amber-500/15 transition-colors duration-300 cursor-default"
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

function ExperienceCard({ experience, side }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const direction = side === 'left' ? -50 : 50;

      gsap.fromTo(cardRef.current,
        { opacity: 0, x: direction },
        {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [side]);

  return (
    <div
      className={`relative flex items-center mb-10 sm:mb-14 md:mb-16
        ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}
        flex-row
      `}
    >
      {/* Timeline Dot (Desktop) */}
      <div className="timeline-dot hidden md:block" />

      {/* Card */}
      <div
        ref={cardRef}
        className={`card-hover bg-[#141825] rounded-3xl sm:rounded-[2rem] p-5 sm:p-7 md:p-8 border border-amber-500/15
          ${side === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
          ml-8 md:ml-0 md:w-[calc(50%-36px)] w-full shadow-lg
        `}
        style={{ opacity: 0 }}
      >
        <span className="inline-block font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1 rounded-full font-semibold tracking-wider">
          {experience.period}
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-3">
          {experience.title}
        </h3>
        <p className="text-xs sm:text-sm text-amber-300/80 mt-1 font-medium">
          {experience.company}
        </p>
        <p className="text-sm sm:text-base text-slate-300 mt-3 sm:mt-4 leading-relaxed font-light">
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
        <div ref={titleRef} className="text-center mb-12 sm:mb-20" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3 block font-semibold">
            02 — Expérience
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-white">
            Mon <span className="gold-gradient-text">parcours</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          {PROFILE.experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              experience={exp}
              side={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================
   SKILLS — Grille de Maîtrise Dorée
   ======================================== */

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const countRef = useRef(null);
  const circleRef = useRef(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out',
          delay: index * 0.12,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      const counter = { val: 0 };
      gsap.to(counter, {
        val: skill.percentage,
        duration: 1.8,
        ease: 'power2.out',
        delay: index * 0.12,
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

      gsap.fromTo(circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: circumference - (skill.percentage / 100) * circumference,
          duration: 1.8,
          ease: 'power2.out',
          delay: index * 0.12,
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
      className={`card-hover bg-[#141825] rounded-3xl p-5 sm:p-6 md:p-8 border border-amber-500/15 flex flex-col items-center text-center shadow-lg ${
        index === 4 ? 'col-span-2 sm:col-span-1 max-w-[260px] sm:max-w-none mx-auto w-full' : ''
      }`}
      style={{ opacity: 0 }}
    >
      {/* Circular Progress */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-5">
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
            className="font-mono text-lg sm:text-xl md:text-2xl font-bold gold-gradient-text"
          >
            0%
          </span>
        </div>
      </div>

      {/* Skill Info */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
          <Icon size={14} />
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-white">
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
      className="section-padding bg-[#0E111B]"
    >
      <div className="container-custom">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-20" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3 block font-semibold">
            03 — Compétences
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-white">
            Tableau de <span className="gold-gradient-text">bord</span>
          </h2>
        </div>

        {/* Responsive Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
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
        <div ref={titleRef} className="text-center mb-12 sm:mb-20" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3 block font-semibold">
            04 — Formation
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-white">
            Les <span className="gold-gradient-text">fondations</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div ref={cardsRef} className="max-w-2xl mx-auto flex flex-col gap-4 sm:gap-5">
          {PROFILE.education.map((edu, i) => (
            <div
              key={i}
              className="card-hover bg-[#141825] rounded-3xl p-5 sm:p-7 border border-amber-500/15 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 shadow-lg"
              style={{ opacity: 0 }}
            >
              {/* Year Badge */}
              <div className="flex-shrink-0 font-mono text-xs sm:text-sm text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold">
                {edu.year}
              </div>

              {/* Info */}
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
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

function Contact({ onOpenContact }) {
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
      label: 'Email direct',
      value: PROFILE.contact.email,
      href: `mailto:${PROFILE.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone / WhatsApp',
      value: PROFILE.contact.phone,
      href: `tel:${PROFILE.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@walidsayaogo23-tech',
      href: PROFILE.contact.github,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#0D101A] relative overflow-hidden"
    >
      {/* Ambient Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16" style={{ opacity: 0 }}>
          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3 block font-semibold">
            05 — Contact
          </span>
          <h2 className="font-dramatic italic text-4xl sm:text-5xl md:text-6xl text-white">
            Travaillons <span className="gold-gradient-text">ensemble</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-lg mx-auto font-light leading-relaxed">
            Un projet en tête ? Une mission à confier ou un audit ? Contactez-moi directement ou lancez votre demande.
          </p>
        </div>

        {/* Contact Links */}
        <div ref={linksRef} className="max-w-2xl mx-auto flex flex-col gap-3.5 sm:gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-hover group bg-[#141825] rounded-3xl p-4 sm:p-6 border border-amber-500/15 flex items-center gap-4 sm:gap-5 hover:border-amber-400/40 transition-colors shadow-lg"
                style={{ opacity: 0 }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 text-amber-400 transition-colors">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    {link.label}
                  </span>
                  <p className="text-sm sm:text-base md:text-lg text-white font-medium mt-0.5 truncate">
                    {link.value}
                  </p>
                </div>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-amber-400 transition-colors flex-shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Main CTA: Open Modal Form */}
        <div className="text-center mt-10 sm:mt-14">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto gold-shimmer-btn text-black font-bold px-8 sm:px-12 py-4 rounded-full shadow-xl shadow-amber-500/25 text-base sm:text-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
          >
            <Sparkles size={20} />
            Lancer un projet / Demander un devis
          </button>
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
    <footer className="bg-[#090B10] rounded-t-[2.5rem] sm:rounded-t-[4rem] py-10 sm:py-12 px-5 sm:px-6 border-t border-amber-500/15">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
        {/* Name & Credit */}
        <div>
          <p className="text-white font-semibold text-base sm:text-lg">
            {PROFILE.name}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Fait avec passion & <span className="text-amber-400 font-medium">vibe coding</span> — {new Date().getFullYear()}
          </p>
        </div>

        {/* Online Indicator */}
        <div className="flex items-center gap-2.5 bg-white/5 border border-amber-500/20 px-4 py-2 rounded-full">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot-gold" />
          <span className="font-mono text-xs text-slate-300 tracking-wider">
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <NoiseOverlay />
      
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Navbar with modal trigger */}
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
