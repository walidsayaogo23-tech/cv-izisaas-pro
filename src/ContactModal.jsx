import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, Building2, User, DollarSign, Briefcase, Mail, Phone, CheckCircle2, MessageCircle } from './icons';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    clientType: 'business', // 'business' or 'individual'
    contactMethod: '',
    mission: '',
    budget: '500 € – 1 500 € (~1M FCFA)',
    customBudget: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '< 500 € (< 325k FCFA)',
    '500 € – 1 500 € (~1M FCFA)',
    '1 500 € – 3 000 € (~2M FCFA)',
    '3 000 € + (Sur mesure)',
    'Autre / À définir',
  ];

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending / processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      clientType: 'business',
      contactMethod: '',
      mission: '',
      budget: '500 € – 1 500 € (~1M FCFA)',
      customBudget: '',
    });
    onClose();
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Bonjour Walid, je suis ${formData.name || 'un prospect'}.\n` +
      `📌 Type: ${formData.clientType === 'business' ? 'Entreprise' : 'Particulier'}\n` +
      `💼 Mission: ${formData.mission}\n` +
      `💰 Budget: ${formData.budget || formData.customBudget || 'À discuter'}\n` +
      `📫 Contact: ${formData.contactMethod}`
    );
    return `https://wa.me/22675005833?text=${text}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Demande de mission : ${formData.name}`);
    const body = encodeURIComponent(
      `Bonjour Walid,\n\n` +
      `Nom/Entreprise: ${formData.name}\n` +
      `Contact: ${formData.contactMethod}\n` +
      `Budget estimé: ${formData.budget}\n\n` +
      `Détails de la mission:\n${formData.mission}\n`
    );
    return `mailto:elyosdotcom@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={resetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl my-auto bg-gradient-to-b from-[#141824] to-[#0D1017] border border-amber-500/30 rounded-3xl sm:rounded-4xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-ghost z-10 transition-all duration-300 transform scale-100 max-h-[90vh] overflow-y-auto">
        
        {/* Glow Accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ghost/70 hover:text-white hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
                <Sparkles size={13} className="text-amber-400" />
                Démarrer un projet
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-white">
                Parlons de votre <span className="gold-gradient-text">mission</span>
              </h2>
              <p className="text-sm text-slate-300 mt-2 font-light">
                Remplissez ce formulaire rapide. Je vous réponds sous 24h avec une proposition sur-mesure.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Vous représentez :
                </label>
                <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, clientType: 'business' })}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      formData.clientType === 'business'
                        ? 'bg-amber-500 text-black font-semibold shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Building2 size={15} />
                    Une Entreprise
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, clientType: 'individual' })}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      formData.clientType === 'individual'
                        ? 'bg-amber-500 text-black font-semibold shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <User size={15} />
                    Un Particulier
                  </button>
                </div>
              </div>

              {/* Name / Company Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  {formData.clientType === 'business' ? "Nom de l'entreprise ou contact *" : "Votre nom complet *"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400/80">
                    {formData.clientType === 'business' ? <Building2 size={16} /> : <User size={16} />}
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={formData.clientType === 'business' ? "Ex: TechNova SARL / Aminata Diallo" : "Ex: Jean-Marc Dupont"}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/[0.08] focus:outline-none rounded-2xl text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Email ou WhatsApp pour vous répondre *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400/80">
                    <Mail size={16} />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    placeholder="Ex: contact@entreprise.com ou +226 70 00 00 00"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/[0.08] focus:outline-none rounded-2xl text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              {/* Mission Field */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Mission ou projet à confier *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-amber-400/80">
                    <Briefcase size={16} />
                  </div>
                  <textarea
                    required
                    rows={3}
                    value={formData.mission}
                    onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                    placeholder="Ex: Développement d'une plateforme web, audit de cybersécurité, refonte UI/UX, intégration IA..."
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/[0.08] focus:outline-none rounded-2xl text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Budget Options */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Budget indicatif
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: opt })}
                      className={`text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                        formData.budget === opt
                          ? 'border-amber-400 bg-amber-500/15 text-amber-300 font-semibold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <span>{opt}</span>
                      {formData.budget === opt && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 gold-shimmer-btn text-black font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-amber-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande de projet
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 font-light">
                🔒 Vos informations restent strictement confidentielles.
              </p>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 sm:py-8 space-y-5">
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/20">
              <CheckCircle2 size={42} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                Demande transmise avec succès !
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed">
                Merci <strong className="text-amber-400">{formData.name}</strong>. J'ai bien noté votre projet. Je vais examiner les spécifications et vous recontacter dans les plus brefs délais.
              </p>
            </div>

            {/* Quick Action Options */}
            <div className="bg-white/5 border border-amber-500/20 rounded-2xl p-4 max-w-md mx-auto text-left space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-semibold">
                Besoin d'une réponse immédiate ?
              </span>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-colors"
                >
                  <MessageCircle size={16} />
                  Ouvrir sur WhatsApp
                </a>
                <a
                  href={getMailtoLink()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-white/10 transition-colors"
                >
                  <Mail size={16} />
                  Envoyer par Email
                </a>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 text-sm font-semibold transition-colors"
            >
              Fermer la fenêtre
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
