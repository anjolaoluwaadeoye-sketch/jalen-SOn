import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Phone, Calendar, Star, CheckCircle2, Droplets, Wrench, Thermometer, ShieldCheck, MessageSquare, Clock, Users, MapPin, Menu, X, ArrowRight } from 'lucide-react';

// --- Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 p-2 rounded-xl">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold font-display block leading-none">Jalen & Sons</span>
            <span className="text-xs font-medium text-brand-600 tracking-wider uppercase">Plumbing</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#services" className="hover:text-brand-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-600 transition-colors">About</a>
          <a href="#reviews" className="hover:text-brand-600 transition-colors">Reviews</a>
          <a href="tel:3462391620" className="flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full hover:bg-brand-100 transition-colors">
            <Phone size={16} />
            (346) 239-1620
          </a>
          <a href="#book" className="bg-brand-600 text-white px-6 py-2 rounded-full shadow-lg shadow-brand-200 hover:bg-brand-700 transition-all transform hover:-translate-y-0.5">
            Book Now
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-6 shadow-xl md:hidden"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="tel:3462391620" className="flex items-center gap-2 text-brand-700 font-bold">
            <Phone size={18} />
            (346) 239-1620
          </a>
          <a href="#book" className="bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-bold" onClick={() => setMobileMenuOpen(false)}>
            Book Service Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

// --- Hero ---
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-600 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-brand-600" />
              <span>4.8 Rating (80+ Reviews) in Katy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Reliable Plumbing in Katy — <span className="text-brand-600">Done Right,</span> On Time.
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Top-rated local plumbers known for fast service, honest pricing, and professional care in your home. We treat your house like our own.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="group bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-brand-200 hover:bg-brand-700 transition-all flex items-center justify-center gap-2">
                Book Service Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:3462391620" className="bg-white border-2 border-slate-100 text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:border-brand-200 hover:bg-brand-50 transition-all flex items-center justify-center gap-2 text-center">
                <Phone className="w-5 h-5 text-brand-600" />
                (346) 239-1620
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                   </div>
                ))}
              </div>
              <p>Join 500+ happy Katy homeowners</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-100 rounded-[3rem] relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumbing work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[240px]">
              <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Licensed & Insured Team</p>
                <p className="text-xs text-slate-500">Service you can trust since day one.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Trust Strip ---
