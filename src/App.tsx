/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Leaf, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  BarChart3, 
  Zap, 
  Handshake, 
  Scale 
} from "lucide-react";
import { useRef } from "react";

const PillarCard = ({ 
  icon: Icon, 
  title, 
  description, 
  items, 
  color 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  items: string[]; 
  color: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="pillar-card flex flex-col h-full"
  >
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-6`}>
      <Icon className="text-white w-6 h-6" />
    </div>
    <h3 className="font-display text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center text-sm text-slate-500">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      {/* Navbar */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">EcoStrata</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
            <a href="#pillars" className="hover:text-brand-primary transition-colors">ESG Pillars</a>
            <a href="#impact" className="hover:text-brand-primary transition-colors">Our Impact</a>
            <button className="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header ref={targetRef} className="relative h-[90vh] flex items-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
            alt="Sustainable Landscapes" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-2" /> The Future of ESG is Here
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tighter">
              Defining the <span className="text-brand-accent italic font-light">next frontier</span> of impact.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We empower industry leaders to bridge the gap between corporate ambition and measurable sustainability through advanced data-driven ESG strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 cursor-pointer">
                Explore Our Solutions <ArrowRight className="w-4 h-4" />
              </button>
              <button className="backdrop-blur-md bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all cursor-pointer">
                View Impact Report
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Intro Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070" 
                alt="Modern Architecture" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                Beyond compliance, <br />towards <span className="text-brand-secondary underline decoration-brand-accent/30 underline-offset-8">regeneration</span>.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                ESG is no longer just a checkbox. It's the strategic framework that will determine the winners of the next decade. At EcoStrata, we don't just report numbers; we transform operations.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-brand-bg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Data Precision</h4>
                    <p className="text-sm text-slate-500 leading-snug">Audit-ready metrics that withstand global scrutiny.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-brand-bg flex items-center justify-center">
                    <Users className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Social Equity</h4>
                    <p className="text-sm text-slate-500 leading-snug">Empowering diverse workforces across the globe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold mb-6 tracking-tight">The Three Foundations</h2>
            <p className="text-slate-600">
              Our comprehensive approach ensures every dimension of your organization is optimized for a sustainable future.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard 
              icon={Leaf}
              title="Environmental"
              description="Harnessing carbon intelligence to navigate the transition to net-zero while preserving planetary health."
              items={["Decarbonization Roadmap", "Biodiversity Restoration", "Resource Circularity"]}
              color="bg-brand-secondary"
            />
            <PillarCard 
              icon={Handshake}
              title="Social"
              description="Building resilient communities and inclusive cultures where every stakeholder can thrive and belong."
              items={["Human Rights Due Diligence", "DE&I Integration", "Supply Chain Ethics"]}
              color="bg-blue-600"
            />
            <PillarCard 
              icon={ShieldCheck}
              title="Governance"
              description="Implementing rigorous ethical frameworks that ensure transparency and long-term stability."
              items={["Executive Accountability", "Risk Management", "Tax Transparency"]}
              color="bg-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 tracking-tighter">1.2M</div>
              <div className="text-brand-accent font-bold text-sm uppercase tracking-widest">Tons CO2 Offset</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 tracking-tighter">85%</div>
              <div className="text-brand-accent font-bold text-sm uppercase tracking-widest">Renewable Share</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 tracking-tighter">250+</div>
              <div className="text-brand-accent font-bold text-sm uppercase tracking-widest">Global Partners</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 tracking-tighter">$4.2B</div>
              <div className="text-brand-accent font-bold text-sm uppercase tracking-widest">Assets Transitioned</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to lead the <br /><span className="text-brand-accent italic">green revolution?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Join hundreds of organizations that have already transformed their ESG potential into a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent w-full md:w-80"
                />
                <button className="bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all">
                  Get Strategy Call
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-64 h-64 border-2 border-brand-accent/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-48 h-48 border-2 border-brand-accent/40 rounded-full flex items-center justify-center">
                  <Globe className="text-brand-accent w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -ml-10 -mb-10" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center">
                <Globe className="text-white w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">EcoStrata</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary">ESG Compliance</a>
              <a href="#" className="hover:text-brand-primary">Transparency Hub</a>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 EcoStrata Global. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