const TrustStrip = () => {
  const items = [
    { icon: <Clock size={20} />, text: "Fast Response Times" },
    { icon: <Users size={20} />, text: "Skilled, Friendly Technicians" },
    { icon: <ShieldCheck size={20} />, text: "Honest Upfront Pricing" },
    { icon: <Star size={20} />, text: "4.8 Rated Excellence" },
  ];

  return (
    <div className="bg-brand-600 py-6">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center gap-8 text-white">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold whitespace-nowrap opacity-90">
              <div className="bg-white/20 p-2 rounded-lg">
                {item.icon}
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Services ---
const Services = () => {
  const services = [
    {
      title: "Water Heater Services",
      desc: "Installation, maintenance, and repair for all types including tankless systems.",
      icon: <Thermometer className="text-brand-600" />,
      features: ["Next-day install", "Tankless specialists", "Leak detection"]
    },
    {
      title: "Drain & Sewer Line",
      desc: "Professional cleaning and high-tech sewer line repairs to keep things flowing.",
      icon: <Droplets className="text-brand-600" />,
      features: ["Camera inspection", "Hydro-jetting", "Root removal"]
    },
    {
      title: "Fixture Repairs",
      desc: "Updating or fixing leaky faucets, showers, toilets, and garbage disposals.",
      icon: <Wrench className="text-brand-600" />,
      features: ["Same-day repairs", "Quality parts", "Modern upgrades"]
    },
    {
      title: "Septic Systems",
      desc: "Complete septic service from maintenance to repairs and diagnostics.",
      icon: <ShieldCheck className="text-brand-600" />,
      features: ["System checks", "Pumping support", "Katy local expert"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Plumbing Services You Can Count On</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From minor drips to major installations, our expert team handles it all with the care and professionalism your home deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed font-medium">
                {s.desc}
              </p>
              <ul className="space-y-2">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="bg-brand-50 inline-flex items-center gap-4 px-6 py-4 rounded-3xl border border-brand-100">
                <span className="font-bold text-brand-800">Need emergency help?</span>
                <a href="tel:3462391620" className="bg-brand-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-brand-100 hover:bg-brand-700 transition-all">
                    Call 24/7 Service
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Social Proof / Reviews ---
const SocialProof = () => {
  const reviews = [
    {
      text: "Jalen's team came out the next morning and fixed everything fast. Shawn was super professional and easy to work with.",
      author: "Michael R.",
      location: "Katy, TX",
      tech: "Shawn"
    },
    {
      text: "Oliver explained everything clearly and didn't try to overcharge. It's refreshing to find a plumber you can actually trust.",
      author: "Sarah J.",
      location: "Katy, TX",
      tech: "Oliver"
    },
    {
      text: "They showed up exactly on time, were respectful of my home, and cleaned up perfectly after the job. Highly recommend William!",
      author: "David L.",
      location: "Cinco Ranch",
      tech: "William"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Katy Homeowners Keep Choosing Us</h2>
            <p className="text-slate-600 text-lg">
                We've built our reputation on trust, quality workmanship, and treating customers like family.
            </p>
          </div>
          <div className="flex items-center gap-6 bg-slate-50 px-8 py-4 rounded-3xl border border-slate-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-600 leading-none">4.8</p>
              <div className="flex gap-0.5 text-accent-500 my-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">80+ Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative group">
              <MessageSquare className="absolute top-8 right-8 text-brand-100 group-hover:text-brand-200 transition-colors w-10 h-10" />
              <div className="flex gap-1 text-accent-500 mb-4">
                {[1,2,3,4,5].map(j => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed font-medium">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-lg font-bold">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{r.author}</p>
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{r.location} • Fixed by {r.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f6_0%,transparent_50%)]" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A Local Team That <span className="text-brand-400">Treats You Right</span></h2>
                        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                            <p>
                                At Jalen & Sons Plumbing, we believe great service goes beyond fixing pipes. Our team is known for being professional, honest, and respectful in every home we enter. 
                            </p>
                            <p>
                                From small repairs to major plumbing jobs, we take the time to do things right—and make sure you understand every step. We're not just your plumbers; we're your neighbors here in Katy.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <p className="text-3xl font-bold text-white mb-2">100%</p>
                                <p className="text-xs font-bold text-brand-400 uppercase tracking-widest leading-none">Local & Family Owned</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                <p className="text-3xl font-bold text-white mb-2">24/7</p>
                                <p className="text-xs font-bold text-brand-400 uppercase tracking-widest leading-none">Emergency Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800" 
                                alt="Professional technician" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                        </div>
                        
                        <div className="absolute -top-10 -right-10 bg-accent-500 text-white p-8 rounded-full shadow-2xl z-20 hidden md:flex flex-col items-center justify-center rotate-12">
                             <span className="text-4xl font-black italic leading-none">KATY</span>
                             <span className="text-xs font-bold tracking-[0.2em] uppercase">Trusted</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Booking Form ---
const BookingForm = () => {
  return (
    <section id="book" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-brand-600 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need a Plumber You Can Trust?</h2>
                <p className="text-brand-100 mb-8 leading-relaxed font-medium">
                  We make it simple—fast service, honest work, no stress. Fill out the form and we'll call you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-200 tracking-wider uppercase leading-none mb-1">Call Now</p>
                    <p className="font-bold text-lg leading-none">(346) 239-1620</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-200 tracking-wider uppercase leading-none mb-1">Service Area</p>
                    <p className="font-bold text-lg leading-none">Katy, TX & Surrounding</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone Number</label>
                    <input type="tel" placeholder="(346) 000-0000" className="w-full px-5 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">How can we help?</label>
                    <select className="w-full px-5 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none font-medium text-slate-600">
                        <option>Water Heater Repair</option>
                        <option>Drain Cleaning</option>
                        <option>Fixture Installation</option>
                        <option>Sewer Line Work</option>
                        <option>Emergency Service</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Additional Details</label>
                  <textarea rows={3} placeholder="Please describe the issue..." className="w-full px-5 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-500 transition-all outline-none font-medium resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-brand-100 hover:bg-brand-700 hover:shadow-2xl transition-all transform hover:-translate-y-0.5">
                  Book Appointment Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                     <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-brand-600 p-2 rounded-xl">
                                <Droplets className="text-white w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold font-display">Jalen & Sons</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                            Professional, family-owned plumbing serving Katy for years. High-trust service for residents who want it done right.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all cursor-pointer">
                                <Users size={18} />
                            </div>
                            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all cursor-pointer">
                                <MapPin size={18} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-medium">
                            <li><a href="#services" className="hover:text-brand-600 transition-colors">Service Area</a></li>
                            <li><a href="#about" className="hover:text-brand-600 transition-colors">Our History</a></li>
                            <li><a href="#reviews" className="hover:text-brand-600 transition-colors">Customer Reviews</a></li>
                            <li><a href="#book" className="hover:text-brand-600 transition-colors">Request Quote</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 tracking-wide">Plumbing Services</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-medium">
                            <li>Water Heater Install</li>
                            <li>Drain Cleaning</li>
                            <li>Faucet & Sink Repair</li>
                            <li>Septic System Service</li>
                            <li>Emergency Plumbing</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 tracking-wide">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-500 font-medium">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-brand-600" />
                                <span className="font-bold text-slate-900">(346) 239-1620</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-brand-600" />
                                <span>Katy, Texas</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={16} className="text-brand-600" />
                                <span>Mon-Sat: 7AM - 7PM</span>
                            </li>
                            <li className="pt-2">
                                <p className="text-xs bg-accent-50 text-accent-700 px-3 py-1 rounded-full inline-block font-bold">24/7 Emergency Support Available</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-400 font-medium tracking-wide flex items-center gap-2">
                        © 2026 Jalen & Sons Plumbing • <ShieldCheck size={14} /> Licensed & Insured
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <span className="cursor-pointer hover:text-brand-600 transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-brand-600 transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <SocialProof />
        <About />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
